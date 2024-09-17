package com.second_hand_auction_system.dtos.responses.user;


import com.second_hand_auction_system.utils.Role;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.*;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
@Setter

public class UserResponse {
    private String userName;
    private String email;
    private String phoneNumber;

    @Enumerated(EnumType.STRING)
    private Role role;
    private boolean status;
}
