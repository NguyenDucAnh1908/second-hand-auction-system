import { ButtonDH, TextArea, Heading, CheckBox, Text, Img, InputDH } from "../../../components";
import React from "react";

export default function AppraisalFormSection() {
    return (
        <>
            {/* appraisal form section */}
            <div className="mb-1 flex flex-col items-center gap-[54px] px-14 md:px-5 sm:gap-[27px]">
                <div className="flex w-[96%] justify-center md:w-full">
                    <div className="flex w-full flex-col gap-[42px]">
                        <div className="container-xs flex flex-col gap-5 md:px-5">
                            <div className="w-[50%] md:w-1/2 border border-green-600 rounded-lg shadow-lg bg-gradient-to-r from-green-400 to-green-600 p-5">
                                <Heading
                                    size="textxl"
                                    as="h2"
                                    className="py-1.5 pl-7 pr-[34px] font-bevietnampro text-[25px] font-medium text-bg-white md:text-[23px] sm:px-5 sm:text-[21px]"
                                >
                                    Thông tin chung của sản phẩm
                                </Heading>
                            </div>
                            <div className="flex flex-col w-full md:flex-row md:gap-5 items-stretch">
                                <div className="flex flex-col flex-1 gap-[30px]">
                                    <div className="flex flex-col items-start justify-center gap-1.5">
                                        <Heading as="h3" className="text-[16px] font-medium text-blue_gray-900">
                                            Tiêu đề
                                        </Heading>
                                        <InputDH
                                            shape="round"
                                            name="Title Field"
                                            placeholder={`Tiêu đề sản phẩm`}
                                            className="w-full rounded-md border px-3.5"
                                        />
                                    </div>
                                    <div className="flex flex-col items-start justify-center gap-1.5">
                                        <Heading as="h4" className="text-[16px] font-medium text-blue_gray-900">
                                            Tên sản phẩm
                                        </Heading>
                                        <InputDH
                                            shape="round"
                                            name="ProductName Field"
                                            placeholder={`Tên sản phẩm`}
                                            className="w-full rounded-md border px-3.5"
                                        />
                                    </div>
                                    <div className="flex flex-col items-start justify-center gap-1.5">
                                        <Heading as="h5" className="text-[16px] font-medium text-black-900">
                                            Hình ảnh sản phẩm
                                        </Heading>
                                        <div className="flex items-start justify-center w-full rounded-[20px] bg-blue-200 p-2.5">
                                            <Img
                                                src="/images/img_tv.png"
                                                alt="First Image"
                                                className="mb-1 h-[146px] w-[54%] rounded-[20px] object-contain"
                                            />
                                            <Img
                                                src="/images/img_tv_detail_1.png"
                                                alt="Second Image"
                                                className="ml-1.5 h-[62px] w-[62px] object-cover"
                                            />
                                            <Img
                                                src="/images/img_tv_detail_2.png"
                                                alt="Third Image"
                                                className="ml-7 h-[60px] w-[60px] object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col flex-1 gap-[30px]">
                                    <div className="flex flex-col items-start gap-1.5">
                                        <Heading as="h6" className="text-[16px] font-medium text-blue_gray-900">
                                            Tên thương hiệu
                                        </Heading>
                                        <InputDH
                                            shape="round"
                                            name="BrandName Field"
                                            placeholder={`Tiêu đề thương hiệu`}
                                            className="w-full rounded-md border px-3.5"
                                        />
                                    </div>
                                    <div className="flex flex-col items-start gap-1.5">
                                        <Heading as="p" className="text-[16px] font-medium text-black-900">
                                            Import file
                                        </Heading>
                                        <div className="flex items-center gap-[21px] rounded-[20px] bg-blue-200_01 px-7 py-1.5">
                                            <Img src="/images/img_upload.png" alt="Importfile Image" className="h-[38px] object-cover" />
                                            <Heading as="p" className="text-[16px] font-medium text-black-900">
                                                Giấy tờ liên quan đến sản phẩm
                                            </Heading>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-start gap-1.5">
                                        <Heading as="p" className="text-[16px] font-medium text-blue_gray-900">
                                            Mô tả
                                        </Heading>
                                        <textarea
                                            name="Note"
                                            placeholder="Ghi chú sản phẩm"
                                            rows={6}
                                            className="self-stretch rounded-md border px-3.5 resize-none" // Thêm 'resize-none' để ngăn người dùng thay đổi kích thước
                                        />
                                    </div>
                                    <div className="flex flex-col items-start gap-1.5">
                                        <Heading as="p" className="text-[16px] font-medium text-blue_gray-900">
                                            Danh mục
                                        </Heading>
                                        <InputDH
                                            shape="round"
                                            name="Category Field"
                                            placeholder={`Danh mục sản phẩm`}
                                            className="w-full rounded-md border px-3.5"
                                        />
                                    </div>
                                    <div className="flex flex-col items-start gap-1.5">
                                        <Heading as="p" className="text-[16px] font-medium text-blue_gray-900">
                                            Trình trạng
                                        </Heading>
                                        <InputDH
                                            shape="round"
                                            name="Condition Field"
                                            placeholder={`Tình trạng sản phẩm`}
                                            className="w-full rounded-md border px-3.5"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between gap-5 self-stretch md:flex-col">
                            {/* Thêm các nội dung khác nếu cần */}
                        </div>
                    </div>

                </div>
                <div className="mx-1.5 w-[96%] md:mx-0 md:w-full">
                    <div className="flex flex-col items-center gap-[58px] sm:gap-[29px]">
                        <div className="container-xs flex flex-col md:px-5">
                            <div className="w-[50%] border border-green-600 rounded-lg shadow-lg bg-gradient-to-r from-green-400 to-green-600 p-5">
                                <Heading
                                    size="textxl"
                                    as="h2"
                                    className="px-[34px] pb-1.5 pt-0.5 font-bevietnampro text-[25px] font-medium text-bg-white md:text-[23px] sm:px-5 sm:text-[21px]"
                                >
                                    Thông tin chi tiết của sản phẩm
                                </Heading>
                            </div>
                        </div>

                        <div className="flex items-center justify-center self-stretch md:flex-col">
                            <div className="flex flex-1 justify-center px-14 md:self-stretch md:px-5">
                                <div className="flex w-full items-center justify-center md:flex-col">
                                    <div className="flex flex-1 flex-col gap-[26px] px-[50px] md:self-stretch md:px-5">
                                        <div className="flex flex-col gap-[26px]">
                                            <div className="flex flex-col items-start justify-center gap-1.5">
                                                <Heading as="h3" className="text-[16px] font-medium text-blue_gray-900">
                                                    Màu sắc
                                                </Heading>
                                                <InputDH
                                                    shape="round"
                                                    name="Color"
                                                    placeholder={`Màu sắc sản phẩm`}
                                                    className="self-stretch rounded-md border px-3.5"
                                                />
                                            </div>
                                            <div className="flex flex-col items-start justify-center gap-1.5">
                                                <Heading as="h4" className="text-[16px] font-medium text-blue_gray-900">
                                                    Kích thước
                                                </Heading>
                                                <InputDH
                                                    shape="round"
                                                    name="Size"
                                                    placeholder={`Khối lượng sản phẩm`}
                                                    className="self-stretch rounded-md border px-3.5"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-start justify-center gap-1.5">
                                            <Heading as="h5" className="text-[16px] font-medium text-blue_gray-900">
                                                Phần trăm
                                            </Heading>
                                            <InputDH
                                                shape="round"
                                                name="Percentage"
                                                placeholder={`Phần trăm giá trị sản phẩm`}
                                                className="self-stretch rounded-md border px-3.5"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex w-[46%] flex-col items-end gap-5 md:w-full">
                                        <div className="flex w-full flex-col items-start justify-center gap-1">
                                            <Heading as="h6" className="text-[16px] font-medium text-blue_gray-900">
                                                Nguồn gốc/Xuất xứ
                                            </Heading>
                                            <InputDH
                                                shape="round"
                                                name="Origin"
                                                placeholder={`Ghi rõ thông tin xuất xứ`}
                                                className="self-stretch rounded-md border px-3.5"
                                            />
                                        </div>
                                        <div className="flex w-full flex-col items-start justify-center gap-1">
                                            <Heading as="p" className="text-[16px] font-medium text-blue_gray-900">
                                                Giá trị định giá
                                            </Heading>
                                            <InputDH
                                                shape="round"
                                                name="Pricing"
                                                placeholder={`Nhập giá trị sản phẩm`}
                                                suffix={<Text className="w-[32px] text-[15px] font-normal text-colors">VND</Text>}
                                                className="gap-4 self-stretch rounded-md border px-3"
                                            />
                                        </div>
                                        <div className="flex w-full flex-col items-start justify-center gap-1">
                                            <Heading as="p" className="text-[16px] font-medium text-blue_gray-900">
                                                Ngày sản xuất
                                            </Heading>
                                            <InputDH
                                                shape="round"
                                                name="ProductionDate"
                                                placeholder={`Ngày sản xuất`}
                                                className="self-stretch rounded-md border px-3.5"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container-xs flex flex-col items-center gap-[76px] md:gap-[57px] md:px-5 sm:gap-[38px]">
                            <div className="flex flex-col items-start self-stretch">

                                <div className="w-[50%] border border-green-600 rounded-lg shadow-lg bg-gradient-to-r from-green-400 to-green-600 p-5">
                                    <Heading
                                        size="textxl"
                                        as="h2"
                                        className="px-[34px] pb-1.5 pt-0.5 font-bevietnampro text-[25px] font-medium text-bg-white md:text-[23px] sm:px-5 sm:text-[21px]"
                                    >
                                        Chính sách của hệ thống
                                    </Heading>
                                </div>
                                <div className="mt-9 self-stretch">
                                    <div className="flex items-start justify-center gap-5 md:flex-col">
                                        <CheckBox
                                            name="DescriptionAccuracyCheckbox"
                                            label="Đảm bảo rằng mô tả sản phẩm tương ứng với hình ảnh được tải lên. Mô tả không đúng hoặc không rõ ràng có thể dẫn đến sự nhầm lẫn cho người mua."
                                            id="DescriptionAccuracyCheckbox"
                                            className="mr-3.5 mt-2 gap-5 pt-1.5 text-left font-bevietnampro text-[14px] leading-[150%] text-black-900 md:mr-0"
                                        />
                                    </div>
                                    <div className="mr-3.5 mt-2 flex items-start justify-center gap-5 md:mr-0 md:flex-col">
                                        <CheckBox
                                            name="DescriptionAccuracyCheckbox"
                                            label="Đảm bảo rằng mô tả sản phẩm tương ứng với hình ảnh được tải lên. Mô tả không đúng hoặc không rõ ràng có thể dẫn đến sự nhầm lẫn cho người mua."
                                            id="DescriptionAccuracyCheckbox"
                                            className="mr-3.5 mt-2 gap-5 pt-1.5 text-left font-bevietnampro text-[14px] leading-[150%] text-black-900 md:mr-0"
                                        />
                                    </div>
                                    <div className="mr-4 mt-6 flex items-start justify-center gap-5 md:mr-0 md:flex-col">
                                        <CheckBox
                                            name="DescriptionAccuracyCheckbox"
                                            label="Đảm bảo rằng mô tả sản phẩm tương ứng với hình ảnh được tải lên. Mô tả không đúng hoặc không rõ ràng có thể dẫn đến sự nhầm lẫn cho người mua."
                                            id="DescriptionAccuracyCheckbox"
                                            className="mr-3.5 mt-2 gap-5 pt-1.5 text-left font-bevietnampro text-[14px] leading-[150%] text-black-900 md:mr-0"
                                        />
                                    </div>
                                </div>
                                <ButtonDH
                                    size="xs"
                                    leftIcon={
                                        <Img src="/images/img_chinh_sach.png" alt="Image 148" className="h-[18px] w-[18px] object-cover" />
                                    }
                                    className="mt-3.5 min-w-[250px] gap-2 rounded-[16px]"
                                >
                                    Thông tin chính sách chi tiết
                                </ButtonDH>
                            </div>
                           
                            <div className="flex flex-col gap-[68px] self-stretch sm:gap-[34px]">
                              

                                <div className="flex flex-col justify-center gap-1">
                                    <Heading as="h4" className="text-[16px] font-medium text-blue_gray-900">
                                        Ghi chú
                                    </Heading>
                                    <textarea
                                        name="Note"
                                        placeholder="Ghi chú sản phẩm"
                                        rows={6} // Chiều cao tương ứng với 6 dòng
                                        className="self-stretch rounded-md border px-3.5 resize-none" // Thêm 'resize-none' để ngăn người dùng thay đổi kích thước
                                    />
                                </div>

                                <div className="flex justify-center gap-4">
                                    <ButtonDH className="bg-green-500 text-white rounded-md">Phê duyệt</ButtonDH>
                                    <ButtonDH className="bg-red-500 text-white rounded-md">Từ chối</ButtonDH>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}









