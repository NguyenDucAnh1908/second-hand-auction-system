import { Text, RatingBar, Img } from "./..";
import React from "react";

export default function ProductDetails4({
  productImage = "images/img_image_30_2.png",
  categoryText = "Thời trang",
  productDescription = "Áo Hoodie Nike dành cho mùa đông lạnh",
  reviewCount = "3,014 đánh giá",
  currentPrice,
  originalPrice = "328.000đ",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-center`}>
      <div className="self-stretch bg-bg-white px-5 py-6 sm:py-5">
        <Img src={productImage} alt="Product Image" className="h-[230px] w-full object-cover" />
      </div>
      <div className="mb-6 ml-3.5 mr-4 flex flex-col items-start gap-2.5 self-stretch">
        <Text className="text-[12px] font-normal text-blue_gray-600_01">{categoryText}</Text>
        <Text className="w-full text-[16px] font-semibold leading-[150%] text-blue_gray-900_01">
          {productDescription}
        </Text>
        <div className="flex items-start gap-2.5 self-stretch">
          <RatingBar
            value={1}
            isEditable={true}
            color="#f5c34b"
            activeColor="#f5c34b"
            size={10}
            className="flex gap-2.5"
          />
          <Text className="self-center text-[12px] font-normal text-blue_gray-600_01">{reviewCount}</Text>
        </div>
        <div className="flex flex-wrap items-center gap-2.5 self-stretch">
          <Text className="flex text-[18px] font-semibold text-blue_gray-900_01">
            <span>278.000</span>
            <a href="#" className="inline underline">
              đ
            </a>
          </Text>
          <Text className="self-start text-[14px] font-normal capitalize text-blue_gray-600_01 line-through">
            {originalPrice}
          </Text>
        </div>
      </div>
    </div>
  );
}



