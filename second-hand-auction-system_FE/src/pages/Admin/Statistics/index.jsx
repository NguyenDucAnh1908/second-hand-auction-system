import { Helmet } from "react-helmet";
import Sidebar1 from "../../../components/Sidebar1";
import HeaderAdmin from "../../../components/HeadeAdmin";
import IncomeAndOrdersSection from "./IncomeAndOrdersSection";
import IncomeStatisticsSection from "./IncomeStatisticsSection";
import RecentOrdersSection from "./RecentOrdersSection";
import React, { useState } from "react"; // Import useState

export default function StatisticsAdmin() {
  const [isSidebarVisible, setSidebarVisible] = useState(true); // Trạng thái để theo dõi việc hiển thị Sidebar

  const toggleSidebar = () => {
    setSidebarVisible((prev) => !prev); // Đảo ngược trạng thái hiển thị của Sidebar
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
      <div className="w-full bg-bg-white px-[18px] py-5">
        <div className="mb-1 mr-[66px] flex flex-col gap-[42px] md:mr-0">
          <HeaderAdmin toggleSidebar={toggleSidebar} /> {/* Truyền hàm toggleSidebar xuống HeaderAdmin */}
          <div className="flex items-start">
            {isSidebarVisible && <Sidebar1 />} {/* Hiển thị Sidebar nếu isSidebarVisible là true */}
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
      </div>
    </>
  );
}