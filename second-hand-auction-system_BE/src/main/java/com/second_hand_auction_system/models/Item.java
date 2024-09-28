package com.second_hand_auction_system.models;

import com.second_hand_auction_system.utils.ItemStatus;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "item")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class Item extends BaseEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int itemId;

    @Column(name = "title")
    private String title;

    @Column(name = "item_name")
    private String itemName;

    @Column(name = "item_description")
    private String itemDescription;

    @Column(name = "item_condition")
    private String itemCondition;

    @Enumerated(EnumType.STRING)
    private ItemStatus itemStatus;

    @Column(name = "brand_name")
    private String brandName;

    @Lob
    @Column(name = "document")
    private byte[] fileData;

    @Column(name = "thumbnail")
    private String thumbnail;

    @Column(name = "createBy")
    private String createBy;

    @Column(name = "updateBy")
    private String updateBy;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @OneToOne(mappedBy = "item",cascade = CascadeType.ALL)
    private FeedBack feedBack;

    @OneToOne(mappedBy = "item",cascade = CascadeType.ALL)
    private Auction auction;

    @OneToOne(mappedBy = "item",cascade = CascadeType.ALL)
    private ItemSpecific itemSpecific;
}
