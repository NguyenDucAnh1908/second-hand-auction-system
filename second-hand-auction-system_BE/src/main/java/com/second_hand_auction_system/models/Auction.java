package com.second_hand_auction_system.models;

import com.second_hand_auction_system.utils.AuctionStatus;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.Date;

@Entity
@Table(name = "auction")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class Auction extends BaseEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int auctionId;

    @Column(name = "start_time")
    private LocalDateTime startTime;

    @Column(name = "end_time")
    private LocalDateTime  endTime;

    @Column(name = "start_price")
    private double startPrice;

    @Column(name = "description")
    private String description;

    @Column(name = "term_and_conditions")
    private String termConditions;

    @Column(name = "price_step")
    private double priceStep;

    @Column(name = "ship_type")
    private String shipType;

    @Column(name = "comment")
    private String comment;

    @Enumerated(EnumType.STRING)
    private AuctionStatus status;

    @Column(name = "approve_by")
    private String approveBy;

    @Column(name = "approve_at")
    private Date approveAt;

    @Column(name = "create_by")
    private String createBy;

    @OneToOne
    @JoinColumn(name = "item_id")
    private Item item;
}
