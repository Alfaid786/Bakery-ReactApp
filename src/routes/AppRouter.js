import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../components/Header/Header.components";
import HomePage from "../pages/HomePage/HomePage.components";
import ProductPage from "../pages/ProductPage/ProductPage.components";
import ShopPage from "../pages/ShopPage/ShopPage.components";
// npm install react-router-dom

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact={true} component={HomePage} />
        <Route path="/account" component={ShopPage} />
        <Route path="/contact" component={ShopPage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/baked" component={ProductPage} />
        <Route path="/cakes" component={ProductPage} />
        <Route path="/cookies" component={ProductPage} />
        <Route path="/brownies" component={ProductPage} />
        <Route path="/cupcakes" component={ProductPage} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
