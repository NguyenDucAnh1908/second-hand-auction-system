import { Helmet } from "react-helmet";
// import { Heading, Button, Switch, Input, Text, Img } from "../../components";
import { Img, Text, Button, Heading, SelectBox, Input } from "../../components";
import Header2 from "../../components/Header2";
import Footer5 from "../../components/Footer5";
import React from "react";

export default function ProfileDetailPage() {
    return (
        <>
            <Helmet>
                <title>User Profile Details - EZShop</title>
                <meta
                    name="description"
                    content="Access your EZShop profile to manage your account information, view your balance of 20,000,000 VND, and update your favorite products. Get assistance and find stores easily."
                />
            </Helmet>
            <div className="flex w-full flex-col items-center bg-bg-white">
            <Header2 />
            <div className="mx-auto w-full max-w-[1328px] md:px-5">
                    <div className="mr-[46px] flex items-start gap-5 md:mr-0 md:flex-col">
                        <div className="mt-12 flex w-[24%] flex-col gap-[46px] md:w-full">
                            <div className="flex flex-col items-center">
                                <div className="mx-5 flex items-center gap-5 self-stretch md:mx-0">
                                    <Img
                                        src="images/img_image_52x56_1.png"
                                        alt="Profile Image"
                                        className="h-[52px] w-[24%] rounded-[26px] object-contain"
                                    />
                                    <Heading as="h1" className="mb-3 self-end text-[16px] font-medium text-blue_gray-900_01">
                                        Phuong Uyennn
                                    </Heading>
                                </div>
                                <Heading
                                    size="headingxl"
                                    as="h2"
                                    className="ml-3 mt-4 self-start text-[20px] font-semibold text-red-a400 md:ml-0"
                                >
                                    Số dư: 20,000,000đ
                                </Heading>
                                <div className="mt-1.5 h-[1.84px] w-full self-stretch bg-gray-200" />
                            </div>
                            <div>
                                <div className="flex flex-col gap-[38px]">
                                    <div className="flex items-center gap-[19px]">
                                        <Img src="images/img_growth_1.svg" alt="Account Icon" className="h-[30px] w-[30px]" />
                                        <Text size="textlg" as="p" className="self-end text-[15px] font-normal text-blue_gray-900_01">
                                            Thông tin tài khoản
                                        </Text>
                                    </div>
                                    <div className="flex items-center gap-[21px]">
                                        <Img src="images/img_checked_box_1.svg" alt="Favorites Icon" className="h-[30px] w-[30px]" />
                                        <Text size="textlg" as="p" className="self-end text-[15px] font-normal text-blue_gray-900_01">
                                            Danh sách yêu thích
                                        </Text>
                                    </div>
                                    <div className="mx-1 flex items-center gap-[17px] md:mx-0">
                                        <Img src="images/img_location_1.svg" alt="Address Icon" className="h-[30px] w-[30px]" />
                                        <Text size="textlg" as="p" className="self-end text-[15px] font-normal text-blue_gray-900_01">
                                            Quản lý địa chỉ
                                        </Text>
                                    </div>
                                    <div className="flex items-start gap-[21px]">
                                        <Img src="images/img_thumbs_up.svg" alt="Orders Icon" className="h-[30px] w-[30px] self-center" />
                                        <Text size="textlg" as="p" className="text-[15px] font-normal text-blue_gray-900_01">
                                            Đơn hàng
                                        </Text>
                                    </div>
                                    <div className="flex items-start gap-[22px]">
                                        <Img src="images/img_lichsu.svg" alt="History Icon" className="h-[30px] w-[30px] self-center" />
                                        <Text size="textlg" as="p" className="text-[15px] font-normal text-blue_gray-900_01">
                                            Lịch sử giao dịch
                                        </Text>
                                    </div>
                                    <div className="flex items-start gap-[22px]">
                                        <Img
                                            src="images/img_television.svg"
                                            alt="Auctioned Icon"
                                            className="h-[30px] w-[30px] self-center"
                                        />
                                        <Text size="textlg" as="p" className="mt-1 text-[15px] font-normal text-blue_gray-900_01">
                                            Sản phẩm đã đấu giá
                                        </Text>
                                    </div>
                                    <div className="flex items-start gap-[22px]">
                                        <Img src="images/img_television.svg" alt="Top Up Icon" className="h-[30px] w-[30px] self-center" />
                                        <Text size="textlg" as="p" className="text-[15px] font-normal text-blue_gray-900_01">
                                            Nạp tiền
                                        </Text>
                                    </div>
                                    <div className="flex items-start gap-[23px]">
                                        <Img
                                            src="images/img_television.svg"
                                            alt="Logout Icon"
                                            className="mt-1 h-[30px] w-[30px] self-end"
                                        />
                                        <Text size="textlg" as="p" className="text-[15px] font-normal text-blue_gray-900_01">
                                            Đăng xuất
                                        </Text>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-1 flex-col items-center gap-[38px] self-center md:self-stretch">
                            <Heading
                                size="heading3xl"
                                as="h3"
                                className="text-[48px] font-semibold uppercase text-blue_gray-900_01 md:text-[44px] sm:text-[38px]"
                            >
                                Thông tin tài khoản
                            </Heading>
                            <div className="self-stretch">
                                <div className="flex flex-col gap-12">
                                    <div className="mr-1 md:mr-0">
                                        <div className="flex flex-col items-start gap-1.5 self-end">
                                            <Heading size="headingmd" as="h4" className="text-[16px] font-semibold text-blue_gray-900_01">
                                                Thông tin tài khoản{" "}
                                            </Heading>
                                            <div className="h-[2px] w-[14%] bg-blue_gray-900_01" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-start gap-6 md:flex-col">
                                            <div className="flex w-full flex-col gap-4 self-center">
                                                <div className="flex flex-col items-start justify-center gap-2">
                                                    <Heading as="h5" className="text-[16px] font-medium text-blue_gray-900_01">
                                                        Tên
                                                    </Heading>
                                                    <Input
                                                        shape="round"
                                                        name="Name Field"
                                                        placeholder={`Nhập tên`}
                                                        className="self-stretch rounded-md border border-gray-200 px-4"
                                                    />
                                                </div>
                                                <div className="flex flex-col items-start justify-center gap-2">
                                                    <Heading as="h6" className="text-[16px] font-medium text-blue_gray-900_01">
                                                        Email
                                                    </Heading>
                                                    <Input
                                                        shape="round"
                                                        type="email"
                                                        name="Email Field"
                                                        placeholder={`Nhập email`}
                                                        className="self-stretch rounded-md border border-gray-200 px-4"
                                                    />
                                                </div>
                                                <div className="flex items-center gap-12">
                                                    <Button
                                                        shape="round"
                                                        className="min-w-[116px] rounded-md border border-solid border-green-a700 px-[33px] sm:px-5"
                                                    >
                                                        Lưu
                                                    </Button>
                                                    <Text as="p" className="text-[14px] font-normal text-blue_gray-600">
                                                        Hủy bỏ
                                                    </Text>
                                                </div>
                                            </div>
                                            <div className="flex w-full flex-col gap-4">
                                                <div className="flex flex-col items-start gap-1.5">
                                                    <Heading as="p" className="mt-1 text-[16px] font-medium text-blue_gray-900_01">
                                                        Họ
                                                    </Heading>
                                                    <Input
                                                        shape="round"
                                                        name="Surname Field"
                                                        placeholder={`Nhập họ`}
                                                        className="self-stretch rounded-md border border-gray-200 px-4"
                                                    />
                                                </div>
                                                <div className="flex flex-col items-start justify-center gap-1.5">
                                                    <Heading as="p" className="text-[16px] font-medium text-blue_gray-900_01">
                                                        Số điện thoại
                                                    </Heading>
                                                    <Input
                                                        shape="round"
                                                        name="Phone Field"
                                                        placeholder={`Nhập số điện thoại`}
                                                        className="self-stretch rounded-md border border-gray-200 px-4"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mr-1 mt-[88px] md:mr-0">
                                    <div className="flex flex-col gap-4">
                                        <div className="flex flex-col gap-4">
                                            <div className="flex flex-col items-start justify-center gap-2">
                                                <Heading as="p" className="text-[16px] font-medium text-blue_gray-900_01">
                                                    Mật khẩu gần đây
                                                </Heading>
                                                <Input
                                                    shape="round"
                                                    type="text"
                                                    name="Current Password Field"
                                                    placeholder={`Your Name`}
                                                    className="w-[50%] rounded-md border border-gray-200 px-4"
                                                />
                                            </div>
                                            <div className="flex flex-col items-start justify-center gap-2">
                                                <Heading as="p" className="text-[16px] font-medium text-blue_gray-900_01">
                                                    Mật khẩu mới
                                                </Heading>
                                                <Input
                                                    shape="round"
                                                    type="text"
                                                    name="New Password Field"
                                                    placeholder={`Your Name`}
                                                    className="w-[50%] rounded-md border border-gray-200 px-4"
                                                />
                                            </div>
                                            <div className="flex flex-col items-start justify-center gap-2">
                                                <Heading as="p" className="text-[16px] font-medium text-blue_gray-900_01">
                                                    Xác nhận mật khẩu mới
                                                </Heading>
                                                <Input
                                                    shape="round"
                                                    type="text"
                                                    name="Confirm Password Field"
                                                    placeholder={`Your Name`}
                                                    className="w-[50%] rounded-md border border-gray-200 px-4"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-[42px]">
                                            <Button
                                                size="2xl"
                                                shape="round"
                                                className="min-w-[112px] rounded-md border border-solid border-green-a700 px-[33px] sm:px-5"
                                            >
                                                Lưu
                                            </Button>
                                            <Heading as="p" className="text-[16px] font-normal text-blue_gray-600">
                                                Hủy bỏ
                                            </Heading>
                                        </div>
                                    </div>
                                </div>
                                <div className="mr-1 mt-12 flex flex-col gap-[18px] md:mr-0">
                                    <div className="flex flex-col items-start gap-5">
                                        <div className="self-stretch">
                                            <div className="flex flex-col items-start">
                                                <Heading as="p" className="text-[16px] font-medium text-blue_gray-900_01">
                                                    Email
                                                </Heading>
                                                <div className="flex items-center justify-between gap-5 self-stretch">
                                                    <Heading as="p" className="self-end text-[16px] font-normal text-blue_gray-900_01">
                                                        Mã xác thực được gửi đến email của bạn
                                                    </Heading>
                                                  
                                                </div>
                                            </div>
                                        </div>
                                        <div className="h-px w-[70%] bg-gray-200" />
                                    </div>
                                    <div>
                                        <div className="flex flex-col items-start">
                                            <Heading as="p" className="relative z-[1] text-[16px] font-medium text-blue_gray-900_01">
                                                Điện thoại
                                            </Heading>
                                            <div className="flex items-center justify-between gap-5 self-stretch sm:flex-col">
                                                <Heading as="p" className="self-end text-[16px] font-normal text-blue_gray-900_01 sm:self-auto">
                                                    Nhân viên EZShop sẽ gọi điện thoại tới di động của bạn{" "}
                                                </Heading>
                                                {/* <Switch value={false} className="mr-[274px] sm:mr-0" /> */}
                                            </div>
                                            <div className="mt-5 h-px w-[70%] bg-gray-200" />
                                        </div>
                                    </div>
                                    <div className="mb-[104px] flex items-center gap-14">
                                        <Button
                                            size="2xl"
                                            shape="round"
                                            className="min-w-[112px] rounded-md border border-solid border-green-a700 px-[33px] sm:px-5"
                                        >
                                            Lưu
                                        </Button>
                                        <Heading as="p" className="text-[16px] font-normal text-blue_gray-600">
                                            Hủy bỏ
                                        </Heading>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-[194px] self-stretch">
                    <Footer5 className="mt-[34px] h-[388px] bg-[url(/images/img_group_19979.png)] bg-cover bg-no-repeat md:h-auto" />
                </div>
            </div>
        </>
    );
}








