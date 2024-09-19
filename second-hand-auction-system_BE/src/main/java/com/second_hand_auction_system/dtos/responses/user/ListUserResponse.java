package com.second_hand_auction_system.dtos.responses.user;

import lombok.*;

import java.util.List;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ListUserResponse {
    private String message;
    List<UserResponse> users;
}
