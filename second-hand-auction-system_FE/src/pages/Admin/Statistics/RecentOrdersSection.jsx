import { Img, Text, ButtonDH, Heading } from "../../../components";
import { ReactTable1 } from "../../../components/ReactTable1/index.jsx";
import { createColumnHelper } from "@tanstack/react-table";
import React from "react";

const tableData = [
  {
    idRow: "12",
    productRow: "Áo Thun Nam Nike",
    dateRow: "15 - 12 - 2023",
    statusRow: "Hoàn thành",
    totalRow: "250.000đ",
  },
  {
    idRow: "13",
    productRow: "Áo Thun Nữ Adidas",
    dateRow: "15 - 12 - 2023",
    statusRow: "Đã hủy",
    totalRow: "250.000đ",
  },
  {
    idRow: "14",
    productRow: "Áo Thun Nữ Adidas",
    dateRow: "15 - 12 - 2023",
    totalRow: "250.000đ",
  },
  {
    idRow: "15",
    productRow: "Áo Thun Nam Nike",
    dateRow: "15 - 12 - 2023",
    statusRow: "Hoàn thành",
    totalRow: "250.000đ",
  },
  {
    idRow: "16",
    productRow: "Áo Thun Nữ Adidas",
    dateRow: "15 - 12 - 2023",
    statusRow: "Đã hủy",
    totalRow: "250.000đ",
  },
  {
    idRow: "17",
    productRow: "Áo Thun Nam Nike",
    dateRow: "15 - 12 - 2023",
    totalRow: "250.000đ",
  },
];

export default function RecentOrdersSection() {
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("idRow", {
        cell: (info) => (
          <div className="flex flex-col items-center px-1">
            <Text
              as="p"
              className="mb-8 text-[15px] font-normal text-blue_gray-900"
            >
              {info.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <div className="flex px-2.5 py-4">
            <Heading
              as="p"
              className="text-[16px] font-medium text-blue_gray-900"
            >
              ID
            </Heading>
          </div>
        ),
        meta: { width: "38px" },
      }),
      tableColumnHelper.accessor("productRow", {
        cell: (info) => (
          <div className="ml-14 flex flex-1">
            <Text
              as="p"
              className="mb-9 text-[15px] font-normal text-blue_gray-900"
            >
              {info.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <div className="ml-14 flex flex-1 py-4">
            <Heading
              as="p"
              className="text-[16px] font-medium text-blue_gray-900"
            >
              Sản phẩm
            </Heading>
          </div>
        ),
        meta: { width: "242px" },
      }),
      tableColumnHelper.accessor("dateRow", {
        cell: (info) => (
          <div className="flex flex-1 justify-center">
            <Text
              as="p"
              className="mb-[34px] text-[15px] font-normal text-blue_gray-900"
            >
              {info.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-1 py-4 pl-[58px] pr-14 md:px-5">
            <Heading
              as="p"
              className="text-[16px] font-medium text-blue_gray-900"
            >
              Ngày
            </Heading>
          </div>
        ),
        meta: { width: "214px" },
      }),
      tableColumnHelper.accessor("statusRow", {
        cell: (info) => (
          <div className="ml-[46px] flex flex-1 px-1">
            <ButtonDH
              shape="round"
              className="mb-6 min-w-[96px] rounded-md px-2.5 font-medium"
            >
              {info.getValue()}
            </ButtonDH>
          </div>
        ),
        header: (info) => (
          <div className="ml-[46px] flex flex-1 px-1 py-4">
            <Heading
              as="p"
              className="text-[16px] font-medium text-blue_gray-900"
            >
              Tình trạng
            </Heading>
          </div>
        ),
        meta: { width: "218px" },
      }),
      tableColumnHelper.accessor("totalRow", {
        cell: (info) => (
          <div className="flex">
            <Heading
              size="headings"
              as="p"
              className="mb-[26px] flex text-[14px] font-semibold capitalize text-blue_gray-900"
            >
              <span>250.000</span>
              <a href="#" className="inline underline">
                đ
              </a>
            </Heading>
          </div>
        ),
        header: (info) => (
          <div className="flex px-3 py-4">
            <Heading
              as="p"
              className="text-[16px] font-medium text-blue_gray-900"
            >
              Tổng
            </Heading>
          </div>
        ),
        meta: { width: "82px" },
      }),
      tableColumnHelper.accessor("addRow", {
        cell: (info) => (
          <div className="ml-11 flex flex-col items-end">
            <div className="relative mb-7 h-[32px] w-[46%] p-0.5 md:h-auto">
              <div className="h-[20px] w-[20px] rounded-[5px] bg-gray-100" />
              <div className="absolute left-[7px] top-[11px] m-auto flex w-[54%]">
                <div className="h-[2px] w-[2px] rounded-[1px] bg-blue_gray-600" />
                <div className="h-[2px] w-[2px] rounded-[1px] bg-blue_gray-600" />
                <div className="h-[2px] w-[2px] rounded-[1px] bg-blue_gray-600" />
              </div>
            </div>
          </div>
        ),
        header: (info) => (
          <div className="ml-11 flex py-4 pr-2.5">
            <Heading
              as="p"
              className="text-[16px] font-medium text-blue_gray-900"
            >
              Thêm
            </Heading>
          </div>
        ),
        meta: { width: "60px" },
      }),
    ];
  }, []);

  return (
    <>
      {/* recent orders section */}
      <div className="px-1">
        <div className="flex flex-col items-start gap-14 rounded-[16px] bg-bg-white py-9 shadow-xs sm:gap-7 sm:py-5">
          <Heading
            size="textxl"
            as="h6"
            className="ml-8 text-[18px] font-medium uppercase text-blue_gray-900 md:ml-0"
          >
            đơn hàng gần đây
          </Heading>
          <ReactTable1
            size="xs"
            className="ordersinnercolumn mb-3 self-stretch sm:block sm:overflow-x-auto sm:whitespace-nowrap"
            bodyProps={{ className: "" }}
            headerCellProps={{ className: "bg-gray-100_01" }}
            cellProps={{ className: "border-gray-100 border-b border-solid" }}
            columns={tableColumns}
            data={tableData}
          />
        </div>
      </div>
    </>
  );
}
