import { Img, Text, Heading } from "./..";
import React from "react";

export default function Footer13({ ...props }) {
  return (
    <footer {...props} className={`${props.className} flex self-stretch justify-center items-end mt-[154px]`}>
      <div className="mx-auto mt-[84px] flex w-full max-w-[1292px] justify-center px-1 md:px-5">
        <div className="flex w-full flex-col items-start gap-[18px]">
          <div className="flex items-start justify-between gap-5 self-stretch md:flex-col">
            <div className="flex w-[66%] items-center justify-center gap-7 self-center md:w-full md:flex-col">
              <div className="flex w-[36%] flex-col gap-3 md:w-full">
                <Heading
                  size="text2xl"
                  as="p"
                  className="w-[58%] text-[18px] font-medium uppercase leading-[22px] text-blue_gray-900_01 md:w-full"
                >
                  Liên hệ chúng tôi
                </Heading>
                <div className="flex flex-col gap-[22px]">
                  <div className="flex flex-col items-start gap-1.5">
                    <div className="flex items-start gap-6 self-stretch">
                      <Img src="images/img_phone_call_1.svg" alt="Phone Icon" className="mt-1 h-[36px]" />
                      <Text
                        size="textlg"
                        as="p"
                        className="w-[88%] self-center text-[15px] font-medium leading-[22px] text-blue_gray-900_01"
                      >
                        Thứ Hai - Thứ Sáu: 08h00 - 21h00
                      </Text>
                    </div>
                    <Text
                      size="textlg"
                      as="p"
                      className="ml-[58px] text-[15px] font-normal text-blue_gray-900_01 md:ml-0"
                    >
                      +(1) 123 456 7890
                    </Text>
                  </div>
                  <div className="flex flex-col items-start gap-5">
                    <div className="flex items-start gap-[22px]">
                      <Img src="images/img_email_1.svg" alt="Email Icon" className="h-[36px] self-center" />
                      <Text size="textlg" as="p" className="text-[15px] font-medium text-blue_gray-900_01">
                        Bạn cần giúp đỡ?
                      </Text>
                    </div>
                    <Text size="textlg" as="p" className="self-end text-[15px] font-normal text-blue_gray-900_01">
                      support@ezshop.com
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex w-[64%] items-center justify-between gap-5 md:w-full sm:flex-col">
                <div className="mb-1 flex w-[62%] flex-col items-start gap-[22px] sm:w-full">
                  <Heading size="text2xl" as="p" className="text-[18px] font-medium uppercase text-blue_gray-900_01">
                    Về EZShop
                  </Heading>
                  <ul className="flex flex-col items-start gap-[50px]">
                    <li>
                      <a href="#">
                        <Text as="p" className="text-[14px] font-normal text-blue_gray-900_01">
                          Theo dõi đơn hàng của bạn
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p" className="text-[14px] font-normal text-blue_gray-900_01">
                          Hướng dẫn sản phẩm
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p" className="text-[14px] font-normal text-blue_gray-900_01">
                          Danh sách yêu thích
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p" className="text-[14px] font-normal text-blue_gray-900_01">
                          Chính sách bảo mật
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p" className="text-[14px] font-normal text-blue_gray-900_01">
                          Định vị cửa hàng
                        </Text>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex w-[36%] flex-col items-center gap-[22px] self-end sm:w-full sm:self-auto">
                  <Heading
                    size="text2xl"
                    as="p"
                    className="text-[18px] font-medium uppercase leading-[22px] text-blue_gray-900_01"
                  >
                    Hỗ trợ khách hàng
                  </Heading>
                  <ul className="flex flex-col items-start gap-[50px]">
                    <li>
                      <a href="#">
                        <Text as="p" className="text-[14px] font-normal text-blue_gray-900_01">
                          Liên hệ chúng tôi
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p" className="text-[14px] font-normal text-blue_gray-900_01">
                          Trung tâm trợ giúp
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p" className="text-[14px] font-normal text-blue_gray-900_01">
                          Trả lại & Trao đổi
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p" className="text-[14px] font-normal text-blue_gray-900_01">
                          Tài trợ mua tốt nhất
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p" className="text-[14px] font-normal text-blue_gray-900_01">
                          Thẻ quà tặng mua tốt nhất
                        </Text>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex w-[22%] flex-col items-start md:w-full">
              <Img src="images/img_footer_logo.png" alt="Footer Logo" className="h-[22px] w-[88px] object-contain" />
              <div className="mt-6 flex gap-[18px]">
                <Img src="images/img_facebook.svg" alt="Facebook Icon1" className="h-[16px]" />
                <Img src="images/img_facebook.svg" alt="Facebook Icon2" className="h-[16px]" />
                <Img src="images/img_facebook.svg" alt="Facebook Icon3" className="h-[16px]" />
                <Img src="images/img_facebook.svg" alt="Facebook Icon4" className="h-[16px]" />
              </div>
              <Heading size="text2xl" as="p" className="mt-11 text-[18px] font-medium uppercase text-blue_gray-900_01">
                Phương thức thanh toán
              </Heading>
              <Img
                src="images/img_ph_ng_th_c_thanh.png"
                alt="Payment Icons"
                className="mt-9 h-[28px] w-full object-cover md:h-auto"
              />
            </div>
          </div>
          <div className="ml-2 h-px w-[90%] bg-gray-200 md:ml-0" />
          <div className="ml-2 flex w-[90%] items-start justify-between gap-5 md:ml-0 md:w-full md:flex-col">
            <Text
              as="p"
              className="w-[18%] self-center text-[14px] font-normal leading-10 text-blue_gray-900_01 md:w-full"
            >
              © 2024 EZShop. All Rights Reserved
            </Text>
            <div className="mt-2.5 flex w-[72%] justify-between gap-5 md:w-full md:flex-col">
              <Text as="p" className="self-end text-[14px] font-normal text-blue_gray-900_01 md:self-auto">
                Quyền riêng tư · Điều khoản · Sơ đồ trang web
              </Text>
              <div className="flex w-[36%] items-center justify-center md:w-full">
                <div className="flex-1">
                  <a href="#">
                    <div className="flex flex-wrap justify-center gap-4">
                      <Text as="p" className="text-[14px] font-normal text-blue_gray-900_01">
                        Tiền tệ:
                      </Text>
                      <Text as="p" className="text-[14px] font-normal text-blue_gray-900_01">
                        VNĐ
                      </Text>
                    </div>
                  </a>
                </div>
                <Img src="images/img_vector_color_text_dark.svg" alt="Language Icon" className="h-[5px]" />
                <Text as="p" className="ml-8 text-[14px] font-normal text-blue_gray-900_01">
                  Ngôn ngữ:
                </Text>
                <Text as="p" className="text-[14px] font-normal text-blue_gray-900_01">
                  Tiếng Việt
                </Text>
                <Img src="images/img_vector_color_text_dark.svg" alt="Language Icon2" className="h-[5px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}






