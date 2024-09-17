package com.second_hand_auction_system.service.user;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.second_hand_auction_system.dtos.request.user.Authentication;
import com.second_hand_auction_system.dtos.request.user.RegisterRequest;
import com.second_hand_auction_system.dtos.responses.user.AuthenticationResponse;
import com.second_hand_auction_system.dtos.responses.user.RegisterResponse;
import com.second_hand_auction_system.dtos.responses.user.UserResponse;
import com.second_hand_auction_system.models.Token;
import com.second_hand_auction_system.models.User;
import com.second_hand_auction_system.repositories.TokenRepository;
import com.second_hand_auction_system.repositories.UserRepository;
import com.second_hand_auction_system.service.jwt.IJwtService;
import com.second_hand_auction_system.utils.Role;
import com.second_hand_auction_system.utils.TokenType;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
@RequiredArgsConstructor
public class UserService implements IUserService {

    private final UserRepository userRepository;
    private final AuthenticationManager authenticationManager;
    private final IJwtService jwtService;
    private final PasswordEncoder passwordEncoder;
    private final TokenRepository tokenRepository;
    private final ModelMapper modelMapper;

    @Override
    public ResponseEntity<RegisterResponse> register(RegisterRequest registerRequest) {
        try {
            if (userRepository.existsByEmail(registerRequest.getEmail())) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(
                        RegisterResponse.builder()
                                .status(HttpStatus.BAD_REQUEST.value())
                                .message("Email already in use")
                                .build()
                );
            }

            User newUser = User.builder()
                    .email(registerRequest.getEmail())
                    .password(passwordEncoder.encode(registerRequest.getPassword()))
                    .role(Role.BUYER)
                    .username(registerRequest.getFullName())
                    .phoneNumber(registerRequest.getPhoneNumber())
                    .status(true)
                    .build();

            userRepository.save(newUser);
            return ResponseEntity.ok(RegisterResponse.builder()
                    .status(HttpStatus.OK.value())
                    .message("User registered successfully")
                    .build());

        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(
                    RegisterResponse.builder()
                            .status(HttpStatus.INTERNAL_SERVER_ERROR.value())
                            .message("Registration failed")
                            .build()
            );
        }
    }

    @Override
    public ResponseEntity<AuthenticationResponse> login(Authentication authenticationRequest) {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            authenticationRequest.getEmail(),
                            authenticationRequest.getPassword()
                    )
            );

            User user = userRepository.findByEmail(authenticationRequest.getEmail())
                    .orElseThrow(() -> new RuntimeException("User not found"));

            String jwtToken = jwtService.generateToken(user);
            String refreshToken = jwtService.generateRefreshToken(user);

            revokeAllUserTokens(user);
            saveToken(user, jwtToken, refreshToken);
            UserResponse userResponse = modelMapper.map(user, UserResponse.class);
            AuthenticationResponse.ResponseData responseData = AuthenticationResponse.ResponseData.builder()
                    .user(userResponse)
                    .token(jwtToken)
                    .refreshToken(refreshToken)
                    .build();

            return ResponseEntity.ok(AuthenticationResponse.builder()
                    .status(HttpStatus.OK.value())
                    .message("Login successful")
                    .data(responseData)
                    .build());

        } catch (BadCredentialsException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(
                    AuthenticationResponse.builder()
                            .status(HttpStatus.UNAUTHORIZED.value())
                            .message("Invalid credentials")
                            .build()
            );
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(
                    AuthenticationResponse.builder()
                            .status(HttpStatus.INTERNAL_SERVER_ERROR.value())
                            .message("An error occurred")
                            .build()
            );
        }
    }

    @Override
    public void refresh(HttpServletRequest request, HttpServletResponse response) throws IOException {
        final String authHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
        final String refreshToken;
        final String userEmail;
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            return;
        }
        refreshToken = authHeader.substring(7);
        userEmail = jwtService.extractUserEmail(refreshToken);
        if (userEmail != null) {
            var user = this.userRepository.findByEmail(userEmail).orElseThrow();
            if (jwtService.isTokenValid(refreshToken, user)) {
                var newToken = jwtService.generateToken(user);
                revokeAllUserTokens(user);
                saveToken(user, newToken, refreshToken);
                var authResponse = AuthenticationResponse.builder()
                        .status(200)
                        .message("Successfully")
                        .data(AuthenticationResponse.ResponseData.builder()
                                .token(newToken)
                                .refreshToken(refreshToken)
                                .user(null)
                                .build())
                        .build();
                new ObjectMapper().writeValue(response.getOutputStream(), authResponse);
            }
        }
    }

    private void saveToken(User user, String jwtToken, String refreshToken) {
        Token token = Token.builder()
                .user(user)
                .token(jwtToken)
                .refreshToken(refreshToken)
                .tokenType(TokenType.BEARER)
                .revoked(false)
                .expired(false)
                .build();
        tokenRepository.save(token);
    }

    private void revokeAllUserTokens(User user) {
        var tokenList = tokenRepository.findAllUserTokenByUserId(user.getId());
        tokenList.forEach(token -> {
            token.setRevoked(true);
            token.setExpired(true);
        });
        tokenRepository.saveAll(tokenList);
    }

}
