package com.second_hand_auction_system.controller;

import com.second_hand_auction_system.service.user.IUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/user")
@RequiredArgsConstructor
@CrossOrigin("*")
public class UserController {
    private final IUserService userService;

    @PostMapping
    public String getUser(){
        return "User1";
    }

}
