package com.second_hand_auction_system.models;

import com.second_hand_auction_system.utils.OrderStatus;
import com.second_hand_auction_system.utils.PaymentMethod;
import com.second_hand_auction_system.utils.PaymentStatus;
import jakarta.persistence.*;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
@Table(name = "order")
public class Order extends BaseEntity {
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

    @Enumerated(EnumType.STRING)
    private OrderStatus status;

    @Enumerated(EnumType.STRING)
    private PaymentMethod paymentMethod;

    @Column(name = "shipping_method")
    private String shippingMethod;

    @Column(name = "note")
    private String note;

    @Column(name = "create_by")
    private String createBy;
}
