package com.second_hand_auction_system.controller;

import com.second_hand_auction_system.dtos.responses.ResponseObject;
import com.second_hand_auction_system.dtos.responses.user.ListUserResponse;
import com.second_hand_auction_system.dtos.responses.user.UserResponse;
import com.second_hand_auction_system.service.user.IUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/user")
@RequiredArgsConstructor
public class UserController {
    private final IUserService userService;

    @GetMapping("getUser")
    @PreAuthorize("hasAuthority('admin:read')")
    //Test
    public ResponseEntity<ListUserResponse> getUser(){
        return userService.getListUser();
    }

}
