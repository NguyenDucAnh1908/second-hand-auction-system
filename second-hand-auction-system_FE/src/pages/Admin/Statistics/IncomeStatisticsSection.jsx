import { Img, Text, Heading, InputDH, SelectBox } from "../../../components";
import React from "react";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function IncomeStatisticsSection() {
  return (
    <>
      {/* income statistics section */}
      <div className="flex items-center gap-2.5 md:flex-col">
        <div className="flex flex-1 flex-col gap-[22px] rounded-[16px] bg-bg-white py-[38px] shadow-xs md:self-stretch sm:py-5">
          <div className="ml-[18px] flex items-start md:ml-0 sm:flex-col">
            <Heading
              size="textxl"
              as="h1"
              className="mt-2 w-[38%] self-end text-[18px] font-medium uppercase leading-[22px] text-blue_gray-900 sm:w-full sm:self-auto"
            >
              Thống kê thu nhập
            </Heading>
            <div className="flex flex-1 justify-end sm:self-stretch">
              <InputDH
                shape="round"
                name="Export Report Edit"
                placeholder={`Báo cáo xuất khẩu`}
                className="relative z-[3] w-[46%] rounded-lg px-3.5"
              />
              <SelectBox
                shape="round"
                color="undefined_undefined"
                indicator={
                  <Img
                    src="images/img_checkmark_blue_gray_900.svg"
                    alt="Checkmark"
                    className="h-[14px] w-[14px]"
                  />
                }
                name="Timeframe Dropdown"
                placeholder={`Tuần này`}
                options={dropDownOptions}
                className="w-[32%] gap-5 rounded-lg !border px-4"
              />
            </div>
          </div>
          <div className="mb-[18px] ml-[18px] md:ml-0">
            <div className="flex flex-col">
              <Text
                size="textxs"
                as="p"
                className="w-[4%] text-[13px] font-normal leading-4 text-blue_gray-700 md:w-full"
              >
                300
              </Text>
              <Text
                size="textxs"
                as="p"
                className="mt-[38px] w-[4%] text-[13px] font-normal leading-4 text-blue_gray-700 md:w-full"
              >
                250
              </Text>
              <div className="relative h-[310px] md:h-auto">
                <div className="flex-1">
                  <div className="flex items-start sm:flex-col">
                    <Text
                      size="textxs"
                      as="p"
                      className="mt-[38px] w-[4%] text-[13px] font-normal leading-4 text-blue_gray-700 sm:w-full"
                    >
                      200
                    </Text>
                    <div className="relative ml-[-6px] flex h-[268px] flex-1 items-end justify-center self-center bg-[url(/public/images/img_group_46418.png)] bg-cover bg-no-repeat md:h-auto sm:ml-0 sm:self-stretch">
                      <div className="mt-5 flex w-[82%] flex-col items-start md:w-full md:px-5">
                        <div className="relative z-[4] flex flex-col items-start gap-3.5 self-stretch">
                          <div className="flex items-center self-stretch">
                            <div className="flex w-[24%] flex-col items-start justify-center gap-2 rounded-md bg-bg-white py-2 shadow-md">
                              <Heading
                                size="headingxs"
                                as="h2"
                                className="mr-8 self-end font-lato text-[12px] font-bold tracking-[0.10px] text-blue_gray-600 md:mr-0"
                              >
                                Tháng 4
                              </Heading>
                              <div className="h-px w-full self-stretch rounded-[1px] bg-gray-200_01" />
                              <Heading
                                size="headingxs"
                                as="h3"
                                className="ml-2 text-[12px] font-bold tracking-[0.10px] text-blue_gray-900 md:ml-0"
                              >
                                Lượt bán : 59K
                              </Heading>
                            </div>
                            <div className="mb-3.5 h-[6px] w-[6px] self-end rounded-[3px] bg-teal-800_01" />
                          </div>
                          <div className="ml-[70px] h-[16px] w-[16px] rounded-lg border-[1.5px] border-solid border-deep_purple-800 bg-bg-white shadow-sm md:ml-0" />
                        </div>
                        <div className="relative ml-[78px] mt-[-96px] h-[238px] w-px bg-deep_purple-800 md:ml-0" />
                      </div>
                    </div>
                  </div>
                  <div className="relative mt-[-66px] flex flex-col items-start gap-9">
                    <Text
                      size="textxs"
                      as="p"
                      className="text-[13px] font-normal text-blue_gray-700"
                    >
                      50
                    </Text>
                    <Text
                      size="textxs"
                      as="p"
                      className="text-[13px] font-normal text-blue_gray-700"
                    >
                      0
                    </Text>
                  </div>
                </div>
                <Text
                  size="textxs"
                  as="p"
                  className="absolute left-0 top-[30%] m-auto w-[4%] text-[13px] font-normal leading-4 text-blue_gray-700"
                >
                  150
                </Text>
                <Text
                  size="textxs"
                  as="p"
                  className="absolute bottom-0 left-0 top-0 my-auto h-max w-[4%] text-[13px] font-normal leading-4 text-blue_gray-700"
                >
                  100
                </Text>
                <div className="absolute bottom-[-0.68px] left-0 right-0 m-auto flex flex-1 items-start md:relative md:flex-col">
                  <div className="flex w-full items-start px-4">
                    <div className="flex w-[6%] rotate-[-180deg] flex-col items-start gap-1">
                      <div className="h-[6px] w-px bg-blue_gray-100" />
                      <Text
                        size="textxs"
                        as="p"
                        className="text-[13px] font-normal text-blue_gray-700"
                      >
                        T1
                      </Text>
                    </div>
                    <div className="flex w-[14%] rotate-[-180deg] flex-col items-end gap-1 px-3.5">
                      <div className="h-[6px] w-px bg-blue_gray-100" />
                      <Text
                        size="textxs"
                        as="p"
                        className="text-[13px] font-normal text-blue_gray-700"
                      >
                        T2
                      </Text>
                    </div>
                    <div className="flex w-[12%] rotate-[-180deg] flex-col items-end justify-center self-center px-2.5">
                      <div className="h-[6px] w-px bg-blue_gray-100" />
                      <Text
                        size="textxs"
                        as="p"
                        className="w-[42%] text-center text-[13px] font-normal leading-4 text-blue_gray-700 md:w-full"
                      >
                        T3
                      </Text>
                    </div>
                    <div className="flex w-[10%] rotate-[-180deg] flex-col items-end gap-1">
                      <div className="h-[6px] w-px bg-blue_gray-100" />
                      <Text
                        size="textxs"
                        as="p"
                        className="text-[13px] font-normal text-blue_gray-700"
                      >
                        T4
                      </Text>
                    </div>
                    <div className="flex w-[6%] rotate-[-180deg] flex-col items-end gap-1 px-1">
                      <div className="h-[6px] w-px bg-blue_gray-100" />
                      <Text
                        size="textxs"
                        as="p"
                        className="text-[13px] font-normal text-blue_gray-700"
                      >
                        T7
                      </Text>
                    </div>
                    <div className="flex flex-1 rotate-[-180deg] flex-col items-start gap-1 px-2">
                      <div className="h-[6px] w-px bg-blue_gray-100" />
                      <Text
                        size="textxs"
                        as="p"
                        className="text-[13px] font-normal text-blue_gray-700"
                      >
                        T5
                      </Text>
                    </div>
                  </div>
                  <div className="flex w-full gap-1">
                    <div className="flex flex-1 rotate-[-180deg] flex-col items-end gap-1">
                      <div className="h-[6px] w-px bg-blue_gray-100" />
                      <Text
                        size="textxs"
                        as="p"
                        className="text-[13px] font-normal text-blue_gray-700"
                      >
                        T8
                      </Text>
                    </div>
                    <div className="flex w-[5%] rotate-[-180deg] flex-col items-end gap-1">
                      <div className="h-[6px] w-px bg-blue_gray-100" />
                      <Text
                        size="textxs"
                        as="p"
                        className="text-[13px] font-normal text-blue_gray-700"
                      >
                        T6
                      </Text>
                    </div>
                    <div className="flex w-[10%] rotate-[-180deg] flex-col items-start gap-1 px-1">
                      <div className="h-[6px] w-px bg-blue_gray-100" />
                      <Text
                        size="textxs"
                        as="p"
                        className="text-[13px] font-normal text-blue_gray-700"
                      >
                        T9
                      </Text>
                    </div>
                    <div className="flex w-[12%] rotate-[-180deg] flex-col items-end gap-1 px-3">
                      <div className="h-[6px] w-px bg-blue_gray-100" />
                      <Text
                        size="textxs"
                        as="p"
                        className="text-[13px] font-normal text-blue_gray-700"
                      >
                        T10
                      </Text>
                    </div>
                    <div className="flex w-[12%] rotate-[-180deg] flex-col items-end gap-1 px-3">
                      <div className="h-[6px] w-px bg-blue_gray-100" />
                      <Text
                        size="textxs"
                        as="p"
                        className="text-[13px] font-normal text-blue_gray-700"
                      >
                        T11
                      </Text>
                    </div>
                    <div className="flex w-[8%] rotate-[-180deg] flex-col items-end gap-1">
                      <div className="h-[6px] w-px bg-blue_gray-100" />
                      <Text
                        size="textxs"
                        as="p"
                        className="text-[13px] font-normal text-blue_gray-700"
                      >
                        T12
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[38%] rounded-[16px] bg-bg-white py-10 shadow-xs md:w-full sm:py-5">
          <div className="mb-[174px] flex flex-col gap-[70px] md:gap-[52px] sm:gap-[35px]">
            <div className="flex items-start justify-between gap-5">
              <Heading
                size="textxl"
                as="h4"
                className="ml-6 text-[18px] font-medium uppercase text-blue_gray-900"
              >
                THU NHẬP
              </Heading>
              <SelectBox
                shape="round"
                color="undefined_undefined"
                indicator={
                  <Img
                    src="images/img_checkmark_blue_gray_900.svg"
                    alt="Checkmark"
                    className="h-[14px] w-[14px]"
                  />
                }
                name="Week Dropdown"
                placeholder={`Tuần này`}
                options={dropDownOptions}
                className="w-[36%] gap-5 self-center rounded-lg !border px-4"
              />
            </div>
            <div className="flex items-start justify-between gap-5">
              <div className="mt-6 flex w-[26%] flex-col gap-[26px]">
                <div className="flex flex-col items-start">
                  <div className="flex items-start gap-2.5 self-stretch">
                    <div className="h-[8px] w-[12px] rounded-md bg-green-50" />
                    <Text
                      as="p"
                      className="self-center text-[15px] font-medium text-blue_gray-900"
                    >
                      Thu nhập
                    </Text>
                  </div>
                  <Text
                    size="texts"
                    as="p"
                    className="ml-[22px] text-[14px] font-normal text-blue_gray-600_b2 md:ml-0"
                  >
                    80%
                  </Text>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="h-[8px] w-[12px] rounded-md bg-green-a700" />
                  <div className="flex flex-1 flex-col items-start self-center">
                    <Text
                      as="p"
                      className="text-[15px] font-medium text-blue_gray-900"
                    >
                      Phí
                    </Text>
                    <Text
                      size="texts"
                      as="p"
                      className="text-[14px] font-normal text-blue_gray-600_b2"
                    >
                      20%
                    </Text>
                  </div>
                </div>
              </div>
              <div className="mr-12 flex h-[206px] w-[62%] items-end justify-center self-center bg-[url(/public/images/img_group_46162.svg)] bg-cover bg-no-repeat px-[30px] py-[50px] md:h-auto md:py-5 sm:p-5">
                <Heading
                  size="text2xl"
                  as="h5"
                  className="mt-8 flex-1 text-center text-[28px] font-medium leading-[35px] text-blue_gray-900 md:text-[26px] sm:text-[24px]"
                >
                  <span>56TR330</span>
                  <a href="#" className="inline underline">
                    đ
                  </a>
                </Heading>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
