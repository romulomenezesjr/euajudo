import React from "react";
import { Link } from "react-router-dom";
export default function PageNotFound() {
  return (
    <div>
      <p> Esta página não possui nenhum conteúdo. </p>
      <Link to="/" className="btn btn-lg btn-info btn-block">
        Volte à página inicial.
      </Link>
    </div>
  );
}
