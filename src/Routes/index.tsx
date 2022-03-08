import React from "react";
import { Route, Routes } from "react-router-dom";
import { Cart } from "../Components/Cart";
import { CartComponent } from "../Components/CartComponent";
import { ListProducts } from "../Components/Products";

export const RoutesComponent = () => {
  return (
    <Routes>
      <Route path={"/"} element={<ListProducts />} />
      <Route path={"/carrinho"} element={<Cart />} />
    </Routes>
  );
};
