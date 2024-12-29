import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <div>
      <CardWapper innerComponent={<TextComponent />} /> <br />
      <CardWapper innerComponent={<TextComponent2 />} />
    </div>
  );
}

function TextComponent() {
  return <div>hi there</div>;
}
function TextComponent2() {
  return <div> no hi there</div>;
}

function CardWapper({ innerComponent }) {
  return (
    <div style={{ border: "2px solid red", padding: "15px" }}>
      {innerComponent}
      {/* {props.innerComponent()} */}
    </div>
  );
}

export default App;
