import { Rate } from "antd";
import flower1 from "/flower1.png";
import flower2 from "/flower2.png";
import { SearchOutlined } from "@ant-design/icons";
import bigFlower from "/bigFlower.png";

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
          <img src={bigFlower} alt="no img bigFlower" />
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
      </div>
    </div>
  );
};

export { Navbar };
