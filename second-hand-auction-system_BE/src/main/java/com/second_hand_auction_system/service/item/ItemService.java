package com.second_hand_auction_system.service.item;

import com.second_hand_auction_system.dtos.request.item.ImgItemDto;
import com.second_hand_auction_system.dtos.request.item.ItemDto;
import com.second_hand_auction_system.dtos.request.item.ItemSpecificDto;
import com.second_hand_auction_system.exceptions.DataNotFoundException;
import com.second_hand_auction_system.models.ImageItem;
import com.second_hand_auction_system.models.Item;
import com.second_hand_auction_system.models.ItemSpecific;
import com.second_hand_auction_system.models.SubCategory;
import com.second_hand_auction_system.repositories.ImageItemRepository;
import com.second_hand_auction_system.repositories.ItemRepository;
import com.second_hand_auction_system.repositories.SubCategoryRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ItemService implements IItemService{
    private final ItemRepository itemRepository;
    private final SubCategoryRepository subCategoryRepository;
    private final ImageItemRepository imageItemRepository;
    private final ModelMapper modelMapper;

    @Override
    @Transactional
    public void addItem(ItemDto itemDto) throws Exception {
        Item item = modelMapper.map(itemDto, Item.class);
        SubCategory subCategory = subCategoryRepository.findById(itemDto.getScId())
                .orElseThrow(() -> new DataNotFoundException("SubCategory not found with id: " + itemDto.getScId()));
        item.setSubCategory(subCategory);
        if (itemDto.getItemSpecific() != null) {
            ItemSpecific itemSpecific = modelMapper.map(itemDto.getItemSpecific(), ItemSpecific.class);
            item.setItemSpecific(itemSpecific);
        }

//        if (itemDto.getImgItem() != null && !itemDto.getImgItem().isEmpty()) {
//            List<ImageItem> imageItems = new ArrayList<>();
//            for (ImgItemDto imgItemDto : itemDto.getImgItem()) {
//                ImageItem imageItem = new ImageItem();
//                imageItem.setImageUrl(imgItemDto.getImageUrl()); // Set image URL
//                imageItem.setItem(item);  // Set the relationship with Item
//                imageItems.add(imageItem);
//            }
//            // Save all image items in one go
//            imageItemRepository.saveAll(imageItems);
//            // Optionally, associate the list of image items back to the item object
//            item.setImageItems(imageItems);
//        }
        if (itemDto.getImgItem() != null && !itemDto.getImgItem().isEmpty()) {
            List<ImgItemDto> imgItemDtos = itemDto.getImgItem();

            // Limit to 5 images
            if (imgItemDtos.size() > 5) {
                throw new Exception("Cannot upload more than 5 images.");
            }

            List<ImageItem> imageItems = new ArrayList<>();
            for (int i = 0; i < imgItemDtos.size(); i++) {
                ImgItemDto imgItemDto = imgItemDtos.get(i);
                ImageItem imageItem = new ImageItem();
                imageItem.setImageUrl(imgItemDto.getImageUrl()); // Set image URL
                imageItem.setItem(item);  // Set the relationship with Item
                imageItems.add(imageItem);

                // Set the first image as thumbnail
                if (i == 0) {
                    item.setThumbnail(imgItemDto.getImageUrl());
                }
            }

            // Save all image items in one go
            imageItemRepository.saveAll(imageItems);
            // Optionally, associate the list of image items back to the item object
            item.setImageItems(imageItems);
        }
        itemRepository.save(item);

    }

    @Override
    public void updateItem(ItemDto itemDto) throws Exception {

    }

    @Override
    public void deleteItem(ItemDto itemDto) throws Exception {

    }
}
