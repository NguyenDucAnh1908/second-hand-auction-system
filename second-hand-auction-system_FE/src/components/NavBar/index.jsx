import {SelectBox} from "../SelectBox/index.jsx";
import {Img} from "../Img/index.jsx";
import {Text} from "../Text/index.jsx";
import { Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import React from "react";
const dropDownOptions = [
    {
        label: "Option1",
        value: "option1",
        subItems: [
            { label: "SubOption 1-1", value: "subOption1-1" },
            { label: "SubOption 1-2", value: "subOption1-2" },
        ],
    },
    {
        label: "Option2",
        value: "option2",
        subItems: [
            { label: "SubOption 2-1", value: "subOption2-1" },
            { label: "SubOption 2-2", value: "subOption2-2" },
        ],
    },
    { label: "Option3", value: "option3" },
];


// Tạo menu từ các options và sub-options
const createMenu = (options) => {
    return (
        <Menu>
            {options.map(option => (
                option.subItems ? (
                    <Menu.SubMenu key={option.value} title={option.label}>
                        {option.subItems.map(subItem => (
                            <Menu.Item key={subItem.value}>
                                {subItem.label}
                            </Menu.Item>
                        ))}
                    </Menu.SubMenu>
                ) : (
                    <Menu.Item key={option.value}>
                        {option.label}
                    </Menu.Item>
                )
            ))}
        </Menu>
    );
};
const NavBar = () => {
    return (
        <div className="container-xs mt-1.5 flex flex-col items-start md:px-5">
            <div className="flex w-[62%] items-start justify-between gap-5 md:w-full md:flex-col">
                {/* Sử dụng Dropdown thay vì SelectBox */}
                <Dropdown overlay={createMenu(dropDownOptions)} trigger={['click']}>
                    <a onClick={e => e.preventDefault()} className="w-[38%] bg-green-a700 py-[18px] pl-[22px] pr-8 text-[16px] font-semibold text-bg-white flex items-center justify-between">
                        Danh mục <DownOutlined />
                    </a>
                </Dropdown>
                <ul className="!mt-3.5 flex flex-wrap gap-[66px] md:gap-5">
                    <li>
                        <a href="#">
                            <Text className="text-[16px] font-medium text-blue_gray-900_01">Trang chủ</Text>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <Text className="text-[16px] font-medium text-blue_gray-900_01">Sản phẩm</Text>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <Text className="text-[16px] font-medium text-blue_gray-900_01">Liên hệ</Text>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <Text className="text-[16px] font-medium text-blue_gray-900_01">Bài viết</Text>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default NavBar;