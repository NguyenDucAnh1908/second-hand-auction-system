package com.second_hand_auction_system.models;

import jakarta.persistence.*;
import lombok.*;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
@Table(name = "sub_category")
public class SubCategory extends BaseEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int subCategoryId;

    @Column(name = "sub_category")
    private String subCategory;

    @Column(name = "description")
    private String description;


}
