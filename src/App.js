import React from "react";
import { HashRouter, Route } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home";
import Order from "./routes/Order";
import Payment from "./routes/Payment";
import Header from "./layouts/Header/Header";

function App() {
  return (
    <HashRouter>
      <Header />
      <Route path="/" component={Home} exact={true} />
      <Route path="/Order/:foodname" component={Order} />
      <Route path="/Payment" component={Payment} />
    </HashRouter>
  );
}

export default App;
