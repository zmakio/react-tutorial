import React from "react";
import ReactDOM from "react-dom";

import ColorfulMsg from "./components/ColorfulMsg";
import CountButton from "./components/CountButton";

const App = () => {
  return (
    <>
      <h2>Reactハンズオン！</h2>
      <ColorfulMsg color="blue">Reactは難しくないよー</ColorfulMsg>
      <ColorfulMsg color="green">Vewは難しくないよー</ColorfulMsg>
      <ColorfulMsg color="red">Angularは、、、</ColorfulMsg>
      <CountButton />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
