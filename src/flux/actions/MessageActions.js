import dispatcher from "../appDispatcher";
import * as messageApi from "../../api/MessageApi";
import actionType from "./actionTypes";

export function loadMessages() {
  messageApi.getMessages().then((messages) => {
    dispatcher.dispatch({
      actionType: actionType.LOAD_MESSAGES,
      messages,
    });
  });
}

export function getMessage(id) {
  messageApi.getMessage(id).then((message) => {
    dispatcher.dispatch({
      actionType: actionType.SELECT_MESSAGE,
      message,
    });
  });
}

export function createMessage(m) {
  return messageApi.createMessage(m).then((_message) => {
    dispatcher.dispatch({
      actionType: actionType.CREATE_MESSAGE,
      message: _message,
    });
  });
}

export function deleteMessage(m) {
  return messageApi.deleteMessage(m).then((_message) => {
    dispatcher.dispatch({
      actionType: actionType.DELETE_MESSAGE,
      id: m.id,
    });
  });
}
