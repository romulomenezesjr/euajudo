import axios from "axios";
import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "http://localhost:9090/api/";

export function getMessages() {
  return axios({
    method: "get",
    url: baseUrl + "messages",
  })
    .then(handleResponse)
    .catch(handleError);
}

export function getMessage(id) {
  return axios({
    method: "get",
    url: `${baseUrl}message/${id}`,
  })
    .then(handleResponse)
    .catch(handleError);
}

export function createMessage(m) {
  return axios({
    method: "POST",
    url: `${baseUrl}messages`,
    data: { ...m },
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteMessage(message) {
  return axios({
    method: "DELETE",
    url: `${baseUrl}message/${message.id}`,
  })
    .then(handleResponse)
    .catch(handleError);
}
