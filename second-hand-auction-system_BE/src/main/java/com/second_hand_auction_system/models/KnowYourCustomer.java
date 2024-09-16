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
@Table(name = "kyc")
public class KnowYourCustomer extends BaseEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int kycId;

    @Column(name = "document")
    private String document;

    @Column(name = "kyc_status")
    private String kycStatus;

    @Column(name = "sumbited")
    private LocalDateTime sumbited;

    @Column(name = "verified_at")
    private LocalDateTime verifiedAt;
}
