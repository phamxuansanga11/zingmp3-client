import React from "react";
import NewSongItem from "./newSongItem";

const newSongData = [
  {
    name: "Độc Nhất",
    avatarNewSong:
      "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/b/5/e/6/b5e6e5e60f69b93a7ef524d43b8260d1.jpg",
    singer: ["Vũ Cát Tường"],
    publishDate: "3",
  },
  {
    name: "Vô Cực",
    avatarNewSong:
      "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/b/5/e/6/b5e6e5e60f69b93a7ef524d43b8260d1.jpg",
    singer: ["Vũ Cát Tường"],
    publishDate: "1",
  },
  {
    name: "Trèo Cao Ngã Đau (Chị Chị",
    avatarNewSong:
      "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/b/5/e/6/b5e6e5e60f69b93a7ef524d43b8260d1.jpg",
    singer: ["Minh Hằng"],
    publishDate: "1",
  },
  {
    name: "Con Chưa Kịp Nói (OST Vong Nhi)",
    avatarNewSong:
      "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/3/5/e/5/35e597eea08f582e9141dbdbcfd2714d.jpg",
    singer: ["Hoài Lâm"],
    publishDate: "1",
  },
  {
    name: "Em Là Coffee",
    avatarNewSong:
      "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/9/3/6/6/93661be618a00620a257205e17fd7d74.jpg",
    singer: ["Juky San"],
    publishDate: "1",
  },
  {
    name: "Tình Yêu Đến Sau",
    avatarNewSong:
      "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/f/8/8/4/f8847400edd1c8edfc43e1a0a7e16ddb.jpg",
    singer: ["Myra Trần", "Đức Phúc"],
    publishDate: "1",
  },
  {
    name: "Mong Một Ngày Anh Nhớ Đến Em",
    avatarNewSong:
      "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/9/f/5/6/9f56590f09e031ab524ac66458d84f27.jpg",
    singer: ["Huỳnh James", "Pjnboys"],
    publishDate: "1",
  },
  {
    name: "Người Như Chúng Ta",
    avatarNewSong:
      "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/8/7/e/c/87ec2fc954a8087a8a62346308e17b44.jpg",
    singer: ["Mr. Siro"],
    publishDate: "1",
  },
  {
    name: "Bao Lâu Chưa Về Nhà?",
    avatarNewSong:
      "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/e/d/f/0/edf07eca5aae290a3b628b3799c780c9.jpg",
    singer: ["DatKaa"],
    publishDate: "1",
  },
];

const NewSong = () => {
  return (
    <div className="new__song mt-[48px]">
      <h2 className="font-bold text-[20px] text-white-color mb-[20px]">
        Mới Phát Hành
      </h2>
      <div className="mb-[16px]">
        <button className="uppercase text-[12px] text-white-color w-[94px] h-[25px] rounded-[100px] border-[1px]  border-solid border-gray-200/20 mr-[15px]">
          Tất cả
        </button>
        <button className="uppercase text-[12px] text-white-color w-[94px] h-[25px] rounded-[100px] border-[1px] border-solid border-gray-200/20 mr-[15px]">
          Việt nam
        </button>
        <button className="uppercase text-[12px] text-white-color w-[94px] h-[25px] rounded-[100px] border-[1px] border-solid border-gray-200/20 mr-[15px]">
          Quốc tế
        </button>
      </div>
      <div className="list__new-song grid grid-cols-3 gap-x-[28px]">
        <NewSongItem name="" singer="" publishDate="" />
        <NewSongItem name="" singer="" publishDate="" />
        <NewSongItem name="" singer="" publishDate="" />
        <NewSongItem name="" singer="" publishDate="" />
        <NewSongItem name="" singer="" publishDate="" />
        <NewSongItem name="" singer="" publishDate="" />
        <NewSongItem name="" singer="" publishDate="" />
        <NewSongItem name="" singer="" publishDate="" />
        <NewSongItem name="" singer="" publishDate="" />
      </div>
    </div>
  );
};

export default NewSong;
