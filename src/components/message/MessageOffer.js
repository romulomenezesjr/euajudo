import React, { useState } from "react";
import FacebookButton from "../login/FacebookButton";
import axios from "axios";
export default function MessageOffer() {
  function handleGps() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        let url = `https://geocode.xyz/${pos.coords.latitude},${pos.coords.longitude}?json=1`;
        axios.get(url).then((res) => {
          console.log(res);
          setLocalizacao({
            value: `${res.data.staddress}, ${res.data.city} (${res.data.state})`,
          });
          setUser({
            isLoggedIn: user.isLoggedIn,
            userId: user.userId,
            name: user.name,
            email: user.email,
            picture: user.picture,
            lat: pos.coords.latitude,
            long: pos.coords.longitude,
            state: res.data.state,
            city: res.data.city,
            staddress: res.data.staddress,
            stnumber: res.data.stnumber,
            prov: res.data.prov,
          });
        });
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  const [localizacao, setLocalizacao] = useState({
    value: "",
  });

  const [user, setUser] = useState({
    isLoggedIn: false,
    userId: "",
    name: "",
    email: "",
    picture: "",
    lat: 0,
    long: 0,
    state: "",
    city: "",
    staddress: "",
    stnumber: "",
    prov: "",
  });

  let facebookLogin = (
    <>
      <img
        className="image-profile-large"
        src={require("../../images/avatar-1-300x300.png")}
        alt="Facebook Profile Pic"
      ></img>
      <FacebookButton setUser={setUser}></FacebookButton>
    </>
  );
  let facebookPic = (
    <img className="image-profile-large" src={user.picture} alt="Profile" />
  );

  let content = user.isLoggedIn ? facebookPic : facebookLogin;

  return (
    <div className="MessageDetail">
      <div className="col-sm-12 mx-auto">
        <div className="border-card">
          <div className="card-header"> Descreva seu pedido:</div>
          <div className="card-body">
            <p className="card-text"> </p>
            <form className="form-group">
              <div className="row">
                <div className="col-sm-4 text-center">{content}</div>
                <div className="col-sm-8">
                  <div>
                    <div className="form-group row">
                      <label htmlFor="nome" className="col-md-6">
                        Qual seu nome?
                      </label>
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="nome"
                          defaultValue={user.name}
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
                          placeholder="Número para contato"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="input-group mb-3 col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="gps"
                          placeholder="Localização"
                          defaultValue={localizacao.value}
                          required
                        />
                        <span className="input-group-append">
                          <button
                            type="button"
                            className="btn btn-warning "
                            onClick={handleGps}
                          >
                            Habilitar Localização
                          </button>
                        </span>
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
