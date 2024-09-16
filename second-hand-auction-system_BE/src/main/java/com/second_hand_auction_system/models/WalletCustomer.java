package com.second_hand_auction_system.models;

import jakarta.persistence.*;
import lombok.*;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
@Table(name = "wallet_customer")
public class WalletCustomer extends BaseEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int walletCustomerId;

    @Column(name = "balance")
    private double balance;

    @Column(name = "last_transaction")
    private String lastTransaction;
}
