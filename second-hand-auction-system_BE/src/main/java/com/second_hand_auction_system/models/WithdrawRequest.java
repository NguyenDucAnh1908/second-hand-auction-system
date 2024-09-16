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
@Table(name = "with_draw_request")
public class WithdrawRequest extends BaseEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int withdrawRequestId;

    @Column(name = "request_amount")
    private double requestAmount;

    @Column(name = "request_status")
    private String requestStatus;

    @Column(name = "process_at")
    private LocalDateTime processAt;
}
