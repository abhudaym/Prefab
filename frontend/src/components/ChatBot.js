import React from "react";

const ChatBot = () => {
  return (
    <div>
      <h1>Any Questions? Ask our virtual assistant!</h1>
      <iframe
        title="FaqBot"
        src="https://webchat.botframework.com/embed/CS-AzureBot?s=2A26Wkeplyc.zinVOMGd220MLufHjMFs87rPKIkMWKq7XYWi-hslvdc"
        style={{ minWidth: "400px", width: "100%", minHeight: "500px" }}
      ></iframe>
    </div>
  );
};
export default ChatBot;
