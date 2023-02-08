import logo from "../../assets/img/logo.svg";
const SideBar = () => {
  return (
    <div className="w-[240px] bg-sideBar-color h-[100vh]">
      <div className=" w-[240px] h-[70px] flex justify-start items-center  px-[25px]">
        <img src={logo} className=" w-[120px] h-[40px]" />
      </div>
      <ul className="sidebar__menu-top">
        <li className="h-[36px] sidebar__menu-top-item active flex items-center px-[25px]">
          <img
            src={require("../../assets/img/icon1.png")}
            className="w-[20px] h-[20px] mr-[10px]"
          />
          <p className="font-bold text-[13px] text-menuText-color">Cá Nhân</p>
        </li>
        <li className="h-[36px] sidebar__menu-top-item  flex items-center px-[25px]">
          <img
            src={require("../../assets/img/icon2.png")}
            className="w-[20px] h-[20px] mr-[10px]"
          />
          <p className="font-bold text-[13px] text-menuText-color">Khám phá</p>
        </li>
        <li className="h-[36px] sidebar__menu-top-item  flex items-center px-[25px]">
          <img
            src={require("../../assets/img/icon3.png")}
            className="w-[20px] h-[20px] mr-[10px]"
          />
          <p className="font-bold text-[13px] text-menuText-color">
            #zingchart
          </p>
        </li>
        <li className="h-[36px] sidebar__menu-top-item  flex items-center px-[25px]">
          <img
            src={require("../../assets/img/icon4.png")}
            className="w-[20px] h-[20px] mr-[10px]"
          />
          <p className="font-bold text-[13px] text-menuText-color">Radio</p>
        </li>
        <li className="h-[36px] sidebar__menu-top-item  flex items-center px-[25px]">
          <img
            src={require("../../assets/img/icon5.png")}
            className="w-[20px] h-[20px] mr-[10px]"
          />
          <p className="font-bold text-[13px] text-menuText-color">Theo dõi</p>
        </li>
      </ul>
      <ul className="sidebar__menu-bottom mt-[20px]">
        <li className="h-[36px] sidebar__menu-bottom-item flex items-center px-[25px]">
          <img
            src={require("../../assets/img/icon6.png")}
            className="w-[20px] h-[20px] mr-[10px]"
          />
          <p className="font-bold text-[13px] text-menuText-color">Nhạc Mới</p>
        </li>
        <li className="h-[36px] sidebar__menu-bottom-item  flex items-center px-[25px]">
          <img
            src={require("../../assets/img/icon7.png")}
            className="w-[20px] h-[20px] mr-[10px]"
          />
          <p className="font-bold text-[13px] text-menuText-color">Thế Loại</p>
        </li>
        <li className="h-[36px] sidebar__menu-bottom-item  flex items-center px-[25px]">
          <img
            src={require("../../assets/img/icon8.png")}
            className="w-[20px] h-[20px] mr-[10px]"
          />
          <p className="font-bold text-[13px] text-menuText-color">Top 100</p>
        </li>
        <li className="h-[36px] sidebar__menu-bottom-item  flex items-center px-[25px]">
          <img
            src={require("../../assets/img/icon9.png")}
            className="w-[20px] h-[20px] mr-[10px]"
          />
          <p className="font-bold text-[13px] text-menuText-color">MV</p>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
