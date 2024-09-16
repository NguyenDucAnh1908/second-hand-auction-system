package com.second_hand_auction_system.models;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "itemspecific")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class ItemSpecific extends BaseEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int itemSpecificId;

    @Column(name = "codition")
    private String codition;

    @Column(name = "percent")
    private double percent;

    @Column(name = "type")
    private String type;

    @Column(name = "color")
    private String color;

    @Column(name = "weight")
    private double weight;

    @Column(name = "original")
    private String original;

    @Column(name = "purpose")
    private String purpose;

    @Column(name = "dexterity")
    private String dexterity;

    @Column(name = "theme")
    private String theme;

    @Column(name = "material")
    private String material;

}
