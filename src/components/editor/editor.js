import React from "react";

const Editor = ({ value, edit }) => {
  return (
    <div>
      <textarea className="editor" onChange={edit}>
        {value}
      </textarea>
    </div>
  );
};

export default Editor;
