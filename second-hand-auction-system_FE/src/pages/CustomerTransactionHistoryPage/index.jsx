import { Helmet } from "react-helmet";
import { Img, Text, Button, Heading, SelectBox, Input } from "../../components";
import { CloseSVG } from "../../components/Input/close.jsx";
import NumberRow from "../../components/NumberRow";
import React from "react";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";
import Header2 from "../../components/Header2";
import Footer5 from "../../components/Footer5";

const dropDownOptions = [
    { label: "Option1", value: "option1" },
    { label: "Option2", value: "option2" },
    { label: "Option3", value: "option3" },
];

export default function CustomerTransactionHistoryPagePage() {
    const [searchBarValue8, setSearchBarValue8] = React.useState("");

    return (
        <>
            <Helmet>
                <title>Customer Transaction History - EZShop</title>
                <meta
                    name="description"
                    content="Review your EZShop transaction history, including money transfers, withdrawals, and deposits. Stay on top of your finances with a complete record of your activities."
                />
            </Helmet>
            <div className="flex w-full flex-col items-center gap-10 bg-bg-white">
                <Header2 />
                <div className="container-sm md:px-5">
                    <div className="mr-7 md:mr-0">
                        <Tabs
                            className="flex flex-col gap-[34px]"
                            selectedTabClassName="!text-gray-900"
                            selectedTabPanelClassName="!relative tab-panel--selected"
                        >
                            <div className="flex items-center md:flex-col">
                                <div className="flex w-[22%] flex-col gap-1.5 md:w-full">
                                    <div className="mx-3 flex md:mx-0">
                                        <div className="flex w-[74%] flex-col items-center gap-4 md:w-full">
                                            <div className="flex items-center justify-center gap-[18px] self-stretch">
                                                <Img
                                                    src="images/img_image_52x56_1.png"
                                                    alt="Profile Image"
                                                    className="h-[52px] w-[30%] rounded-[26px] object-contain"
                                                />
                                                <Heading as="h1" className="mb-3 self-end text-[16px] font-medium text-blue_gray-900_01">
                                                    Phuong Uyennn
                                                </Heading>
                                            </div>
                                            <Heading size="headingxl" as="h2" className="text-[20px] font-semibold text-red-500">
                                                Số dư: 20,000,000đ
                                            </Heading>
                                        </div>
                                    </div>
                                    <div className="h-[1.84px] bg-gray-200" />
                                </div>
                                <div className="flex flex-1 flex-col items-start gap-6 md:self-stretch">
                                    <Heading
                                        size="heading2xl"
                                        as="h3"
                                        className="text-[30px] font-semibold uppercase text-blue_gray-900_01 md:text-[28px] sm:text-[26px]"
                                    >
                                        Chuyển tiền
                                    </Heading>
                                    <TabList className="flex flex-wrap gap-16 self-stretch px-3 md:gap-5">
                                        <Tab className="bg-yellow-300 text-[16px] font-medium text-blue_gray-900_01">
                                            Lịch sử giao dịch
                                        </Tab>
                                        <Tab className="text-[16px] font-medium text-blue_gray-900_01">Rút tiền</Tab>
                                        <Tab className="text-[16px] font-medium text-blue_gray-900_01">Nạp tiền</Tab>
                                    </TabList>
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-col gap-[68px] sm:gap-[34px]">
                                    <div className="flex items-center md:flex-col">
                                        <div className="flex w-[18%] flex-col gap-[38px] md:w-full">
                                            <div className="flex items-center gap-[19px]">
                                                <Img src="images/img_growth_1.svg" alt="Account Info Image" className="h-[30px] w-[30px]" />
                                                <Text as="p" className="self-end text-[15px] font-normal text-blue_gray-900_01">
                                                    Thông tin tài khoản
                                                </Text>
                                            </div>
                                            <div className="flex items-center gap-[21px]">
                                                <Img src="images/img_checked_box_1.svg" alt="Favorites Image" className="h-[30px] w-[30px]" />
                                                <Text as="p" className="self-end text-[15px] font-normal text-blue_gray-900_01">
                                                    Danh sách yêu thích
                                                </Text>
                                            </div>
                                            <div className="mx-1 flex items-center gap-[17px] md:mx-0">
                                                <Img src="images/img_location_1.svg" alt="Address Image" className="h-[30px] w-[30px]" />
                                                <Text as="p" className="self-end text-[15px] font-normal text-blue_gray-900_01">
                                                    Quản lý địa chỉ
                                                </Text>
                                            </div>
                                            <div className="flex items-start gap-[21px]">
                                                <Img
                                                    src="images/img_thumbs_up.svg"
                                                    alt="Thumbs Up Image"
                                                    className="h-[30px] w-[30px] self-center"
                                                />
                                                <Text as="p" className="text-[15px] font-normal text-blue_gray-900_01">
                                                    Đơn hàng
                                                </Text>
                                            </div>
                                            <div className="flex items-start gap-[22px]">
                                                <Img
                                                    src="images/img_lichsu.svg"
                                                    alt="History Image"
                                                    className="h-[30px] w-[30px] self-center"
                                                />
                                                <Text as="p" className="text-[15px] font-normal text-blue_gray-900_01">
                                                    Lịch sử giao dịch
                                                </Text>
                                            </div>
                                            <div className="flex items-start gap-[22px]">
                                                <Img
                                                    src="images/img_lichsu.svg"
                                                    alt="Auction Image"
                                                    className="h-[30px] w-[30px] self-center"
                                                />
                                                <Text as="p" className="mt-1 text-[15px] font-normal text-blue_gray-900_01">
                                                    Sản phẩm đã đấu giá
                                                </Text>
                                            </div>
                                            <div className="flex items-start gap-[22px]">
                                                <Img
                                                    src="images/img_lichsu.svg"
                                                    alt="Deposit Image"
                                                    className="h-[30px] w-[30px] self-center"
                                                />
                                                <Text as="p" className="text-[15px] font-normal text-blue_gray-900_01">
                                                    Nạp tiền
                                                </Text>
                                            </div>
                                            <div className="flex items-start gap-[23px]">
                                                <Img
                                                    src="images/img_lichsu.svg"
                                                    alt="Logout Image"
                                                    className="mt-1 h-[30px] w-[30px] self-end"
                                                />
                                                <Text as="p" className="text-[15px] font-normal text-blue_gray-900_01">
                                                    Đăng xuất
                                                </Text>
                                            </div>
                                        </div>
                                        {[...Array(3)].map((_, index) => (
                                            <TabPanel key={`tab-panel${index}`} className="absolute flex-1 md:self-stretch">
                                                <div className="w-full flex-1 md:self-stretch">
                                                    <div>
                                                        <div className="ml-[42px] flex flex-col gap-3 md:ml-0">
                                                            <div className="flex items-start rounded-md bg-gray-100_01 p-3.5 md:flex-col">
                                                                <div className="flex w-[44%] justify-center md:w-full">
                                                                    <div className="flex">
                                                                        <Heading as="h4" className="text-[16px] font-medium text-blue_gray-900_01">
                                                                            ID
                                                                        </Heading>
                                                                    </div>
                                                                    <div className="relative z-[1] flex flex-1">
                                                                        <Heading as="h5" className="text-[16px] font-medium text-blue_gray-900_01">
                                                                            Thời gian
                                                                        </Heading>
                                                                    </div>
                                                                    <div className="relative ml-[-94px] flex">
                                                                        <Heading as="h6" className="text-[16px] font-medium text-blue_gray-900_01">
                                                                            Loại giao dịch
                                                                        </Heading>
                                                                    </div>
                                                                </div>
                                                                <div className="mb-1 flex flex-1 items-center md:self-stretch sm:flex-col">
                                                                    <div className="flex w-full justify-end self-end px-[26px] sm:w-full sm:self-auto sm:px-5">
                                                                        <Heading as="p" className="text-[16px] font-medium text-blue_gray-900_01">
                                                                            Phương thức{" "}
                                                                        </Heading>
                                                                    </div>
                                                                    <div className="flex w-full justify-center self-end px-8 sm:w-full sm:self-auto sm:px-5">
                                                                        <Heading as="p" className="text-[16px] font-medium text-blue_gray-900_01">
                                                                            Trạng thái
                                                                        </Heading>
                                                                    </div>
                                                                    <div className="ml-5 flex w-full flex-wrap justify-between gap-5 px-1.5 sm:ml-0 sm:w-full">
                                                                        <Heading
                                                                            as="p"
                                                                            className="ml-3 text-[16px] font-medium text-blue_gray-900_01 md:ml-0"
                                                                        >
                                                                            Số tiền
                                                                        </Heading>
                                                                        <Heading as="p" className="text-[16px] font-medium text-blue_gray-900_01">
                                                                            Thêm
                                                                        </Heading>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="ml-5 mr-[18px] flex md:mx-0 md:flex-col">
                                                                    <div className="flex w-[44%] justify-center md:w-full">
                                                                        <div className="flex py-2.5">
                                                                            <Text as="p" className="mb-7 text-[15px] font-normal text-blue_gray-900_01">
                                                                                #1923
                                                                            </Text>
                                                                        </div>
                                                                        <div className="flex-1 py-2">
                                                                            <Text
                                                                                as="p"
                                                                                className="mb-5 text-[15px] font-normal leading-[22px] text-blue_gray-900_01"
                                                                            >
                                                                                <>
                                                                                    12/9/2024
                                                                                    <br />
                                                                                    21:29
                                                                                </>
                                                                            </Text>
                                                                        </div>
                                                                        <div className="relative ml-[-94px] flex px-[34px] py-[18px] sm:px-5">
                                                                            <Text as="p" className="mb-2.5 text-[15px] font-normal text-blue_gray-900_01">
                                                                                Rút tiền
                                                                            </Text>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex flex-1 md:self-stretch sm:flex-col">
                                                                        <div className="flex w-full px-[50px] py-3 md:px-5 sm:w-full">
                                                                            <Text as="p" className="mb-[22px] text-[15px] font-normal text-blue_gray-900_01">
                                                                                VN Pay
                                                                            </Text>
                                                                        </div>
                                                                        <div className="flex w-full justify-center sm:w-full">
                                                                            <Text
                                                                                size="texts"
                                                                                as="p"
                                                                                className="mb-[30px] rounded-md bg-gray-50 py-2 pl-2.5 pr-[34px] text-[13px] font-medium text-light_blue-500 sm:pr-5"
                                                                            >
                                                                                Đang chờ
                                                                            </Text>
                                                                        </div>
                                                                        <div className="ml-5 flex w-full items-start justify-between gap-5 sm:ml-0 sm:w-full">
                                                                            <Heading
                                                                                size="headings"
                                                                                as="p"
                                                                                className="ml-5 mt-3.5 flex text-[14px] font-semibold capitalize text-blue_gray-900_01"
                                                                            >
                                                                                <span>250.000</span>
                                                                                <a href="#" className="inline underline">
                                                                                    đ
                                                                                </a>
                                                                            </Heading>
                                                                            <Img
                                                                                src="images/img_user.svg"
                                                                                alt="Transaction User Image"
                                                                                className="mb-[34px] h-[32px]"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="h-[1.39px] bg-gray-100" />
                                                                <div className="mx-5 flex md:mx-0 md:flex-col">
                                                                    <div className="flex w-[44%] justify-center md:w-full">
                                                                        <div className="flex flex-col items-start py-[30px] sm:py-5">
                                                                            <Text as="p" className="mb-1.5 text-[15px] font-normal text-blue_gray-900_01">
                                                                                #1922
                                                                            </Text>
                                                                        </div>
                                                                        <div className="relative z-[2] flex-1 py-7 sm:py-5">
                                                                            <Text
                                                                                as="p"
                                                                                className="text-[15px] font-normal leading-[22px] text-blue_gray-900_01"
                                                                            >
                                                                                <>
                                                                                    12/9/2024
                                                                                    <br />
                                                                                    21:29
                                                                                </>
                                                                            </Text>
                                                                        </div>
                                                                        <div className="relative ml-[-94px] flex px-[34px] py-[30px] sm:p-5">
                                                                            <Text as="p" className="mt-2 text-[15px] font-normal text-blue_gray-900_01">
                                                                                Rút tiền
                                                                            </Text>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex flex-1 md:self-stretch sm:flex-col">
                                                                        <div className="flex w-full px-[50px] py-8 md:px-5 sm:w-full sm:p-5">
                                                                            <Text as="p" className="text-[15px] font-normal text-blue_gray-900_01">
                                                                                Pay OS
                                                                            </Text>
                                                                        </div>
                                                                        <div className="flex w-full px-[26px] py-[22px] sm:w-full sm:p-5">
                                                                            <Button
                                                                                shape="round"
                                                                                className="mb-2.5 min-w-[68px] rounded-md px-2.5 font-medium"
                                                                            >
                                                                                Đã hủy
                                                                            </Button>
                                                                        </div>
                                                                        <div className="ml-5 flex w-full items-start justify-between gap-5 py-[26px] sm:ml-0 sm:w-full sm:py-5">
                                                                            <Text
                                                                                as="p"
                                                                                className="ml-4 flex font-bevietnampro text-[14px] font-semibold capitalize text-indigo-200"
                                                                            >
                                                                                <span>250.000</span>
                                                                                <a href="#" className="inline underline">
                                                                                    đ
                                                                                </a>
                                                                            </Text>
                                                                            <Img
                                                                                src="images/img_user.svg"
                                                                                alt="Transaction User Image Row"
                                                                                className="h-[32px] self-center"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="relative z-[7] h-[1.39px] bg-gray-100" />
                                                                <div className="mx-5 flex md:mx-0 md:flex-col">
                                                                    <div className="flex w-[44%] justify-center md:w-full">
                                                                        <div className="flex flex-col items-start py-[30px] sm:py-5">
                                                                            <Text as="p" className="mb-2 text-[15px] font-normal text-blue_gray-900_01">
                                                                                #1921
                                                                            </Text>
                                                                        </div>
                                                                        <div className="relative z-[3] flex-1 py-7 sm:py-5">
                                                                            <Text
                                                                                as="p"
                                                                                className="text-[15px] font-normal leading-[22px] text-blue_gray-900_01"
                                                                            >
                                                                                <>
                                                                                    12/9/2024
                                                                                    <br />
                                                                                    21:29
                                                                                </>
                                                                            </Text>
                                                                        </div>
                                                                        <div className="relative ml-[-94px] flex px-9 py-8 sm:p-5">
                                                                            <Text as="p" className="mb-1 text-[15px] font-normal text-blue_gray-900_01">
                                                                                Nạp tiền
                                                                            </Text>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex flex-1 md:self-stretch sm:flex-col">
                                                                        <div className="flex w-full justify-center p-8 sm:w-full sm:p-5">
                                                                            <Text as="p" className="mb-1.5 text-[15px] font-normal text-blue_gray-900_01">
                                                                                TP Bank
                                                                            </Text>
                                                                        </div>
                                                                        <div className="w-full p-[26px] sm:w-full sm:p-5">
                                                                            <Button shape="round" className="w-full rounded-md px-2.5 font-medium">
                                                                                Hoàn thành
                                                                            </Button>
                                                                        </div>
                                                                        <div className="ml-5 flex w-full items-start justify-between gap-5 py-[26px] sm:ml-0 sm:w-full sm:py-5">
                                                                            <Text
                                                                                as="p"
                                                                                className="ml-4 flex font-bevietnampro text-[14px] font-semibold capitalize text-green-a700"
                                                                            >
                                                                                <span>+250.000</span>
                                                                                <a href="#" className="inline underline">
                                                                                    đ
                                                                                </a>
                                                                            </Text>
                                                                            <Img
                                                                                src="images/img_user.svg"
                                                                                alt="Transaction User Image Row"
                                                                                className="h-[32px] self-center"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="relative z-[8] h-[1.39px] bg-gray-100" />
                                                                <div className="mx-5 flex md:mx-0 md:flex-col">
                                                                    <div className="flex w-[44%] justify-center md:w-full">
                                                                        <div className="flex flex-col items-start py-[30px] sm:py-5">
                                                                            <Text as="p" className="mb-1.5 text-[15px] font-normal text-blue_gray-900_01">
                                                                                #1920
                                                                            </Text>
                                                                        </div>
                                                                        <div className="relative z-[4] flex-1 py-7 sm:py-5">
                                                                            <Text
                                                                                as="p"
                                                                                className="text-[15px] font-normal leading-[22px] text-blue_gray-900_01"
                                                                            >
                                                                                <>
                                                                                    12/9/2024
                                                                                    <br />
                                                                                    21:29
                                                                                </>
                                                                            </Text>
                                                                        </div>
                                                                        <div className="relative ml-[-94px] flex px-9 py-[30px] sm:p-5">
                                                                            <Text as="p" className="mb-1.5 text-[15px] font-normal text-blue_gray-900_01">
                                                                                Nạp tiền
                                                                            </Text>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex flex-1 md:self-stretch sm:flex-col">
                                                                        <div className="flex w-full px-[50px] py-8 md:px-5 sm:w-full sm:p-5">
                                                                            <Text as="p" className="text-[15px] font-normal text-blue_gray-900_01">
                                                                                Pay OS
                                                                            </Text>
                                                                        </div>
                                                                        <div className="flex w-full justify-center p-[22px] sm:w-full sm:p-5">
                                                                            <Button shape="round" className="mb-2 min-w-[96px] rounded-md px-2.5 font-medium">
                                                                                Hoàn thành
                                                                            </Button>
                                                                        </div>
                                                                        <div className="ml-5 flex w-full items-start justify-between gap-5 py-[26px] sm:ml-0 sm:w-full sm:py-5">
                                                                            <Text
                                                                                as="p"
                                                                                className="ml-4 flex font-bevietnampro text-[14px] font-semibold capitalize text-green-a700"
                                                                            >
                                                                                <span>+250.000</span>
                                                                                <a href="#" className="inline underline">
                                                                                    đ
                                                                                </a>
                                                                            </Text>
                                                                            <Img
                                                                                src="images/img_user.svg"
                                                                                alt="Transaction User Image Row"
                                                                                className="h-[32px] self-center"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="relative z-[9] h-[1.39px] bg-gray-100" />
                                                                <div className="mx-5 flex md:mx-0 md:flex-col">
                                                                    <div className="flex w-[44%] justify-center md:w-full">
                                                                        <div className="flex flex-col items-start py-[30px] sm:py-5">
                                                                            <Text as="p" className="mb-1.5 text-[15px] font-normal text-blue_gray-900_01">
                                                                                #1919
                                                                            </Text>
                                                                        </div>
                                                                        <div className="relative z-[5] flex-1 py-7 sm:py-5">
                                                                            <Text
                                                                                as="p"
                                                                                className="text-[15px] font-normal leading-[22px] text-blue_gray-900_01"
                                                                            >
                                                                                <>
                                                                                    12/9/2024
                                                                                    <br />
                                                                                    21:29
                                                                                </>
                                                                            </Text>
                                                                        </div>
                                                                        <div className="relative ml-[-94px] flex px-9 py-[30px] sm:p-5">
                                                                            <Text as="p" className="mb-1.5 text-[15px] font-normal text-blue_gray-900_01">
                                                                                Rút tiền
                                                                            </Text>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex flex-1 md:self-stretch sm:flex-col">
                                                                        <div className="flex w-full px-[50px] py-8 md:px-5 sm:w-full sm:p-5">
                                                                            <Text as="p" className="text-[15px] font-normal text-blue_gray-900_01">
                                                                                Pay OS
                                                                            </Text>
                                                                        </div>
                                                                        <div className="w-full p-[26px] sm:w-full sm:p-5">
                                                                            <Button shape="round" className="w-full rounded-md px-2.5 font-medium">
                                                                                Hoàn thành
                                                                            </Button>
                                                                        </div>
                                                                        <div className="ml-5 flex w-full items-start justify-between gap-5 py-[26px] sm:ml-0 sm:w-full sm:py-5">
                                                                            <Text
                                                                                as="p"
                                                                                className="ml-4 flex font-bevietnampro text-[14px] font-semibold capitalize text-deep_orange-a700"
                                                                            >
                                                                                <span>-250.000</span>
                                                                                <a href="#" className="inline underline">
                                                                                    đ
                                                                                </a>
                                                                            </Text>
                                                                            <Img
                                                                                src="images/img_user.svg"
                                                                                alt="Transaction User Image Row"
                                                                                className="h-[32px] self-center"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="h-[1.39px] bg-gray-100" />
                                                                <div className="mx-5 mt-5 flex items-center md:mx-0 md:flex-col">
                                                                    <div className="flex w-[44%] items-start justify-center self-end md:w-full md:self-auto">
                                                                        <div className="flex">
                                                                            <Text as="p" className="text-[15px] font-normal text-blue_gray-900_01">
                                                                                #1918
                                                                            </Text>
                                                                        </div>
                                                                        <div className="relative z-[6] flex-1 self-center">
                                                                            <Text
                                                                                as="p"
                                                                                className="text-[15px] font-normal leading-[22px] text-blue_gray-900_01"
                                                                            >
                                                                                <>
                                                                                    12/9/2024
                                                                                    <br />
                                                                                    21:29
                                                                                </>
                                                                            </Text>
                                                                        </div>
                                                                        <div className="relative ml-[-94px] flex px-9 sm:px-5">
                                                                            <Text as="p" className="text-[15px] font-normal text-blue_gray-900_01">
                                                                                Rút tiền
                                                                            </Text>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex flex-1 items-end md:self-stretch sm:flex-col">
                                                                        <div className="mb-1.5 flex w-full px-[50px] md:px-5 sm:w-full">
                                                                            <Text as="p" className="text-[15px] font-normal text-blue_gray-900_01">
                                                                                Pay OS
                                                                            </Text>
                                                                        </div>
                                                                        <div className="w-full self-center px-[26px] sm:w-full sm:px-5">
                                                                            <Button shape="round" className="w-full rounded-md px-2.5 font-medium">
                                                                                Hoàn thành
                                                                            </Button>
                                                                        </div>
                                                                        <div className="ml-5 flex w-full items-start justify-between gap-5 sm:ml-0 sm:w-full">
                                                                            <Text
                                                                                as="p"
                                                                                className="ml-4 flex font-bevietnampro text-[14px] font-semibold capitalize text-red-a700"
                                                                            >
                                                                                <span>-250.000</span>
                                                                                <a href="#" className="inline underline">
                                                                                    đ
                                                                                </a>
                                                                            </Text>
                                                                            <Img
                                                                                src="images/img_user.svg"
                                                                                alt="Transaction User Image Row"
                                                                                className="h-[32px] self-center"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </TabPanel>
                                        ))}
                                    </div>
                                    <NumberRow className="mx-[294px]" />
                                </div>
                            </div>
                        </Tabs>
                    </div>
                </div>
                <div className="mt-[194px] self-stretch">
                    <Footer5 className="mt-[34px] h-[388px] bg-[url(/images/img_group_19979.png)] bg-cover bg-no-repeat md:h-auto" />
                </div>
            </div>
        </>
    );
}
















