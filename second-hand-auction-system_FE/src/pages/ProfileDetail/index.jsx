import { Helmet } from "react-helmet";
import {
  Img,
  Text,
  ButtonDH,
  Heading,
  SelectBox,
  InputDH,
} from "../../components";
import Header2 from "../../components/Header2";
import FooterBK from "../../components/FooterBK";
import React, { useState } from "react";
import ProfileCard from "../../components/ProfileCard";
import AccountOptions from "../../components/AccountOption";
import { EditOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import {SiderUserBK} from "@/components/SiderUser/SiderUserBK.jsx";

export default function ProfileDetailPage() {
  const [position, setPosition] = useState("end");
  const [modal2Open, setModal2Open] = useState(false);
  return (
    <>
      <Modal
        title="Vertically centered modal dialog"
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
      >
        <form className="max-w-md mx-auto">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="email"
              name="floating_email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="password"
              name="floating_password"
              id="floating_password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="password"
              name="repeat_password"
              id="floating_repeat_password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_repeat_password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Confirm password
            </label>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="floating_first_name"
                id="floating_first_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_first_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                First name
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="floating_last_name"
                id="floating_last_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_last_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Last name
              </label>
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                name="floating_phone"
                id="floating_phone"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_phone"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Phone number (123-456-7890)
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="floating_company"
                id="floating_company"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_company"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Company (Ex. Google)
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </Modal>
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
            <div className="mt-12 flex w-[24%] flex-col gap-[20px] md:w-full">
              {/* User Name and Wallet amount */}
              {/*<ProfileCard />*/}
              {/*<div className="h-[1.84px] bg-gray-200" />*/}

              <div className="py-0">
                {/*<AccountOptions />*/}
                <SiderUserBK/>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center gap-[38px] self-center md:self-stretch">
              <div className="self-stretch">
                <div className="flex flex-col gap-4">
                  <div className="mr-1 md:mr-0">
                    <div className="flex flex-col items-start gap-1.5 self-end py-7">
                      <Heading
                        size="headingmd"
                        as="h4"
                        className="text-[16px] font-semibold text-blue_gray-900_01"
                      >
                        Thông tin tài khoản{" "}
                      </Heading>
                      <div className="h-[2px] w-[14%] bg-blue_gray-900_01" />
                    </div>
                  </div>
                  <div>
                    {/*<div className="flex items-start gap-6 md:flex-col">*/}
                    {/*    <div className="flex w-full flex-col gap-4 self-center">*/}
                    {/*        <div className="flex flex-col items-start justify-center gap-2">*/}
                    {/*            <Heading as="h5" className="text-[16px] font-medium text-blue_gray-900_01">*/}
                    {/*                Tên*/}
                    {/*            </Heading>*/}
                    {/*            <InputDH*/}
                    {/*                shape="round"*/}
                    {/*                name="Name Field"*/}
                    {/*                placeholder={`Nhập tên`}*/}
                    {/*                className="self-stretch rounded-md border border-gray-200 px-4"*/}
                    {/*            />*/}
                    {/*        </div>*/}
                    {/*        <div className="flex flex-col items-start justify-center gap-2">*/}
                    {/*            <Heading as="h6" className="text-[16px] font-medium text-blue_gray-900_01">*/}
                    {/*                Email*/}
                    {/*            </Heading>*/}
                    {/*            <InputDH*/}
                    {/*                shape="round"*/}
                    {/*                type="email"*/}
                    {/*                name="Email Field"*/}
                    {/*                placeholder={`Nhập email`}*/}
                    {/*                className="self-stretch rounded-md border border-gray-200 px-4"*/}
                    {/*            />*/}
                    {/*        </div>*/}
                    {/*        <div className="flex items-center gap-12">*/}
                    {/*            <ButtonDH*/}
                    {/*                shape="round"*/}
                    {/*                className="min-w-[116px] rounded-md border border-solid border-green-a700 px-[33px] sm:px-5"*/}
                    {/*            >*/}
                    {/*                Lưu*/}
                    {/*            </ButtonDH>*/}
                    {/*            <Text as="p" className="text-[14px] font-normal text-blue_gray-600">*/}
                    {/*                Hủy bỏ*/}
                    {/*            </Text>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="flex w-full flex-col gap-4">*/}
                    {/*        <div className="flex flex-col items-start gap-1.5">*/}
                    {/*            <Heading as="p" className="mt-1 text-[16px] font-medium text-blue_gray-900_01">*/}
                    {/*                Họ*/}
                    {/*            </Heading>*/}
                    {/*            <InputDH*/}
                    {/*                shape="round"*/}
                    {/*                name="Surname Field"*/}
                    {/*                placeholder={`Nhập họ`}*/}
                    {/*                className="self-stretch rounded-md border border-gray-200 px-4"*/}
                    {/*            />*/}
                    {/*        </div>*/}
                    {/*        <div className="flex flex-col items-start justify-center gap-1.5">*/}
                    {/*            <Heading as="p" className="text-[16px] font-medium text-blue_gray-900_01">*/}
                    {/*                Số điện thoại*/}
                    {/*            </Heading>*/}
                    {/*            <InputDH*/}
                    {/*                shape="round"*/}
                    {/*                name="Phone Field"*/}
                    {/*                placeholder={`Nhập số điện thoại`}*/}
                    {/*                className="self-stretch rounded-md border border-gray-200 px-4"*/}
                    {/*            />*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className="bg-white overflow-hidden shadow rounded-lg border">
                      <div
                        style={{ display: "flex", justifyContent: "flex-end" }}
                      >
                        <Button
                          icon={<EditOutlined />}
                          type="text"
                          iconPosition={position}
                          onClick={() => setModal2Open(true)}
                        ></Button>
                      </div>
                      <div className="text-center my-4">
                        <img
                          className="h-32 w-32 rounded-full border-4 border-white dark:border-gray-800 mx-auto my-4"
                          src="https://randomuser.me/api/portraits/men/29.jpg"
                          alt=""
                        />
                        <div className="py-2">
                          <h3 className="font-bold text-2xl text-gray-800 dark:text-white mb-1">
                            Ronald Potter
                          </h3>
                          <div className="inline-flex text-gray-700 dark:text-gray-300 items-center">
                            <svg
                              className="h-5 w-5 text-gray-400 dark:text-gray-600 mr-1"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="24"
                              height="24"
                            >
                              <path
                                className=""
                                d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                              />
                            </svg>
                            Glendale, BF
                          </div>
                        </div>
                      </div>
                      <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                        <dl className="sm:divide-y sm:divide-gray-200">
                          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                              Full name
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                              John Doe
                            </dd>
                          </div>
                          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                              Email address
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                              johndoe@example.com
                            </dd>
                          </div>
                          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                              Phone number
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                              (123) 456-7890
                            </dd>
                          </div>
                          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                              Address
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                              123 Main St
                              <br />
                              Anytown, USA 12345
                            </dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
                {/*<div className="mr-1 mt-[88px] md:mr-0">*/}
                {/*    <div className="flex flex-col gap-4">*/}
                {/*        <div className="flex flex-col gap-4">*/}
                {/*            <div className="flex flex-col items-start justify-center gap-2">*/}
                {/*                <Heading as="p"*/}
                {/*                         className="text-[16px] font-medium text-blue_gray-900_01">*/}
                {/*                    Mật khẩu gần đây*/}
                {/*                </Heading>*/}
                {/*                <InputDH*/}
                {/*                    shape="round"*/}
                {/*                    type="text"*/}
                {/*                    name="Current Password Field"*/}
                {/*                    placeholder={`Your Name`}*/}
                {/*                    className="w-[50%] rounded-md border border-gray-200 px-4"*/}
                {/*                />*/}
                {/*            </div>*/}
                {/*            <div className="flex flex-col items-start justify-center gap-2">*/}
                {/*                <Heading as="p"*/}
                {/*                         className="text-[16px] font-medium text-blue_gray-900_01">*/}
                {/*                    Mật khẩu mới*/}
                {/*                </Heading>*/}
                {/*                <InputDH*/}
                {/*                    shape="round"*/}
                {/*                    type="text"*/}
                {/*                    name="New Password Field"*/}
                {/*                    placeholder={`Your Name`}*/}
                {/*                    className="w-[50%] rounded-md border border-gray-200 px-4"*/}
                {/*                />*/}
                {/*            </div>*/}
                {/*            <div className="flex flex-col items-start justify-center gap-2">*/}
                {/*                <Heading as="p" className="text-[16px] font-medium text-blue_gray-900_01">*/}
                {/*                    Xác nhận mật khẩu mới*/}
                {/*                </Heading>*/}
                {/*                <InputDH*/}
                {/*                    shape="round"*/}
                {/*                    type="text"*/}
                {/*                    name="Confirm Password Field"*/}
                {/*                    placeholder={`Your Name`}*/}
                {/*                    className="w-[50%] rounded-md border border-gray-200 px-4"*/}
                {/*                />*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className="flex items-center gap-[42px]">*/}
                {/*            <ButtonDH*/}
                {/*                size="2xl"*/}
                {/*                shape="round"*/}
                {/*                className="min-w-[112px] rounded-md border border-solid border-green-a700 px-[33px] sm:px-5"*/}
                {/*            >*/}
                {/*                Lưu*/}
                {/*            </ButtonDH>*/}
                {/*            <Heading as="p" className="text-[16px] font-normal text-blue_gray-600">*/}
                {/*                Hủy bỏ*/}
                {/*            </Heading>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="mr-1 mt-12 flex flex-col gap-[18px] md:mr-0">*/}
                {/*    <div className="flex flex-col items-start gap-5">*/}
                {/*        <div className="self-stretch">*/}
                {/*            <div className="flex flex-col items-start">*/}
                {/*                <Heading as="p" className="text-[16px] font-medium text-blue_gray-900_01">*/}
                {/*                    Email*/}
                {/*                </Heading>*/}
                {/*                <div className="flex items-center justify-between gap-5 self-stretch">*/}
                {/*                    <Heading as="p" className="self-end text-[16px] font-normal text-blue_gray-900_01">*/}
                {/*                        Mã xác thực được gửi đến email của bạn*/}
                {/*                    </Heading>*/}

                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className="h-px w-[70%] bg-gray-200" />*/}
                {/*    </div>*/}
                {/*    <div>*/}
                {/*        <div className="flex flex-col items-start">*/}
                {/*            <Heading as="p" className="relative z-[1] text-[16px] font-medium text-blue_gray-900_01">*/}
                {/*                Điện thoại*/}
                {/*            </Heading>*/}
                {/*            <div className="flex items-center justify-between gap-5 self-stretch sm:flex-col">*/}
                {/*                <Heading as="p" className="self-end text-[16px] font-normal text-blue_gray-900_01 sm:self-auto">*/}
                {/*                    Nhân viên EZShop sẽ gọi điện thoại tới di động của bạn{" "}*/}
                {/*                </Heading>*/}
                {/*                /!* <Switch value={false} className="mr-[274px] sm:mr-0" /> *!/*/}
                {/*            </div>*/}
                {/*            <div className="mt-5 h-px w-[70%] bg-gray-200" />*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="mb-[104px] flex items-center gap-14">*/}
                {/*        <ButtonDH*/}
                {/*            size="2xl"*/}
                {/*            shape="round"*/}
                {/*            className="min-w-[112px] rounded-md border border-solid border-green-a700 px-[33px] sm:px-5"*/}
                {/*        >*/}
                {/*            Lưu*/}
                {/*        </ButtonDH>*/}
                {/*        <Heading as="p" className="text-[16px] font-normal text-blue_gray-600">*/}
                {/*            Hủy bỏ*/}
                {/*        </Heading>*/}
                {/*    </div>*/}
                {/*</div>*/}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[194px] self-stretch">
          <FooterBK className="mt-[34px] h-[388px] bg-[url(/images/img_group_19979.png)] bg-cover bg-no-repeat md:h-auto" />
        </div>
      </div>
    </>
  );
}
