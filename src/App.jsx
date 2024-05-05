import "./App.css";
import Logo from "/Logo.svg";
import Search from "/search.svg";
import Shop from "/shop.svg";
import { LoginOutlined } from "@ant-design/icons";
import { Navbar, Description } from "./Item";

function App() {
  return (
    <>
      <div className=" w-[80%] h-[78px] m-auto flex items-center justify-between border-b-[1.5px] border-lime-500  border-solid ">
        <div className="">
          <img src={Logo} className=" cursor-pointer" alt="no img" />
        </div>
        <div className="flex gap-[30px] m-auto">
          <h3 className="font-sans text-base font-normal text-left relative transition-shadow ">
            Home
          </h3>
          <h3 className="font-sans text-base font-normal text-left relative transition-shadow ">
            Shop
          </h3>
          <h3 className="font-sans text-base font-normal text-left relative transition-shadow ">
            Plant Care
          </h3>
          <h3 className="font-sans text-base font-normal text-left relative transition-shadow ">
            Blogs
          </h3>
        </div>
        <div className="flex gap-[30px]">
          <img src={Search} alt="no img" className="cursor-pointer" />
          <img src={Shop} alt="no img" className="cursor-pointer" />
          <button className="w-[100px] h-[35px] rounded-md bg-lime-600 flex gap-[6px] items-center justify-center">
            <LoginOutlined className="text-gray-50" />
            <p className="text-gray-50">Login</p>
          </button>
        </div>
      </div>
      <div className=" flex items-center w-4/5 h-[50px] m-auto mt-[20px] ">
        <h1 className="font-sans font-normal text-base">
          <span className="font-sans font-bold text-base">Home</span> / Shop
        </h1>
      </div>
      <Navbar></Navbar>
      <Description></Description>
    </>
  );
}

export default App;
