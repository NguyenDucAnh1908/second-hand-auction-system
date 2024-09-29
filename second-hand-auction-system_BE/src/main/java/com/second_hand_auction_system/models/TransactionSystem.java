package com.second_hand_auction_system.models;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
@Table(name = "transaction_system")
public class TransactionSystem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int transactionSystemId;

    @Column(name = "account_number")
    private int accountNumber;

    @Column(name = "transaction_type")
    private String transactionType;

    @Column(name = "status")
    private String status;

    @Column(name = "amount")
    private double amount;

    @Column(name = "transaction_time")
    private LocalDateTime transactionTime;

    @Column(name = "reference")
    private String reference;

    @Column(name = "description")
    private String description;

    @Column(name = "vitural_account_name")
    private String vituralAccountName;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

}
