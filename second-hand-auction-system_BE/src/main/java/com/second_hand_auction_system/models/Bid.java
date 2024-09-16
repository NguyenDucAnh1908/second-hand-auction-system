package com.second_hand_auction_system.models;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "bid")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class Bid extends BaseEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int bidId;

    @Column(name = "bid_amout")
    private int bidAmount;

    @Column(name = "bid_time")
    private int bidTime;

    @Column(name = "bid_status")
    private String bidStatus;

    @Column(name = "win_bid")
    private boolean winBid;
}
