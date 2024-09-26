import { CloseSVG } from "../Input/close.jsx";
import { Img, Button, Input } from "./..";
import React from "react";

export default function HeaderAdmin({ ...props }) {
  const [searchBarValue, setSearchBarValue] = React.useState("");

  return (
    <header {...props} className={`${props.className} flex items-center ml-3 md:ml-0`}>
      <div className="flex w-full justify-between gap-5 md:flex-col">
        <div className="flex w-[40%] items-center justify-center md:w-full sm:flex-col">
          {/* <Img src="images/img_megaphone_gray_900.svg" alt="Megaphone Icon" className="h-[18px] sm:w-full" /> */}
          <Img
            src="images/img_auction.png"
            alt="Logo Image"
            className="mb-1 ml-5 h-[75px] w-[146px] self-end object-contain sm:ml-0 sm:self-auto"
          />
          <Input
            name="Search Field"
            placeholder={`Tìm kiếm`}
            value={searchBarValue}
            onChange={(e) => setSearchBarValue(e.target.value)}
            suffix={
              searchBarValue?.length > 0 ? (
                <CloseSVG onClick={() => setSearchBarValue("")} height={16} width={14} fillColor="#041e42ff" />
              ) : (
                <Img src="images/img_search.svg" alt="Search 1" className="h-[16px] w-[14px]" />
              )
            }
            className="ml-[52px] h-[50px] flex-grow gap-4 rounded-md border border-solid border-gray-200_01 bg-bg-white pl-3.5 pr-2 text-[14px] text-blue_gray-600 sm:ml-0"
          />
        </div>
        <div className="flex w-[12%] justify-center gap-5 md:w-full">
          <div className="flex flex-1 items-center justify-center">

           

            <Img src="images/icon_email.svg" alt="Mail Icon" className="ml-[18px] h-[20px]" />
            <Img src="images/img_notification.svg" alt="Notification Icon" className="ml-7 h-[20px]" />
          </div>

          <Img src="images/img_image_profile_admin_or_seller.png" alt="Profile Image" className="h-[50px] rounded-[16px] object-cover" />

        </div>
      </div>
    </header>
  );
}


