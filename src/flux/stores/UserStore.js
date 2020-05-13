import { EventEmitter } from "events";
import Dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";
const CHANGE_EVENT = "change";

let user = { id: 0, name: "" };

class UserStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getUser() {
    return user;
  }

  setUser(u) {
    user = u;
  }
}
const userStore = new UserStore();

Dispatcher.register((action) => {
  switch (action.actionType) {
    case actionTypes.SET_USER:
      user = action.user;
      userStore.emiteChange();
      break;

    default:
      break;
  }
});
export default userStore;
