import { EventEmitter } from "events";
import Dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";
const CHANGE_EVENT = "change";
let _messages = [];
let _selectedMessage = { id: 0 };
let user = { id: 0 };
class MessageStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getMessages() {
    return _messages;
  }

  selectMessage(message) {
    _selectedMessage = message;
  }
  getSelectedMessage() {
    return _selectedMessage;
  }

  getUser() {
    return user;
  }

  setUser(u) {
    user = u;
  }
}
const store = new MessageStore();
Dispatcher.register((action) => {
  switch (action.actionType) {
    case actionTypes.CREATE_MESSAGE:
      _messages.push(action.message);
      _selectedMessage = action.message;
      //store.emiteChange();
      break;
    case actionTypes.SELECT_MESSAGE:
      _selectedMessage = action.message;
      store.emitChange();
      break;
    case actionTypes.LOAD_MESSAGES:
      _messages = action.messages;
      store.emitChange();
      break;
    case actionTypes.DELETE_MESSAGE:
      _messages = _messages.filter((m) => m.id !== parseInt(action.id, 10));
      store.emitChange();
      break;
    default:
      break;
  }
});
export default store;
