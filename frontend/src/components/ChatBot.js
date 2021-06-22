import React from "react";

const ChatBot = () => {
  return (
    <div>
      <h1>Any Questions? Ask our virtual assistant!</h1>
      <iframe
        src="https://webchat.botframework.com/embed/sampleBot-prefab?s=2A26Wkeplyc.dSXsGOwmOryOSdjtI5wgvzA_c2QY32OqgMWorTUAPK8"
        style={{ minWidth: "400px", width: "100%", minHeight: "500px" }}
        title="FAQ BOT"
      ></iframe>
    </div>
  );
};

export default ChatBot;
