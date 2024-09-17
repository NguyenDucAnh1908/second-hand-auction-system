package com.second_hand_auction_system.dtos.responses.item;

import com.second_hand_auction_system.dtos.responses.BaseResponse;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ItemResponse extends BaseResponse {
    private int id;
}
