import { Helmet } from "react-helmet";
import SidebarAdmin from "../../../components/SidebarAdmin";
import HeaderAdmin from "../../../components/HeaderAdmin";
import IncomeAndOrdersSection from "./IncomeAndOrdersSection";
import IncomeStatisticsSection from "./IncomeStatisticsSection";
import RecentOrdersSection from "./RecentOrdersSection";
import React, { useState } from "react";

export default function StatisticsAdmin() {
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible((prev) => !prev);
  };

  return (
    <>
      <Helmet>
        <title>Admin Dashboard - Overview of Management Activities</title>
        <meta
          name="description"
          content="Explore the Admin Dashboard to manage products, orders, customers, and settings. Get insights into total income, new products, and recent orders to streamline your business operations."
        />
      </Helmet>
      <div className="w-[100%] md:w-full md:px-5">
        <HeaderAdmin toggleSidebar={toggleSidebar} />{" "}
        {/* Truyền hàm toggleSidebar xuống HeaderAdmin */}
        <div className="w-[100%] flex items-start">
          {isSidebarVisible && <SidebarAdmin />}{" "}
          {/* Hiển thị Sidebar nếu isSidebarVisible là true */}
          <div className="flex flex-1 flex-col gap-[38px] self-center">
            <div className="flex flex-col gap-4">
              {/* income and orders section */}
              <IncomeAndOrdersSection />

              {/* income statistics section */}
              <IncomeStatisticsSection />
            </div>

            {/* recent orders section */}
            <RecentOrdersSection />
          </div>
        </div>
      </div>
    </>
  );
}
