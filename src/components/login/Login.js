import React from "react";
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();
  const goLogin = () => history.push("login");

  return <div></div>;
}

export default Login;
