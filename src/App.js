import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MessagePage from "./components/messages/MessagePage.js";
import PageNotFound from "./components/PageNotFound.js";
import AboutPage from "./components/about/AboutPage.js";
import MessageDetail from "./components/message/MessageDetail.js";
import MessageRequest from "./components/message/MessageRequest.js";
import MessageOffer from "./components/message/MessageOffer.js";
import Header from "./components/header/Header.js";

function App() {
  return (
    <BrowserRouter>
      <Header
        title="Eu Ajudo"
        message="Pessoas próximas a você podem estar precisando de ajuda. Colabore com sua comunidade."
      />

      <div className="container">
        <Switch>
          <Route exact path="/" component={MessagePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/message/:id" component={MessageDetail} />
          <Route path="/request" component={MessageRequest} />
          <Route path="/offer" component={MessageOffer} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
