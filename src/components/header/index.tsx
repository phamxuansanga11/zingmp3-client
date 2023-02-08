import React from "react";
import iconArrowLeft from "../../assets/img/ArrowLeft.svg";
import iconArrowRight from "../../assets/img/ArrowRight.svg";

const Header = () => {
  return (
    <div className="h-[70px]  flex items-center justify-between">
      <div className="left flex items-center">
        <div className="flex">
          <div>
            <i>
              <img src={iconArrowLeft} alt="zingmp3" className="w-[24px]" />
            </i>
          </div>
          <div className="ml-[10px]">
            <i>
              <img src={iconArrowRight} alt="zingmp3" className="w-[24px]" />
            </i>
          </div>
        </div>
        <div className="h-[40px] flex rounded-[20px] bg-sideBar-color w-[360px] px-[14px] flex items-center ml-[20px]">
          <i className="w-[20px] h-[20px] flex">
            <img
              src={require("../../assets/img/MagnifyingGlass.png")}
              alt=""
              className="w-[100%]"
            />
          </i>
          <input
            type="text"
            placeholder="Tìm kiếm bài hát, nghệ sĩ..."
            className=" h-[40px] bg-sideBar-color ml-[7px] text-[14px] font-semibold text-white focus-visible:outline-none w-[100%]"
          />
        </div>
      </div>
      <div className="right flex items-center">
        <button className="w-[190px] rounded-[20px] bg-sideBar-color h-[40px] ml-[10px] flex items-center justify-center">
          <i>
            <img
              src={require("../../assets/img/download-for-windows.png")}
              alt=""
            />
          </i>
          <p className="text-text-purple-color font-bold text-[14px] ml-[6px]">
            Tải bản Windows
          </p>
        </button>
        <button className="w-[40px] h-[40px] rounded-[50%] bg-sideBar-color flex ml-[10px] ">
          <img
            src={require("../../assets/img/TShirt.png")}
            alt=""
            className="w-[23px] m-[auto]"
          />
        </button>
        <button className="w-[40px] h-[40px] rounded-[50%] bg-sideBar-color flex ml-[10px] ">
          <img
            src={require("../../assets/img/SketchLogo.png")}
            alt=""
            className="w-[23px] m-[auto]"
          />
        </button>
        <button className="w-[40px] h-[40px] rounded-[50%] bg-sideBar-color flex ml-[10px] ">
          <img
            src={require("../../assets/img/Gear.png")}
            alt=""
            className="w-[23px] m-[auto]"
          />
        </button>
        <button className="w-[40px] h-[40px] rounded-[50%] bg-sideBar-color flex ml-[10px] ">
          <img
            src={require("../../assets/img/defaultAvatar.jpg")}
            alt=""
            className="w-[56px] m-[auto] rounded-[50%]"
          />
        </button>
      </div>
    </div>
  );
};

export default Header;
