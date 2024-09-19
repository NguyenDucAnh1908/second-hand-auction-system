package com.second_hand_auction_system.configurations;

import com.second_hand_auction_system.dtos.responses.user.UserResponse;
import com.second_hand_auction_system.models.User;
import com.second_hand_auction_system.repositories.UserRepository;
import com.second_hand_auction_system.service.jwt.JwtService;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.net.CookieManager;

@Component
@RequiredArgsConstructor
public class LoginGoogle implements AuthenticationSuccessHandler {
    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;
    private final JwtService jwtService;
    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
        OAuth2User oauth2User = (OAuth2User) authentication.getPrincipal();
        String email = oauth2User.getAttribute("email");
        System.out.println("Email: " + email);
        User user = userRepository.findByEmail(email).orElse(null);
        if (user == null) {
            String password = "";
            User userGG = User.builder()
                    .email(email)
                    .status(true)
                    .password(passwordEncoder.encode(password))
                    .build();

            user = userRepository.save(userGG);
        }

        String token = jwtService.generateToken(user);
        String refreshToken = jwtService.generateRefreshToken(user);

        UserResponse userResponse = UserResponse.builder()
                .email(user.getEmail())
                .status(user.isStatus())
                .role(user.getRole())
                .fullName(user.getUsername())
                .build();
        response.addHeader("Authorization", "Bearer " + token);
        response.addHeader("refreshToken", refreshToken);
        CookieManager.setDefault(new CookieManager());
        response.sendRedirect(request.getContextPath() + "/");


    }
}
