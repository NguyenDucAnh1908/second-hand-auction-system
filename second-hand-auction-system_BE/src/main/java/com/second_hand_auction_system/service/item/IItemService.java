package com.second_hand_auction_system.service.item;

import com.second_hand_auction_system.dtos.request.item.ItemDto;
import com.second_hand_auction_system.exceptions.DataNotFoundException;

public interface IItemService {
    void createItem(ItemDto itemDto) throws DataNotFoundException;

    void updateItem(ItemDto itemDto) throws DataNotFoundException;

    void deleteItem(ItemDto itemDto) throws DataNotFoundException;
}
