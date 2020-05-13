import dispatcher from "../appDispatcher";
import actionType from "./actionTypes";

function setUser(user) {
  dispatcher.dispatch({
    actionType: actionType.SET_USER,
    messages,
  });
}

module.exports = {
  setUser,
};
