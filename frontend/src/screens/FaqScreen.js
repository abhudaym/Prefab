import React, { useState } from "react";
import ChatBot from "../components/ChatBot";

const FaqScreen = () => {
  const [display, setDisplay] = useState("none");
  const openChat = () => {
    if (display === "block") setDisplay("none");
    else setDisplay("block");
  };
  console.log(display);
  return (
    <div>
      <div style={{ display: `${display}` }}>
        <ChatBot />
      </div>
      <button className="open-button" onClick={openChat}>
        <i className="fas fa-comments"></i>
      </button>
    </div>
  );
};

export default FaqScreen;
