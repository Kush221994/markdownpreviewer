import React from "react";
import ReactMarkdown from "react-markdown";
const Previewer = ({ value }) => {
  return (
    <>
      <div className="preview">
        <ReactMarkdown>{value}</ReactMarkdown>
      </div>
    </>
  );
};

export default Previewer;
