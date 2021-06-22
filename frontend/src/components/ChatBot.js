import React from "react";

const ChatBot = () => {
  return (
    <div>
      <h1>FAQ</h1>
      <iframe
        src="https://webchat.botframework.com/embed/sampleBot-prefab?s=A4MgH1elwzs.MyiCW0DNkcOD4jPyldw6kMa3hacFNjVp_gRIdl7eihE"
        style={{ minWidth: "400px", width: "100%", minHeight: "500px" }}
        title="FAQ BOT"
      ></iframe>
    </div>
  );
};

export default ChatBot;
