import React from "react";

const ChatBot = () => {
  return (
    <div>
      <iframe
        title="FaqBot"
        src="https://webchat.botframework.com/embed/CS-AzureBot?s=2A26Wkeplyc.zinVOMGd220MLufHjMFs87rPKIkMWKq7XYWi-hslvdc"
        style={{ minWidth: "400px", width: "20%", minHeight: "500px" }}
        className="chat-popup"
      ></iframe>
    </div>
  );
};
export default ChatBot;
