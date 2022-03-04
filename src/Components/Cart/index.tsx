import React, { useContext, useEffect } from "react";
import { ContextCarrinho } from "../../Context/index";

export const Cart: React.FC = () => {
  const { carrinho } = useContext(ContextCarrinho);

  return <h1>Teste</h1>;
};
