import React from "react";
import MessageItem from "./MessageItem.js";

const MessageList = (props) => {
  return (
    <div className="MessageList">
      <ul>
        {props.messages.map((m) => {
          return <MessageItem key={m.id} message={m} />;
        })}
      </ul>
    </div>
  );
};
export default MessageList;
