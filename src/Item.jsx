import { Rate } from "antd";
import flower1 from "/flower1.png";
import flower2 from "/flower2.png";
import {
  SearchOutlined,
  FacebookOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  JavaScriptOutlined,
} from "@ant-design/icons";
import bigFlower from "/bigFlower.png";
import like from "/like.png";
// import { Component } from "react";

// class CarouselFlower extends Component {
//   constructor() {
//     super();
//   }

//   render() {
//     return <div></div>;
//   }
// }

const Navbar = () => {
  return (
    <div className="w-4/5 h-[450px] m-auto mt-6 flex justify-between gap-[52px]">
      <div className="flex-1 flex gap-[29px]">
        <div className="w-[100px] h-full flex flex-col gap-[16px]">
          <div className="flex-1 bg-gradient-to-r from-slate-50 to-slate-100">
            <img src={flower1} alt="no img flower" className="cursor-pointer" />
          </div>
          <div className="flex-1 bg-gradient-to-r from-slate-50 to-slate-100">
            <img src={flower2} alt="no img flower" className="cursor-pointer" />
          </div>
          <div className="flex-1 bg-gradient-to-r from-slate-50 to-slate-100">
            <img src={flower1} alt="no img flower" className="cursor-pointer" />
          </div>
          <div className="flex-1 bg-gradient-to-r from-slate-50 to-slate-100">
            <img src={flower2} alt="no img flower" className="cursor-pointer" />
          </div>
        </div>
        <div className="w-[444px] h-full bg-gradient-to-r from-slate-50 to-slate-100">
          <SearchOutlined className="flex items-end justify-end m-[20px]" />

          <img
            src={bigFlower}
            alt="no img bigFlower"
            className="relative top-[-25px] left-[25px] cursor-pointer"
          />
        </div>
      </div>
      <div className="flex-1">
        <h1 className="font-sans font-bold text-3xl">Barberton Daisy</h1>
        <div className="w-full h-[50px] border-b mt-[14px] flex justify-between">
          <div className="w-[87px] flex items-center text-left">
            <h1 className="font-sans font-bold text-xl text-green-700">
              $119.00
            </h1>
          </div>
          <div className="w-auto flex items-center justify-center gap-[11px]">
            <Rate />
            <p className="font-sans text-sm font-normal w-[145px]">
              19 Customer Review
            </p>
          </div>
        </div>
        <h2 className="font-sans font-medium text-base mt-2">
          Short Description:
        </h2>
        <p className="font-sans font-normal text-sm w-[573px] h-[66px] text-left mt-2 text-gray-500 ">
          The ceramic cylinder planters come with a wooden stand to help elevate
          your plants off the ground. The ceramic cylinder planters come with a
          wooden stand to help elevate your plants off the ground.
        </p>
        <h2 className="font-sans font-medium text-base">Size:</h2>
        <div className="inline-block w-[160px] h-[40px] mt-2 flex gap-[10px] items-center">
          <div className="w-[30px] h-[30px] border rounded-full flex items-center justify-center hover:border-green-700 hover:text-green-700">
            S
          </div>
          <div className="w-[30px] h-[30px] border rounded-full flex items-center justify-center hover:border-green-700 hover:text-green-700">
            M
          </div>
          <div className="w-[30px] h-[30px] border rounded-full flex items-center justify-center hover:border-green-700 hover:text-green-700">
            L
          </div>
          <div className="w-[30px] h-[30px] border rounded-full flex items-center justify-center hover:border-green-700 hover:text-green-700">
            XL
          </div>
        </div>
        <div className="w-full h-[40px] mt-3 flex gap-[26px]">
          <div className="w-[120px] h-full flex gap-[20px]">
            <div className="w-[33px] h-[38px] bg-green-600 rounded-[29px] flex items-center justify-center">
              <p className="text-white text-normal text-2xl">-</p>
            </div>
            <div className="flex items-center justify-center">1</div>
            <div className="w-[33px] h-[38px] bg-green-600 rounded-[29px] flex items-center justify-center">
              <p className="text-white text-normal text-2xl">+</p>
            </div>
          </div>
          <div className="w-[320px] h-full flex gap-[10px]">
            <div className="w-[130px] h-[40px] bg-green-600 rounded-[6px] border-[1px] flex items-center justify-center">
              <p className="font-sans font-bold text-sm text-white">BUY NOW</p>
            </div>
            <div className="w-[130px] h-[40px] rounded-[6px] border-[1px] border-emerald-600 flex items-center justify-center">
              <p className="font-sans font-bold text-sm text-green-600">
                ADD TO CARD
              </p>
            </div>
            <div className="w-[40px] h-[40px] rounded-[6px] border-emerald-600 flex items-center justify-center border-[1px]">
              <img src={like} alt="no img like" />
            </div>
          </div>
        </div>
        <p className="font-sans text-sm font-normal text-gray-600 mt-[10px]">
          <span className="opacity-60">SKU: </span>1995751877966
        </p>
        <p className="font-sans text-sm font-normal text-gray-600 mt-[10px]">
          <span className="opacity-60">Categories:</span> Potter Plants
        </p>
        <p className="font-sans text-sm font-normal text-gray-600 mt-[10px]">
          <span className="opacity-60">Tags:</span> Home, Garden, Plants
        </p>
        <div className="w-[400px] h-[20px] mt-[10px] flex gap-[12px]">
          <div className="w-[145px] h-full">
            <p className="font-sans font-medium text-base text-gray-800">
              Share this products:
            </p>
          </div>
          <div className="w-[200px] h-full flex gap-[12px] items-center mt-[3px]">
            <FacebookOutlined />
            <TwitterOutlined />
            <LinkedinOutlined />
            <JavaScriptOutlined />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Navbar };
