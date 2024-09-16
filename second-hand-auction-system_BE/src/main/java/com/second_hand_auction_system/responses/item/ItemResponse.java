package com.second_hand_auction_system.responses.item;

import com.second_hand_auction_system.responses.BaseResponse;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ItemResponse extends BaseResponse {
    private int id;
}
