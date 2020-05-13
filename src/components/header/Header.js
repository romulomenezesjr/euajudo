import React from "react";
import { Link } from "react-router-dom";
const Header = (props) => {
  return (
    <div className="curved">
      <ul
        className="nav nav-justified md-tabs indigo"
        id="myTabJust"
        role="tablist"
      >
        <li className="nav-item">
          <Link role="tab" to="/" className="nav-link ">
            Início
          </Link>
        </li>
        <li className="nav-item">
          <Link role="tab" to="request" className="nav-link ">
            Precisa de ajuda?
          </Link>
        </li>
        <li className="nav-item">
          <Link role="tab" to="offer" className="nav-link ">
            {" "}
            Pode ajudar?
          </Link>
        </li>
      </ul>

      <h1 className="text-white text-center text-uppercase title py-2">
        <Link className="header-link" to="/">
          {props.title}
        </Link>
      </h1>
      <h5 className="text-light text-center my-2">{props.message}</h5>
    </div>
  );
};
export default Header;
