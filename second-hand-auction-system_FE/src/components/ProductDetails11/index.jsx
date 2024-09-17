import { Text, Heading, RatingBar, Img } from "./..";
import React from "react";

export default function ProductDetails11({
  productImage = "images/img_image_30_190x190.png",
  productTitle = "Sắc đẹp",
  productDescription = (
    <>
      Son Romand siêu đẹp
      <br />
      mới dùng
    </>
  ),
  reviewCount = "3,014 đánh giá",
  currentPrice,
  originalPrice = "328.000đ",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center md:w-full border-gray-200 border border-solid bg-bg-white`}
    >
      <div className="self-stretch bg-bg-white p-3.5">
        <Img src={productImage} alt="Beauty Image" className="h-[190px] w-[190px] object-cover" />
      </div>
      <div className="mb-5 ml-3.5 mr-[18px] flex flex-col items-start gap-3 self-stretch">
        <Text size="textxs" as="p" className="text-[12px] font-normal text-blue_gray-600_01">
          {productTitle}
        </Text>
        <Heading
          size="headingxl"
          as="h6"
          className="w-full text-[16px] font-semibold leading-[150%] text-blue_gray-900_01"
        >
          {productDescription}
        </Heading>
        <div className="flex items-start gap-2.5 self-stretch">
          <RatingBar
            value={1}
            isEditable={true}
            color="#f5c34b"
            activeColor="#f5c34b"
            size={10}
            className="flex gap-2.5"
          />
          <Text size="textxs" as="p" className="self-center text-[12px] font-normal text-blue_gray-600_01">
            {reviewCount}
          </Text>
        </div>
        <div className="flex flex-wrap items-start justify-center gap-2.5 self-stretch">
          <Heading
            as="p"
            className="flex self-center font-bevietnampro text-[18px] font-semibold text-blue_gray-900_01"
          >
            <span>248.000</span>
            <a href="#" className="inline underline">
              đ
            </a>
          </Heading>
          <Text as="p" className="text-[14px] font-normal capitalize text-blue_gray-600_01 line-through">
            {originalPrice}
          </Text>
        </div>
      </div>
    </div>
  );
}



