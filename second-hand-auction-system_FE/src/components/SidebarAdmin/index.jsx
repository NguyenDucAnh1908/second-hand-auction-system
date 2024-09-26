import { Img } from "..";
import React, { useState } from "react";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";

export default function SidebarAdmin({ ...props }) {
  const [collapsed, setCollapsed] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0); // State để theo dõi mục đang được chọn

  const handleMenuItemClick = (index) => {
    setActiveIndex(index); // Cập nhật mục được chọn
  };

  return (
    <Sidebar
      {...props}
      width="276px !important"
      collapsedWidth="80px !important"
      collapsed={collapsed}
      className={`${props.className} flex flex-col h-screen top-0 !sticky overflow-auto`}
    >
      <Menu
        menuItemStyles={{
          button: {
            padding: "18px",
            borderRadius: "16px", // Bo góc cho tất cả các MenuItem
            display: "flex",
            alignItems: "center",
            backgroundColor: "transparent", // Màu nền mặc định
            [`&:hover`]: { backgroundColor: "#19b269 !important" }, // Màu nền khi hover
          },
        }}
        className="w-full self-stretch"
      >
        <MenuItem
          onClick={() => handleMenuItemClick(0)} // Gọi hàm khi nhấp vào
          className={`${activeIndex === 0 ? "bg-green-500 text-white" : "text-black"}`} // Màu nền và văn bản cho mục đầu tiên
        >
          <div className="flex items-center">
            <Img src="images/img_growth_1.svg" alt="Dashboard Icon" className="h-[20px] w-[22px]" />
            <span className="ml-2">Bảng quản lý</span> {/* Văn bản hiển thị */}
          </div>
        </MenuItem>
        
        <MenuItem
          onClick={() => handleMenuItemClick(1)} // Gọi hàm khi nhấp vào
          className={`${activeIndex === 1 ? "bg-green-500 text-white" : "text-black"}`} // Màu nền và văn bản cho mục thứ hai
        >
          <div className="flex items-center">
            <Img src="images/img_growth_1.svg" alt="Products Icon" className="h-[20px] w-[22px]" />
            <span className="ml-2">Các sản phẩm</span> {/* Văn bản hiển thị */}
          </div>
        </MenuItem>
        
        <MenuItem
          onClick={() => handleMenuItemClick(2)} // Gọi hàm khi nhấp vào
          className={`${activeIndex === 2 ? "bg-green-500 text-white" : "text-black"}`} // Màu nền và văn bản cho mục thứ ba
        >
          <div className="flex items-center">
            <Img src="images/img_growth_1.svg" alt="Orders Icon" className="h-[20px] w-[22px]" />
            <span className="ml-2">Đặt hàng</span> {/* Văn bản hiển thị */}
          </div>
        </MenuItem>
        
        <MenuItem
          onClick={() => handleMenuItemClick(3)} // Gọi hàm khi nhấp vào
          className={`${activeIndex === 3 ? "bg-green-500 text-white" : "text-black"}`} // Màu nền và văn bản cho mục thứ tư
        >
          <div className="flex items-center">
            <Img src="images/img_growth_1.svg" alt="Customers Icon" className="h-[20px] w-[22px]" />
            <span className="ml-2">Khách hàng</span> {/* Văn bản hiển thị */}
          </div>
        </MenuItem>
        
        <MenuItem
          onClick={() => handleMenuItemClick(4)} // Gọi hàm khi nhấp vào
          className={`${activeIndex === 4 ? "bg-green-500 text-white" : "text-black"}`} // Màu nền và văn bản cho mục thứ năm
        >
          <div className="flex items-center">
            <Img src="images/img_growth_1.svg" alt="Categories Icon" className="h-[20px] w-[22px]" />
            <span className="ml-2">Thể loại</span> {/* Văn bản hiển thị */}
          </div>
        </MenuItem>
        
        <MenuItem
          onClick={() => handleMenuItemClick(5)} // Gọi hàm khi nhấp vào
          className={`${activeIndex === 5 ? "bg-green-500 text-white" : "text-black"}`} // Màu nền và văn bản cho mục thứ sáu
        >
          <div className="flex items-center">
            <Img src="images/img_growth_1.svg" alt="Settings Icon" className="h-[20px] w-[22px]" />
            <span className="ml-2">Cài đặt</span> {/* Văn bản hiển thị */}
          </div>
        </MenuItem>
        
        <MenuItem
          onClick={() => handleMenuItemClick(6)} // Gọi hàm khi nhấp vào
          className={`${activeIndex === 6 ? "bg-green-500 text-white" : "text-black"}`} // Màu nền và văn bản cho mục thứ bảy
        >
          <div className="flex items-center">
            <Img src="images/img_growth_1.svg" alt="Logout Icon" className="h-[20px] w-[22px]" />
            <span className="ml-2">Đăng xuất</span> {/* Văn bản hiển thị */}
          </div>
        </MenuItem>
      </Menu>
    </Sidebar>
  );
}
