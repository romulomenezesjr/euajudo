import React, { useState } from "react";
import FacebookButton from "../login/FacebookButton";
import axios from "axios";
import messageStore from "../../flux/stores/messageStore";
import { createMessage } from "../../flux/actions/MessageActions";

export default function MessageRequest(props) {
  const [message, setMessage] = useState({
    facebookData: {},
    location: {},
    userName: "",
    userPicture: "",
    contactNumber: "",
    description: "",
    locationDescription: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    createMessage(message).then(() => {
      let m = messageStore.getSelectedMessage();
      props.history.push(`/`);
    });
  };

  function formIsValid() {
    const _errors = {};
    if (!message.description) _errors.title = "Title is required";
    if (!message.contactNumber) _errors.authorId = "Author is required";
    if (!message.location) _errors.category = "Category is required";
    return true;
    //setErrors(_errors);
    //return Object.keys(_errors).length === 0;
  }

  function handleGps() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        let url = `https://geocode.xyz/${pos.coords.latitude},${pos.coords.longitude}?json=1`;
        axios.get(url).then((res) => {
          const updatedMessage = {
            ...message,
            location: res,
            locationDescription: `${res.data.staddress}, ${res.data.city} (${res.data.state})`,
          };
          setMessage(updatedMessage);
        });
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  const handleChange = (event) => {
    const { target } = event;
    const updatedMessage = {
      ...message,
      [target.name]: target.value,
    };
    setMessage(updatedMessage);
  };

  let facebookLogin = (
    <>
      <img
        className="image-profile-large"
        src={require("../../images/avatar-1-300x300.png")}
        alt="Facebook Profile Pic"
      ></img>
      <FacebookButton
        message={message}
        setMessage={setMessage}
      ></FacebookButton>
    </>
  );
  let facebookPic = (
    <img
      className="image-profile-large"
      src={message.userPicture}
      alt="Profile"
    />
  );

  let content = message.facebookIn ? facebookPic : facebookLogin;

  return (
    <div className="MessageDetail">
      <div className="col-sm-12 mx-auto">
        <div className="border-card">
          <div className="card-header"> Descreva seu pedido:</div>
          <div className="card-body">
            <p className="card-text"> </p>
            <form className="form-group" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-sm-4 text-center">{content}</div>
                <div className="col-sm-8">
                  <div>
                    <div className="form-group row">
                      <label htmlFor="userName" className="col-md-6">
                        Qual seu nome?
                      </label>
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="userName"
                          name="userName"
                          onChange={handleChange}
                          value={message.userName}
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label htmlFor="description" className="col-md-6">
                        O que você está precisando?
                      </label>
                      <div className="col-sm-12">
                        <textarea
                          className="form-control"
                          id="description"
                          name="description"
                          onChange={handleChange}
                          value={message.description}
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="contactNumber"
                        className="col-sm-12 col-form-label"
                      >
                        Número para Contato (WhatsApp)
                      </label>
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="contactNumber"
                          name="contactNumber"
                          placeholder="Número para contato"
                          onChange={handleChange}
                          value={message.contactNumber}
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="input-group mb-3 col-sm-12">
                        <span className="input-group-append">
                          <button
                            type="button"
                            className="btn btn-warning "
                            onClick={handleGps}
                          >
                            Buscar Localização
                          </button>
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          id="locationDescription"
                          name="locationDescription"
                          placeholder="Cidade/Estado"
                          onChange={handleChange}
                          value={message.locationDescription}
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center my-5">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg btn-block"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
