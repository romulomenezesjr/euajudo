import React, { useState, useEffect } from "react";
import MessageList from "./MessageList.js";
import messageStore from "../../flux/stores/messageStore";
import { loadMessages } from "../../flux/actions/MessageActions";
import KeywordsBar from "./KeywordsBar.js";

const MessagePage = () => {
  const [messages, setMessages] = useState(messageStore.getMessages());

  useEffect(() => {
    console.log("useEffect MessagePage");
    messageStore.addChangeListener(onChange);
    if (messageStore.getMessages().length === 0) {
      loadMessages();
    }
    return () => messageStore.removeChangeListener(onChange); // Clean up
  }, []);

  const onChange = () => {
    setMessages(messageStore.getMessages());
  };

  return (
    <div>
      <KeywordsBar></KeywordsBar>
      <MessageList messages={messages} />

      <div className="text-center">
        <button type="button" className="btn btn-primary">
          Carregar mais
        </button>
      </div>
    </div>
  );
};
export default MessagePage;
