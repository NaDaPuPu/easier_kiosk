import React from "react";
import { HashRouter, Route } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home";
import Order from "./routes/Order";
import Payment from "./routes/Payment";
import SubPayment from "./routes/SubPayment";
import End from "./routes/End";
import Header from "./layouts/Header/Header";

function App() {
  return (
    <HashRouter>
      <Header />
      <Route path="/" component={Home} exact={true} />
      <Route path="/Order/:foodname" component={Order} />
      <Route exact path="/Payment/main" component={Payment} />
      <Route path="/Payment/:paymentType" component={SubPayment} />
      <Route path="/End" component={End} />
    </HashRouter>
  );
}

export default App;
