import { Text, Heading, RatingBar, Img } from "./..";
import React from "react";

export default function ProductDetails21({
  productImage = "images/img_image_30_4.png",
  productTitle = "Thời trang",
  productDescription = "Áo Hoodie Nike dành cho mùa đông lạnh",
  reviewCount = "3,014 đánh giá",
  salePrice,
  originalPrice = "328.000đ",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center w-full border-gray-200 border border-solid bg-bg-white rounded-lg overflow-hidden`}
    >
      <div className="self-stretch bg-bg-white px-3 py-3 sm:py-5">
        <Img
          src={productImage}
          alt="Fashion Image"
          className="h-[230px] w-[230px] object-cover rounded-lg"
        />
      </div>
      <div className="mx-3.5 mb-6 flex flex-col items-start gap-2.5 self-stretch">
        <Text
          size="textxs"
          as="p"
          className="text-[12px] font-normal text-blue_gray-600_01"
        >
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
          <div className="flex items-center">
            <svg
              className="w-4 h-4 text-yellow-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <p className="ms-2 text-sm font-bold text-gray-900 dark:text-white">
              4.95
            </p>
            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <a
              href="#"
              className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"
            >
              73 reviews
            </a>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2.5 self-stretch">
          <Heading
            size="heading2xl"
            as="h6"
            className="flex text-[18px] font-semibold text-blue_gray-900_01"
          >
            <span>278.000</span>
            <a href="#" className="inline underline">
              đ
            </a>
          </Heading>
        </div>
      </div>
    </div>
  );
}
