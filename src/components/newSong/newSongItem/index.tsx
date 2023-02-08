import React from "react";

interface NewSongItemProps {
  name: string;
  singer: string;
  publishDate: string;
}

const NewSongItem = ({ name, singer, publishDate }: NewSongItemProps) => {
  return (
    <div className="list__new-song__item rounded-[4px] ">
      <div className="list__new-song__item-bg bg-slate-50/10 flex items-center pl-[33px]">
        <img
          src={require("../../../assets/img/Vector.png")}
          alt=""
          className="w-[16px] my-[auto] "
        />
        <button className="dots__menu">
          <img
            src={require("../../../assets/img/dots.png")}
            alt=""
            className="w-[16px] m-[auto] "
          />
        </button>
      </div>
      <div className="p-[10px] flex">
        <div className="mr-[10px]">
          <img
            src={require("../../../assets/img/avtSong.webp")}
            alt=""
            className="rounded-[4px] max-h-[60px] min-h-[60px] min-w-[60px]"
          />
        </div>
        <div>
          <h4 className="name__new-song__item text-[14px] text-white-color leading-[14px]">
            Con Chưa Kịp Nói (OST Vong Nhi)
          </h4>
          <p className="text-[12px] text-[#ccc] mt-[3px] leading-[14px]">
            Hoài Lâm
          </p>
          <p className="text-[12px] text-[#ccc] mt-[3px] leading-[14px]">
            6 ngày trước
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewSongItem;
