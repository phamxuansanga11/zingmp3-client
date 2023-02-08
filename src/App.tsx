import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InitialState } from "./app/slices/countSlice";
import { AppDispatch, RootState } from "./app/store";
import Header from "./components/header";
import NewSong from "./components/newSong";
import SideBar from "./components/sideBar";
import Slider from "./components/slider";

const baseURL = "http://localhost:8000/zingmp3/song";
const baseURLGetOne =
  "http://localhost:8000/zingmp3/song/63ad4a5e0e16a579c25dc9b0";

const App = () => {
  // const dispatch = useDispatch<AppDispatch>();
  // const countNumber = useSelector<RootState, InitialState>(
  //   (state) => state.counter
  // );

  // const [file, setFile] = useState<any>();
  // const [audioFile, setAudioFile] = useState<any>();
  // const [viewAudio, setViewAudio] = useState<any>();

  // const fetchApi = async (formData: FormData) => {
  //   try {
  //     const res = await axios({
  //       method: "POST",
  //       baseURL: baseURL,
  //       headers: { "Content-Type": "multipart/form-data" },
  //       data: formData,
  //     });
  //     console.log("data ne`:", res);
  //     // setViewAudio(res.data.audio);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const getSong = async () => {
  //   try {
  //     const res = await axios({
  //       method: "GET",
  //       baseURL: baseURLGetOne,
  //       headers: { "Content-Type": "multipart/form-data" },
  //       // data: formData,
  //     });
  //     console.log("data of GET:", res);
  //     setViewAudio(res.data.audio);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const handleSubmit = () => {
  //   let newData: any = {
  //     name: file.name,
  //     category: ["6385aca7adc25f8d58a016de"],
  //     time: 120,
  //     like: ["63872cfba015fd068c1fc8c5"],
  //     description: "bai ca mua thu",
  //     singer: ["6385af858e7c594aa8c3554a"],
  //   };

  //   const formData = new FormData();

  //   formData.append("song", JSON.stringify(newData));
  //   formData.append("image", file);
  //   formData.append("audio", audioFile);

  //   fetchApi(formData);
  // };

  return (
    <div className="App">
      <div className="flex">
        <SideBar />
        <div className="main__content bg-purple-primary w-[100%] px-[60px] overflow-hidden">
          <Header />
          <Slider />
          <NewSong />
        </div>
      </div>
    </div>
  );
};

export default App;
