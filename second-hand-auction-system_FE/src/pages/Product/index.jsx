import { Helmet } from "react-helmet";
import { Img, Text, Heading, Button, CheckBox, SeekBar, Input } from "../../components";
import HeaderComponent from "../../components/HeaderComponent";
import ProductDetails4 from "../../components/ProductDetails4";
import ProductDetails5 from "../../components/ProductDetails5";
import FooterBK from "../../components/FooterBK";
import Header2 from "../../components/Header2";
import ProductSection from "./ProductSection";
import React, { useState }  from "react";
import { Collapse, Checkbox, Slider, InputNumber, Row, Col} from 'antd';
const { Panel } = Collapse;

const brands = [
  { name: 'Apple', count: 87 },
  { name: 'Asus', count: 92 },
  { name: 'Acer', count: 123 },
  { name: 'Dell', count: 49 },
  { name: 'Lenovo', count: 12 },
];

export default function ProductPage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  const [priceRange, setPriceRange] = useState([1, 750]);

  const onSliderChange = (value) => {
    setPriceRange(value);
  };

  const onLowPriceChange = (value) => {
    setPriceRange([value, priceRange[1]]);
  };

  const onHighPriceChange = (value) => {
    setPriceRange([priceRange[0], value]);
  };
  // const onChange1 = (value) => {
  //   console.log('onChange: ', value);
  // };
  //
  // const onChangeComplete = (value) => {
  //   console.log('onChangeComplete: ', value);
  // };
  return (
    <>
      <Helmet>
        <title>Product Catalog - Shop the Latest in Electronics and Fashion</title>
        <meta
          name="description"
          content="Browse our Product Catalog to find the best deals on electronics, fashion, and home goods. Filter by brand, size, and color to find your perfect match."
        />
      </Helmet>
      <div className="w-full bg-bg-white">
        <div className="flex flex-col items-center">
          <Header2 />
          <div className="container-xs md:px-5">
            <div className="mr-2.5 flex items-center gap-8 md:mr-0 md:flex-col">
              <div className="flex w-[25%] flex-col gap-3.5 md:w-full -mt-[800px]">
                <div className="flex flex-col items-start gap-6">
                  <div className="flex items-center justify-between gap-5 self-stretch">
                    <Heading size="text2xl" as="h1" className="text-[18px] font-medium text-blue_gray-900_01">
                      Danh Mục
                    </Heading>
                    {/*<div className="mr-8 h-px w-[14px] bg-blue_gray-900_01"/>*/}
                  </div>

                  {/* Collapse Component for Brands */}
                  <Collapse defaultActiveKey={['1']} ghost>
                    <Panel
                        key="1"
                        header={<h2 className="text-lg font-semibold">Brand Filters</h2>}
                    >

                      <div className="flex">
                        <div className="flex w-[78%] items-center gap-[13px]">
                          <Text size="textlg" as="p"
                                className="text-[15px] font-normal leading-[30px] text-blue_gray-900_01">
                            {brands.map((brand) => (
                                <div key={brand.name} className="flex items-center gap-2">
                                  <Checkbox onChange={onChange}/>
                                  {brand.name}
                                </div>
                            ))}
                          </Text>
                        </div>
                      </div>
                    </Panel>
                  </Collapse>
                  <div className="h-px w-[72%] bg-gray-200"/>
                </div>
                <Input
                    size="sm"
                    shape="round"
                    name="Brand Search"
                    placeholder={`Tìm thương hiệu`}
                    className="w-[88%] rounded-md border border-solid border-gray-200 px-3.5 !text-blue_gray-900_01"
                />
                <div className="flex flex-col items-start gap-6">
                  <div className="flex items-center justify-between gap-5 self-stretch">
                    <h2 className="text-[18px] font-medium text-blue_gray-900_01">Giá</h2>
                    {/*<div className="mr-24 h-px w-[14px] bg-blue_gray-900_01"/>*/}
                  </div>
                  <div className="flex flex-col gap-3 self-stretch">
                    <div className="flex items-center gap-6">
                      <div className="flex w-[46%] flex-col items-start gap-1">
                        <p className="text-[15px] font-normal text-blue_gray-900_01">Thấp</p>
                        <InputNumber
                            min={1}
                            max={750}
                            value={priceRange[0]}
                            onChange={onLowPriceChange}
                            // className="self-stretch rounded-md border border-solid border-gray-200 px-3.5"
                        />
                      </div>
                      <div className="flex flex-1 flex-col items-start gap-1.5">
                        <p className="text-[15px] font-normal text-blue_gray-900_01">Cao</p>
                        <InputNumber
                            min={1}
                            max={1000}
                            value={priceRange[1]}
                            onChange={onHighPriceChange}
                            // className="w-[86%] rounded-md border border-solid border-gray-200 px-3.5"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-3">
                      <Slider
                          range
                          min={50}
                          max={1000}
                          step={10}
                          value={priceRange}
                          onChange={onSliderChange}
                          className="mr-5 flex self-stretch"
                      />
                      <p className="flex text-[14px] font-normal text-blue_gray-900_01">
                        <span>{priceRange[0]?.toLocaleString() || "0"}</span>
                        <a href="#" className="inline underline">đ</a>
                        <span>&nbsp;- {priceRange[1]?.toLocaleString() || "0"}</span>
                        <a href="#" className="inline underline">đ</a>
                      </p>
                    </div>
                  </div>
                  <div className="h-px w-[72%] bg-gray-200"/>
                </div>
                <div className="flex flex-col items-start gap-6">
                  <div className="flex items-center gap-[35px] self-stretch">
                    <Heading size="text2xl" as="h3" className="text-[18px] font-medium text-blue_gray-900_01">
                      Kích thước
                    </Heading>
                    <div className="h-px w-[14px] bg-blue_gray-900_01"/>
                  </div>
                  <div className="flex flex-col gap-2.5 self-stretch">
                    <div>
                      <div className="flex">
                        <div className="flex flex-1 items-center gap-3">
                          <div className="flex w-[8%] flex-col items-center gap-3.5">
                            <div className="h-[16px] w-[20px] rounded border border-solid border-blue_gray-900_01"/>
                            <Img src="images/img_checkmark.svg" alt="Size Checkmark" className="h-[16px] w-full"/>
                            <div className="h-[16px] w-[20px] rounded border border-solid border-blue_gray-900_01"/>
                            <div className="h-[16px] w-[20px] rounded border border-solid border-blue_gray-900_01"/>
                            <div className="h-[16px] w-[20px] rounded border border-solid border-blue_gray-900_01"/>
                          </div>
                          <Text
                              size="textlg"
                              as="p"
                              className="w-[18%] text-[15px] font-normal leading-[30px] text-blue_gray-900_01"
                          >
                            <>
                              S<br/>M<br/>L<br/>
                              XL
                              <br/>
                              XXL
                            </>
                          </Text>
                        </div>
                        <Text
                            size="texts"
                            as="p"
                            className="w-[10%] text-right text-[13px] font-normal leading-[30px] text-blue_gray-600_01"
                        >
                          <>
                            87
                            <br/>
                            92
                            <br/>
                            123
                            <br/>
                            49
                            <br/>
                            12
                          </>
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-1">
                      <Text size="textlg" as="p" className="text-[15px] font-medium text-gray-900_01">
                        Xem tất cả
                      </Text>
                      <div className="h-[2px] w-[32px] bg-gray-900_01"/>
                    </div>
                  </div>
                  <div className="h-px w-[72%] bg-gray-200"/>
                </div>
                <div className="flex flex-col gap-[26px]">
                  <div className="flex items-center justify-between gap-5">
                    <Heading size="text2xl" as="h4" className="text-[18px] font-medium text-blue_gray-900_01">
                      Màu sắc
                    </Heading>
                    <div className="mb-2 mr-20 h-px w-[14px] self-end bg-blue_gray-900_01"/>
                  </div>
                  <div className="flex flex-col items-start gap-6">
                    <Img src="images/img_inner.svg" alt="Color Image" className="h-[26px] w-[72%] object-contain"/>
                    <div className="h-px w-[72%] bg-gray-200"/>
                  </div>
                </div>
                <div className="flex flex-col gap-6">
                  <div className="flex items-center justify-between gap-5">
                    <Heading size="text2xl" as="h5" className="text-[18px] font-medium text-blue_gray-900_01">
                      Tình trạng
                    </Heading>
                    <div className="mr-[76px] h-px w-[14px] bg-blue_gray-900_01"/>
                  </div>
                  <div>
                    <div className="flex">
                      <div className="relative h-[90px] w-[64%]">
                        <CheckBox
                            size="sm"
                            name="Condition CheckBox"
                            label="New
Used
Renewed"
                            id="ConditionCheckBox"
                            className="absolute bottom-0 left-0 top-0 my-auto gap-2.5 text-left text-[15px] leading-[30px] text-blue_gray-900_01"
                        />
                        <div
                            className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col items-start gap-11">
                          <div className="h-[16px] w-[16px] rounded border border-solid border-blue_gray-900_01"/>
                          <div className="h-[16px] w-[16px] rounded border border-solid border-blue_gray-900_01"/>
                        </div>
                      </div>
                      <Text
                          size="texts"
                          as="p"
                          className="w-[8%] text-right text-[13px] font-normal leading-[30px] text-blue_gray-600_01"
                      >
                        <>
                          87
                          <br/>
                          92
                          <br/>
                          123
                        </>
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-[75%] flex-col gap-6.5 md:w-full -mt-[60px]">
                <ProductSection/>
              </div>
            </div>
          </div>


          <div className="mt-[194px] self-stretch">
            <FooterBK
                className="mt-[34px] h-[388px] bg-[url(/public/images/img_group_19979.png)] bg-cover bg-no-repeat md:h-auto"/>
          </div>
        </div>
      </div>
    </>
  );
}














