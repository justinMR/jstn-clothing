import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

//imports
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
const HatsPage = () => (
  <div>
    <h1>hats page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route path='/shop/' component={ShopPage}></Route>
        <Route path='/shop/hats' component={HatsPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
