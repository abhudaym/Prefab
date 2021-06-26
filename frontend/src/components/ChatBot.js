import React from "react";

const ChatBot = () => {
  return (
    <div>
      <iframe
        title="FaqBot"
        src="https://webchat.botframework.com/embed/azurebot-prefab?s=j_xVOv7PCXo.mRzjPsWqxhFDRMu3ykJVTnxH3v43FNticU0Pp1r_bvM"
        style={{ minWidth: "400px", width: "20%", minHeight: "500px" }}
        className="chat-popup"
      ></iframe>
    </div>
  );
};
export default ChatBot;
