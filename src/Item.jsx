import { Rate } from "antd";
const Navbar = () => {
  return (
    <div className="w-4/5 h-[450px] m-auto mt-6 flex justify-between gap-[52px]">
      <div className="flex-1 flex gap-[29px]">
        <div className="w-[100px] h-full bg-gradient-to-r from-slate-50 to-slate-100">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="w-[444px] h-full bg-gradient-to-r from-slate-50 to-slate-100"></div>
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
