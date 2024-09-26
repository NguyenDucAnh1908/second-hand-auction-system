import { Helmet } from "react-helmet";
import Sidebar1 from "../../../components/Sidebar1";
import HeaderAdmin from "../../../components/HeadeAdmin";
import IncomeAndOrdersSection from "./IncomeAndOrdersSection";
import IncomeStatisticsSection from "./IncomeStatisticsSection";
import RecentOrdersSection from "./RecentOrdersSection";
import React from "react";

export default function StatisticsAdmin() {
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
          <HeaderAdmin />
          <div className="flex items-start">
            <Sidebar1 />
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



