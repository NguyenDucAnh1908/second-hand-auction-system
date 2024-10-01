import { ButtonDH, TextArea, Heading, Img } from "../../../components";
import React from "react";

export default function StaffAssessmentSection() {
  return (
    <>
      {/* staff assessment section */}
      <div className="mt-[76px] flex justify-center w-full">
        <div className="container-xs flex justify-center md:px-5 w-full">
          <div className="flex w-full max-w-4xl flex-col items-center">
            {/* Kết quả thẩm định */}
            <Heading
              size="textxl"
              as="h2"
              className="bg-green-a700_01 px-[34px] pb-1 text-[25px] font-medium text-white-a700 md:text-[23px] sm:px-5 sm:text-[21px] rounded-md text-center w-full"
            >
              Kết quả thẩm định
            </Heading>

            {/* Thông tin người thẩm định và ngày */}
            <div className="mt-3 flex flex-wrap justify-between gap-5 w-full">
              <Heading
                as="h3"
                className="rounded-[12px] bg-blue-200 pl-3 pr-[34px] text-[20px] font-medium text-black-900 sm:pr-5 flex-grow"
              >
                Người thẩm định: Đào Xuân Bình
              </Heading>
              <Heading
                as="h4"
                className="rounded-[12px] bg-blue-200 pl-6 pr-[34px] text-[20px] font-medium text-black-900 sm:px-5 flex-grow text-right"
              >
                Ngày thẩm định: 10-01-2024
              </Heading>
            </div>

            {/* Giấy thẩm định */}
            <div className="mt-5 flex flex-col items-start w-full">
              <div className="flex w-[16%] rounded-[10px] bg-blue-200 px-[18px] md:w-[30%] lg:w-[20%] justify-center">
                <Img
                  src="/images/img_upload.png"
                  alt="Assessment Image"
                  className="h-[20px] w-[20px] object-cover rounded-full"
                />
              </div>
              <Heading
                size="textxs"
                as="h5"
                className="relative ml-11 mt-[-14px] text-[15px] font-medium text-black-900 md:ml-0"
              >
                Giấy thẩm định
              </Heading>
            </div>

            {/* Ghi chú */}
            <div className="mt-[18px] w-full">
              <div className="flex flex-col items-center w-full">
                <Heading
                  size="texts"
                  as="h6"
                  className="self-start font-jost text-[16px] font-medium text-blue_gray-900"
                >
                  Ghi chú
                </Heading>
                <TextArea
                  shape="round"
                  name="Reason TextArea"
                  placeholder={`Lý do`}
                  className="mt-1 w-full rounded-md !border !border-gray-200 px-[18px] font-jost text-blue_gray-600 sm:pt-5"
                />

                {/* Buttons */}
                <div className="mt-[66px] flex w-full justify-between gap-5 max-w-lg">
                  <ButtonDH
                    shape="round"
                    className="w-full max-w-[200px] rounded-md px-[34px] bg-green-500 text-white hover:bg-green-600"
                  >
                    Phê duyệt
                  </ButtonDH>
                  <ButtonDH
                    shape="round"
                    className="w-full max-w-[200px] rounded-md px-[34px] bg-red-500 text-white hover:bg-red-600"
                  >
                    Từ chối
                  </ButtonDH>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
