package com.second_hand_auction_system.models;

import jakarta.persistence.*;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
@Table(name = "order")
public class Order extends BaseEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int orderId;

    @Column(name = "total_amount")
    private double totalAmount;

    @Column(name = "email")
    private String email;

    @Column(name = "quantity")
    private int quantity;

    @Column(name = "phone_number")
    private String phoneNumber;

    @Column(name = "status")
    private String status;

    @Column(name = "payment_method")
    private String paymentMethod;

    @Column(name = "payment_status")
    private String paymentStatus;

    @Column(name = "shipping_method")
    private String shippingMethod;

    @Column(name = "note")
    private String note;

    @Column(name = "create_by")
    private String createBy;
}
