import DashboardAdminOne from "../../../components/DashboardAdminOne";
import React, { Suspense } from "react";

const adminDashboardStats = [
  { tngthunhp: "Tổng Thu Nhập", snphmmi: "Sản phẩm mới", p59021100: "59.021.100đ", p365tr256: "365TR.256" },
  { tngthunhp: "Tổng Thu Nhập", snphmmi: "Sản phẩm mới", p59021100: "59.021.100đ", p365tr256: "365TR.256" },
  { tngthunhp: "Tổng Thu Nhập", snphmmi: "Sản phẩm mới", p59021100: "59.021.100đ", p365tr256: "365TR.256" },
  { tngthunhp: "Tổng Thu Nhập", snphmmi: "Sản phẩm mới", p59021100: "59.021.100đ", p365tr256: "365TR.256" },
];

export default function IncomeAndOrdersSection() {
  return (
    <>
      {/* income and orders section */}
      <div className="ml-[22px] flex gap-5 md:ml-0 md:flex-col">
        <Suspense fallback={<div>Loading feed...</div>}>
          {adminDashboardStats.map((d, index) => (
            <DashboardAdminOne {...d} key={"adminDashboardList" + index} />
          ))}
        </Suspense>
      </div>
    </>
  );
}



