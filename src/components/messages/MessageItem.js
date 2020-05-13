import React from "react";
import { Link } from "react-router-dom";
import messageStore from "../../flux/stores/messageStore";
import { deleteMessage } from "../../flux/actions/MessageActions";
const MessageItem = (props) => {
  function handleClick() {
    messageStore.selectMessage(props.message);
  }

  function handleDelete() {
    deleteMessage(props.message);
  }

  const helpButton = (
    <Link
      to={`message/${props.message.id}`}
      className="btn btn-primary list__button"
      onClick={handleClick}
    >
      Eu Ajudo
    </Link>
  );

  const deleteButton = (
    <button className="btn btn-danger list__button" onClick={handleDelete}>
      Deletar
    </button>
  );

  let userId = messageStore.getUser().id;
  let actionButton =
    userId == props.message.userFbId ? deleteButton : helpButton;
  console.log(props.message.userFbId);
  return (
    <li className="MessageItem">
      <div className="list__profile  border-card">
        <div className="image-profile">
          <img src={props.message.userFbPicture} alt="Profile" />
        </div>
        <div className="list__label">
          <div className="list__label--value">{props.message.description}</div>
          <div className="list__location text-muted">
            {props.message.userFbName}@{props.message.locationDescription}
          </div>
        </div>
        {actionButton}
      </div>
    </li>
  );
};

export default MessageItem;
