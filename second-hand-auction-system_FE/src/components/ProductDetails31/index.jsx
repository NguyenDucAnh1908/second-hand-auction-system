import { Text, Img } from "./..";
import React from "react";

export default function ProductDetails31({
  productImage = "images/img_image_30.png",
  productCategory = "Thời trang",
  productDescription = (
    <>
      Váy body ôm sát <br />
      không co giãn
    </>
  ),
  reviewCount = "3,014 đánh giá",
  currentPrice,
  originalPrice = "328.000đ",
  discount = "Giảm 20%",
  soldCount = "Đã bán 56",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center gap-0.5 border-gray-200 border border-solid bg-bg-white`}
    >
      <div className="self-stretch bg-bg-white px-5 py-6 sm:py-5">
        <Img src={productImage} alt="Product Image" className="h-[230px] w-full object-cover" />
      </div>
      <div className="mb-[22px] ml-3.5 mr-4 flex flex-col gap-5 self-stretch">
        <div className="flex flex-col items-start">
          <Text className="text-[14px] font-normal text-blue_gray-600_01">{productCategory}</Text>
          <Text className="mt-2 w-full text-[16px] font-semibold leading-[150%] text-blue_gray-900_01">
            {productDescription}
          </Text>
          <div className="mt-[18px] flex items-start gap-[11px] self-stretch">
            <div className="flex gap-1">
              <Img src="images/img_star_1_1.svg" alt="First Star" className="h-[10px] w-[10px]" />
              <Img src="images/img_star_1_1.svg" alt="Second Star" className="h-[10px] w-[10px]" />
              <Img src="images/img_star_1_1.svg" alt="Third Star" className="h-[10px] w-[10px]" />
              <Img src="images/img_star_1_1.svg" alt="Fourth Star" className="h-[10px] w-[10px]" />
              <Img src="images/img_star_1_1.svg" alt="Fifth Star" className="h-[10px] w-[10px]" />
            </div>
            <Text className="self-center text-[12px] font-normal text-blue_gray-600_01">{reviewCount}</Text>
          </div>
          <div className="mt-2.5 flex flex-wrap items-center justify-center self-stretch">
            <Text className="flex text-[18px] font-semibold text-blue_gray-900_01">
              <span>278.000</span>
              <a href="#" className="inline underline">
                đ
              </a>
            </Text>
            <Text className="ml-2.5 self-start text-[14px] font-normal capitalize text-blue_gray-600_01 line-through">
              {originalPrice}
            </Text>
            <Text className="ml-2.5 text-[12px] font-normal text-deep_purple-800">{discount}</Text>
          </div>
        </div>
        <div className="flex">
          <Text className="mt-3.5 text-[12px] font-normal text-blue_gray-900_01">{soldCount}</Text>
        </div>
      </div>
    </div>
  );
}



