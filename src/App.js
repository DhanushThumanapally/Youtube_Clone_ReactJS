import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import SearchPage from "./SearchPage";
import { useState } from "react";
import youtube from "./api/youtube";
import dotenv from  'dotenv';
function App() {
  const [videos, setVideos] = useState([]);
  dotenv.config();
  const URI=process.env.REACT_APP_YOUTUBE_API;
  return (
    <div className="app">
      <Header FromChildToParent={fetchItems} />
      <div className="app__page">
        <Sidebar />
        <SearchPage videos={videos} />
      </div>
    </div>
  );

  async function fetchItems(input) {
    const {
      data: { items: vd },
    } = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 10,
        key: URI,
        q: input,
      },
    });
    setVideos(vd);
    console.log(input);
  }
}

export default App;
