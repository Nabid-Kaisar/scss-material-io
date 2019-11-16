import React from "react";
import ReactDOM from "react-dom";

import MatButton from "./comp/MatButton";
import MatButton2 from "./comp/MatButton2";

const Index = () => {
  return (
    <div>
      <MatButton />
      <MatButton2 />
    </div>
  );
};

ReactDOM.render(<Index />, document.querySelector("#root"));
