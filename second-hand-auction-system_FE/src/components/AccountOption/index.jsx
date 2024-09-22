import React from 'react';

const AccountOptions = () => {
    const options = [
        {
            imgSrc: "images/img_growth_1.svg",
            alt: "Account Info Image",
            text: "Thông tin tài khoản"
        },
        {
            imgSrc: "images/img_checked_box_1.svg",
            alt: "Favorites Image",
            text: "Danh sách yêu thích"
        },
        {
            imgSrc: "images/img_location_1.svg",
            alt: "Address Image",
            text: "Quản lý địa chỉ"
        },
        {
            imgSrc: "images/img_thumbs_up.svg",
            alt: "Thumbs Up Image",
            text: "Đơn hàng"
        },
        {
            imgSrc: "images/img_lichsu.svg",
            alt: "History Image",
            text: "Lịch sử giao dịch"
        },
        {
            imgSrc: "images/img_auction.svg",
            alt: "Auction Image",
            text: "Sản phẩm đã đấu giá"
        },
        {
            imgSrc: "images/img_deposit.svg",
            alt: "Deposit Image",
            text: "Nạp tiền"
        },
        {
            imgSrc: "images/img_logout.svg",
            alt: "Logout Image",
            text: "Đăng xuất"
        }
    ];

    
    return (
        <div className="flex w-full flex-col gap-[22px]"> 
            {options.map((option, index) => (
                <div key={index} className="flex items-center gap-[10px]"> 
                    <img src={option.imgSrc} alt={option.alt} className="h-[20px] w-[20px]" />
                    <p className="text-[15px] font-normal text-blue_gray-900_01">{option.text}</p>
                </div>
            ))}
        </div>
    );
};

export default AccountOptions;
