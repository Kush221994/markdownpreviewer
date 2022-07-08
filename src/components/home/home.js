import React, { useState } from "react";
import Editor from "../editor/editor";
import Navbar from "../navbar/navbar";
import Previewer from "../previewer/previewer";

const Home = () => {
  const [mark, setMark] = useState("Welcome");
  const editorHandler = (e) => {
    setMark(e.target.value);
  };
  return (
    <>
      <Navbar />
      <div className="home">
        <Editor value={mark} edit={editorHandler} />
        <Previewer value={mark} />
      </div>
    </>
  );
};

export default Home;

//npm i react-markdown {for installing markdown in terminal}
