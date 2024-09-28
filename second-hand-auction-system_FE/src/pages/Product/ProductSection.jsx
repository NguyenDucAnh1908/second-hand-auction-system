import { Text, SelectBox, Img, Heading } from "../../components";
import Pagination from "../../components/Pagination";
import ProductDetails21 from "../../components/ProductDetails21";
import React, { Suspense } from "react";

const fashionItemsGrid = [
  {
    productImage: "images/img_image_30_4.png",
    productTitle: "Thời trang",
    productDescription: "Áo Hoodie Nike dành cho mùa đông lạnh",
    reviewCount: "3,014 đánh giá",
    originalPrice: "328.000đ",
  },
  {
    productImage: "images/img_image_30_4.png",
    productTitle: "Thời trang",
    productDescription: "Áo Hoodie Nike dành cho mùa đông lạnh",
    reviewCount: "3,014 đánh giá",
  },
  {
    productImage: "images/img_image_30_2.png",
    productTitle: "Thời trang",
    productDescription: "Áo Hoodie Nike dành cho mùa đông lạnh",
    reviewCount: "3,014 đánh giá",
    originalPrice: "328.000đ",
  },
  {
    productImage: "images/img_image_30_2.png",
    productTitle: "Thời trang",
    productDescription: "Áo Hoodie Nike dành cho mùa đông lạnh",
    reviewCount: "3,014 đánh giá",
    originalPrice: "328.000đ",
  },
  {
    productImage: "images/img_image_30_2.png",
    productTitle: "Thời trang",
    productDescription: "Áo Hoodie Nike dành cho mùa đông lạnh",
    reviewCount: "3,014 đánh giá",
    originalPrice: "328.000đ",
  },
  {
    productImage: "images/img_image_30_2.png",
    productTitle: "Thời trang",
    productDescription: "Áo Hoodie Nike dành cho mùa đông lạnh",
    reviewCount: "3,014 đánh giá",
    originalPrice: "328.000đ",
  },
  {
    productImage: "images/img_image_30_4.png",
    productTitle: "Thời trang",
    productDescription: "Áo Hoodie Nike dành cho mùa đông lạnh",
    reviewCount: "3,014 đánh giá",
    originalPrice: "328.000đ",
  },
  {
    productImage: "images/img_image_30_3.png",
    productTitle: "Thời trang",
    productDescription: "Áo Hoodie Nike dành cho mùa đông lạnh",
    reviewCount: "3,014 đánh giá",
    originalPrice: "328.000đ",
  },
  {
    productImage: "images/img_image_30_3.png",
    productTitle: "Thời trang",
    productDescription: "Áo Hoodie Nike dành cho mùa đông lạnh",
    reviewCount: "3,014 đánh giá",
    originalPrice: "328.000đ",
  },
  {
    productImage: "images/img_image_30_2.png",
    productTitle: "Thời trang",
    productDescription: "Áo Hoodie Nike dành cho mùa đông lạnh",
    reviewCount: "3,014 đánh giá",
    originalPrice: "328.000đ",
  },
  {
    productImage: "images/img_image_30_2.png",
    productTitle: "Thời trang",
    productDescription: "Áo Hoodie Nike dành cho mùa đông lạnh",
    reviewCount: "3,014 đánh giá",
    originalPrice: "328.000đ",
  },
  {
    productImage: "images/img_image_30_3.png",
    productTitle: "Thời trang",
    productDescription: "Áo Hoodie Nike dành cho mùa đông lạnh",
    reviewCount: "3,014 đánh giá",
    originalPrice: "328.000đ",
  },
  {
    productImage: "images/img_image_30_2.png",
    productTitle: "Thời trang",
    productDescription: "Áo Hoodie Nike dành cho mùa đông lạnh",
    reviewCount: "3,014 đánh giá",
    originalPrice: "328.000đ",
  },
  {
    productImage: "images/img_image_30_4.png",
    productTitle: "Thời trang",
    productDescription: "Áo Hoodie Nike dành cho mùa đông lạnh",
    reviewCount: "3,014 đánh giá",
    originalPrice: "328.000đ",
  },
  {
    productImage: "images/img_image_30_2.png",
    productTitle: "Thời trang",
    productDescription: "Áo Hoodie Nike dành cho mùa đông lạnh",
    reviewCount: "3,014 đánh giá",
    originalPrice: "328.000đ",
  },
  {
    productImage: "images/img_image_30_3.png",
    productTitle: "Thời trang",
    productDescription: "Áo Hoodie Nike dành cho mùa đông lạnh",
    reviewCount: "3,014 đánh giá",
    originalPrice: "328.000đ",
  },
];
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function ProductSection() {
  return (
    <>
      {/* product section */}
      <div className="mt-20 flex flex-col items-center self-stretch">

        <div className="flex flex-col items-start gap-6 ml-auto">

          <select
            className="rounded-md border border-solid border-gray-200 text-blue_gray-900_01"
            defaultValue="" // Thiết lập giá trị mặc định
          >
            <option value="" disabled hidden>
              Sắp xếp
            </option>
            <option value="low-to-high">Giá thấp đến cao</option>
            <option value="high-to-low">Giá cao đến thấp</option>
          </select>
        </div>



        <div className="mx-7 mt-5 grid grid-cols-4 justify-center gap-3.5 self-stretch px-1 md:mx-0 md:grid-cols-2 sm:grid-cols-1 ml-auto">
          <Suspense fallback={<div>Loading feed...</div>}>
            {fashionItemsGrid.map((d, index) => (
              <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                <ProductDetails21 {...d} key={"itemsGrid" + index} />
              </a>
            ))}
          </Suspense>
        </div>
        <Pagination />
      </div>

    </>
  );
}





