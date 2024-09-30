import { Helmet } from "react-helmet";
import {
  ButtonDH,
  Img,
  Text,
  Heading,
  SelectBox,
  InputDH,
  TextArea,
} from "../../components";
import React from "react";


const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function RegisterProductPage() {

  
  return (
    <>
      <Helmet>
        <title>Product Registration - Manage Your Items with Ease</title>
        <meta
          name="description"
          content="Register your products on EZShop to manage listings, track orders, and ensure secure transactions. Complete product details, upload images, and set pricing with confidence."
        />
      </Helmet>
      <div className="flex w-full flex-col items-center gap-[132px] bg-bg-white md:gap-[99px] sm:gap-[66px]">
        <div className=" w-[100%] md:w-full md:px-5 ">
        
         
          

            <div
              className={`transition-all duration-300 "w-[75%]" : "w-full"}`}
            >
              <div className="flex items-start md:flex-col">
                <div className="mt-3.5 flex flex-1 flex-col gap-16 self-center md:self-stretch sm:gap-8">
                  <div className="ml-10 md:ml-0">
                    <div className="flex flex-col items-start gap-4">
                      <Heading
                        size="text2xl"
                        as="h1"
                        className="ml-[220px] text-[30px] font-medium text-black-900 md:ml-0 md:text-[28px] sm:text-[26px]"
                      >
                        Đăng kí sản phẩm
                      </Heading>
                      <Heading
                        size="textxl"
                        as="h2"
                        className="bg-green-a700_01  pr-[34px] text-[25px] font-medium text-bg-white md:text-[23px] sm:px-5 sm:text-[21px]"
                      >
                        Thông tin chung của sản phẩm
                      </Heading>
                      <div className="flex gap-[30px] self-stretch md:flex-col">
                        <div className="flex flex-1 flex-col gap-[34px] md:self-stretch">
                          <div className=" flex flex-col items-start justify-center gap-1.5 md:mx-0">
                            <Heading
                              as="h3"
                              className="font-jost text-[16px] font-medium text-blue_gray-900"
                            >
                              Tiêu đề
                            </Heading>
                            <InputDH
                              shape="round"
                              name="Title Field"
                              placeholder={`Tiêu đề sản phẩm`}
                              className="w-[88%] rounded-md border px-3.5 font-jost"
                            />
                          </div>
                          <div className=" flex flex-col items-start justify-center gap-1.5 md:mx-0">
                            <Heading
                              as="h4"
                              className="font-jost text-[16px] font-medium text-blue_gray-900"
                            >
                              Tên sản phẩm
                            </Heading>
                            <InputDH
                              shape="round"
                              name="Product Name Field"
                              placeholder={`Tên sản phẩm sản phẩm`}
                              className="w-[88%] rounded-md border px-3.5 font-jost"
                            />
                          </div>
                          <div className="flex flex-col items-start justify-center gap-1 md:mx-0">
                            <Heading
                              as="h5"
                              className="font-jost text-[16px] font-medium text-blue_gray-900"
                            >
                              Tên thương hiệu
                            </Heading>
                            <InputDH
                              shape="round"
                              name="Brand Name Field"
                              placeholder={`Tiêu đề thương hiệu`}
                              className="w-[88%] rounded-md border px-3.5 font-jost"
                            />
                          </div>
                          <div className="flex flex-col items-start justify-center gap-[18px]">
                            <Heading
                              as="h6"
                              className="font-jost text-[16px] font-medium text-blue_gray-900"
                            >
                              Mô tả
                            </Heading>
                            <TextArea
                              shape="round"
                              name="Description Area"
                              placeholder={`Mô tả`}
                              className="w-[88%] rounded-md !border !border-gray-200 px-5 font-jost leading-[10px] text-blue_gray-600"
                            />
                          </div>
                        </div>
                        <div className="flex w-[44%] flex-col items-start md:w-full">
                          <Heading
                            as="p"
                            className="ml-3 font-jost text-[16px] font-medium text-black-900 md:ml-0"
                          >
                            Hình ảnh sản phẩm
                          </Heading>
                          <div className="mr-1.5 mt-2 flex flex-col items-start gap-[26px] self-stretch rounded-[20px] bg-blue-200 px-[52px] py-[30px] md:mr-0 md:px-5 sm:p-5">
                            <Img
                              src="images/img_twitter.svg"
                              alt="Twitter Image"
                              className="ml-[108px] h-[48px] rounded-[5px] md:ml-0"
                            />
                            <Heading
                              size="headingxs"
                              as="h6"
                              className="mb-3.5 text-[16px] font-semibold text-gray-900_01"
                            >
                              Thả tệp vào đây hoặc nhấp để tải lên
                            </Heading>
                          </div>
                          <div className="mt-11 flex flex-col items-start gap-1.5 self-stretch">
                            <Heading
                              as="p"
                              className="ml-3 font-jost text-[16px] font-medium text-black-900 md:ml-0"
                            >
                              Import file
                            </Heading>
                            <div className="flex items-center gap-[21px] self-stretch rounded-[20px] bg-blue-200_01 px-7 py-1.5 sm:px-5">
                              <Img
                                src="images/img_image_147.png"
                                alt="Import Image"
                                className="h-[38px] object-cover"
                              />
                              <Heading
                                as="p"
                                className="font-jost text-[16px] font-medium text-black-900"
                              >
                                Giấy tờ liên quan đến sản phẩm
                              </Heading>
                            </div>
                          </div>
                          <div className="mt-[42px] flex flex-col gap-3 self-stretch ">
                            <div className="flex flex-col items-start justify-center gap-1 w-[50%] bg-white">
                              <Heading
                                as="p"
                                className="font-jost text-[16px] font-medium "
                              >
                                Danh mục
                              </Heading>
                              <SelectBox
                                shape="round"
                                indicator={
                                  <Img
                                    src="images/img_arrowdown.svg"
                                    alt="Arrow Down"
                                    className="h-[18px] w-[18px]"
                                  />
                                }
                                name="Category Dropdown"
                                placeholder={`Danh mục sản phẩm`}
                                options={dropDownOptions}
                                color="white"
                                className="gap-4 self-stretch rounded-md border border-solid border-gray-200 px-3 font-jost "
                              />
                            </div>
                            <div className="flex flex-col items-start justify-center gap-1 w-[50%]">
                              <Heading
                                as="p"
                                className="font-jost text-[16px] font-medium text-blue_gray-900"
                              >
                                Trình trạng
                              </Heading>
                              <SelectBox
                                shape="round"
                                indicator={
                                  <Img
                                    src="images/img_arrowdown.svg"
                                    alt="Arrow Down"
                                    className="h-[18px] w-[18px]"
                                  />
                                }
                                name="Condition Dropdown"
                                placeholder={`Tình trạng sản phẩm`}
                                options={dropDownOptions}
                                color="white"
                                className="gap-4 self-stretch rounded-md border border-solid border-gray-200 px-3 font-jost"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ml-10 md:ml-0">
                    <div className="flex flex-col  gap-12">
                      <Heading
                        size="textxl"
                        as="p"
                        className="bg-green-a700_01 px-[34px] pb-1.5 pt-0.5 text-[25px] font-medium text-bg-white md:text-[23px] sm:px-5 sm:text-[21px]"
                      >
                        Thông tin chi tiết của sản phẩm
                      </Heading>
                      <div className="ml-7 flex items-center self-stretch md:ml-0 md:flex-col">
                        <div className="flex w-full flex-col gap-[26px]">
                          <div className="flex flex-col items-start justify-center gap-1.5">
                            <Heading
                              as="p"
                              className="font-jost text-[16px] font-medium text-blue_gray-900"
                            >
                              Màu sắc
                            </Heading>
                            <InputDH
                              shape="round"
                              name="Color Field"
                              placeholder={`Màu sắc sản phẩm`}
                              className="w-[88%] rounded-md border px-3.5 font-jost"
                            />
                          </div>
                          <div className="flex flex-col items-start justify-center gap-1">
                            <Heading
                              as="p"
                              className="font-jost text-[16px] font-medium text-blue_gray-900"
                            >
                              Khối lượng
                            </Heading>
                            <InputDH
                              shape="round"
                              name="Weight Field"
                              placeholder={`Khối lượng sản phẩm`}
                              className="w-[88%] rounded-md border px-3.5 font-jost"
                            />
                          </div>
                          <div className="flex flex-col items-start justify-center gap-1.5">
                            <Heading
                              as="p"
                              className="font-jost text-[16px] font-medium text-blue_gray-900"
                            >
                              Phần trăm
                            </Heading>
                            <InputDH
                              shape="round"
                              name="Percentage Field"
                              placeholder={`Phần trăm giá trị sản phẩm`}
                              className="w-[88%] rounded-md border px-3.5 font-jost"
                            />
                          </div>
                        </div>
                        <div className="flex w-full flex-col items-end gap-5">
                          <div className="flex w-[86%] flex-col items-start justify-center gap-1 md:w-full">
                            <Heading
                              as="p"
                              className="font-jost text-[16px] font-medium text-blue_gray-900"
                            >
                              Nguồn gốc/Xuất xứ
                            </Heading>
                            <InputDH
                              shape="round"
                              name="Origin Field"
                              placeholder={`Ghi rõ thông tin xuất xứ`}
                              className="self-stretch rounded-md border px-3.5 font-jost"
                            />
                          </div>
                          <div className="flex w-[86%] flex-col items-start justify-center gap-1 md:w-full">
                            <Heading
                              as="p"
                              className="font-jost text-[16px] font-medium text-blue_gray-900"
                            >
                              Giá trị định giá
                            </Heading>
                            <InputDH
                              shape="round"
                              name="Pricing Field"
                              placeholder={`Nhập giá trị sản phẩm`}
                              suffix={
                                <Text className="w-[32px] font-jost text-[15px] font-normal text-colors">
                                  VND
                                </Text>
                              }
                              className="gap-4 self-stretch rounded-md border px-3 font-jost"
                            />
                          </div>
                          <div className="flex w-[88%] flex-col items-start justify-center gap-1 md:w-full">
                            <Heading
                              as="p"
                              className="font-jost text-[16px] font-medium text-blue_gray-900"
                            >
                              Ngày sản xuất
                            </Heading>
                            <SelectBox
                              shape="round"
                              indicator={
                                <Img
                                  src="images/img_arrowdown.svg"
                                  alt="Arrow Down"
                                  className="h-[18px] w-[18px]"
                                />
                              }
                              name="Manufacture Date Dropdown"
                              placeholder={`Ngày sản xuất`}
                              options={dropDownOptions}
                              className="gap-4 self-stretch rounded-md border border-solid border-gray-200 px-3 font-jost"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ml-10 md:ml-0">
                    <div className="flex flex-col items-center gap-[62px] sm:gap-[31px]">
                      <div className="flex flex-col items-center self-stretch">
                        <Heading
                          size="textxl"
                          as="p"
                          className="bg-green-a700_01 px-[34px] pt-2 text-[25px] font-medium text-bg-white md:text-[23px] sm:px-5 sm:text-[21px]"
                        >
                          Chính sách của hệ thống
                        </Heading>
                        <div className="mt-9 flex items-start justify-center gap-5 self-stretch md:flex-col">
                          <Img
                            src="images/img_check_box_outline_blank.svg"
                            alt="Checkbox Image One"
                            className="h-[24px] w-[24px] md:w-full"
                          />
                          <Text
                            as="p"
                            className="w-[96%] self-center text-[14px] font-normal leading-[150%] text-black-900 md:w-full"
                          >
                            Tôi cam kết rằng mọi thông tin cá nhân và dữ liệu
                            liên quan đến sản phẩm của tôi sẽ được bảo mật và
                            không bị tiết lộ cho bên thứ ba mà không có sự đồng
                            ý của tôi.
                          </Text>
                        </div>
                        <div className="mr-4 mt-2 flex items-start justify-center gap-5 self-stretch md:mr-0 md:flex-col">
                          <Img
                            src="images/img_check_box_outline_blank.svg"
                            alt="Checkbox Image Two"
                            className="mb-1.5 h-[24px] w-[24px] md:w-full"
                          />
                          <Text
                            as="p"
                            className="w-[96%] self-end text-[14px] font-normal leading-[150%] text-black-900 md:w-full md:self-auto"
                          >
                            Tôi xác nhận rằng tất cả thông tin, hình ảnh và mô
                            tả sản phẩm mà tôi cung cấp là chính xác, đầy đủ và
                            không gây hiểu nhầm cho người mua. Tôi sẽ chịu trách
                            nhiệm về tính chính xác của thông tin này.
                          </Text>
                        </div>
                        <div className="mr-[18px] mt-6 flex items-start justify-center gap-5 self-stretch md:mr-0 md:flex-col">
                          <Img
                            src="images/img_check_box_outline_blank.svg"
                            alt="Checkbox Image Three"
                            className="h-[24px] w-[24px] md:w-full"
                          />
                          <Text
                            as="p"
                            className="w-[96%] self-center text-[14px] font-normal leading-[150%] text-black-900 md:w-full"
                          >
                            Tôi cam kết tuân thủ tất cả các quy định và điều
                            khoản mà hệ thống đặt ra, bao gồm nhưng không giới
                            hạn ở quy trình đăng bán, thẩm định sản phẩm và quy
                            trình giao dịch.
                          </Text>
                        </div>
                        <div className="mt-3 flex items-center justify-center self-stretch md:flex-col">
                          <ButtonDH
                            shape="round"
                            leftIcon={
                              <Img
                                src="images/img_image_148.png"
                                alt="Image 148"
                                className="h-[18px] w-[18px] object-cover"
                              />
                            }
                            className="min-w-[250px] gap-2 rounded-[16px]"
                          >
                            Thông tin chính sách chi tiết
                          </ButtonDH>
                          <div className="flex flex-1 justify-between gap-5 md:self-stretch">
                            <ButtonDH
                              shape="round"
                              rightIcon={
                                <Img
                                  src="images/img_image_156.png"
                                  alt="Image 156"
                                  className="h-[24px] w-[30px] object-cover"
                                />
                              }
                              className="ml-[98px] min-w-[196px] gap-5 rounded-[16px] font-jost font-medium"
                            >
                              09/09/1999
                            </ButtonDH>
                            <ButtonDH
                              shape="round"
                              className="min-w-[256px] rounded-[16px] font-medium"
                            >
                              Thông tin seller:
                            </ButtonDH>
                          </div>
                        </div>
                      </div>
                      <div className="flex w-[38%] justify-between gap-5 md:w-full">
                        <ButtonDH
                          size="md"
                          className="min-w-[152px] rounded-md"
                        >
                          Gửi thẩm định
                        </ButtonDH>
                        <ButtonDH
                          size="md"
                          className="min-w-[152px] rounded-md"
                        >
                          Hủy bỏ
                        </ButtonDH>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
}
