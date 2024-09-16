package com.second_hand_auction_system.models;

import jakarta.persistence.*;
import lombok.*;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
@Table(name = "transaction_wallet")
public class TransactionWallet extends BaseEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int transactionWalletId;

    @Column(name = "amout")
    private int amout;

    @Column(name = "commission_amout")
    private int commissonAmout;

    @Column(name = "commission_rate")
    private int commissionRate;

    @Column(name = "transaction_type")
    private String transactionType;

    @Column(name = "status")
    private String status;


}
