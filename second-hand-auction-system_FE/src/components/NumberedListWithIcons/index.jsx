import { Text, Img } from "./..";
import React from "react";

export default function NumberedListWithIcons({
  numberOneText = "1",
  numberTwoText = "2",
  numberThreeText = "3",
  numberFourText = "4",
  numberFiveText = "5",
  ellipsisText = "...",
  numberTwentyText = "20",
  summaryText = "Tìm thấy 1 – 20 trong số hơn 300 cơ sở kinh doanh",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-center w-[48%] md:w-full mt-6 gap-[22px]`}>
      <div className="self-stretch">
        <div className="flex flex-col items-center">
          <div className="flex w-[50%] flex-wrap items-center justify-center sm:w-full">
            <Text className="font-jost text-[14px] font-medium text-gray-900">{numberOneText}</Text>
            <Text className="ml-[26px] flex h-[40px] w-[40px] items-center justify-center rounded-[20px] border border-solid border-green-a700 bg-green-a700 text-center font-jost text-[14px] font-medium text-gray-100_01 sm:w-[40px]">
              {numberTwoText}
            </Text>
            <Text className="ml-[26px] font-jost text-[14px] font-medium text-gray-900">{numberThreeText}</Text>
            <Text className="ml-6 flex h-[40px] w-[40px] items-center justify-center rounded-[20px] border border-solid border-gray-100_01 bg-gray-100_01 text-center font-jost text-[14px] font-medium text-gray-900 sm:w-[40px]">
              {numberFourText}
            </Text>
            <Text className="ml-[26px] font-jost text-[14px] font-medium text-gray-900">{numberFiveText}</Text>
            <Text className="mb-1 ml-[38px] self-end font-jost text-[14px] font-medium text-gray-900">
              {ellipsisText}
            </Text>
            <Text className="ml-[34px] font-jost text-[14px] font-medium text-gray-900">{numberTwentyText}</Text>
          </div>
          <div className="relative mt-[-40px] flex justify-between gap-5 self-stretch">
            <Img src="images/img_clock.svg" alt="Clock Image" className="h-[50px] w-[50px]" />
            <Img src="images/img_arrow_right.svg" alt="Arrowright Image" className="h-[50px] w-[50px]" />
          </div>
        </div>
      </div>
      <Text className="text-[14px] font-normal text-blue_gray-600_01">{summaryText}</Text>
    </div>
  );
}



