package com.second_hand_auction_system.controller;

import com.second_hand_auction_system.dtos.responses.ResponseObject;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/walletCustomer")
public class WalletCustomerController {
    @PostMapping("/deposit")
    public ResponseEntity<ResponseObject> deposit (@)
}
