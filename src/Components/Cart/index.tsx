import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { ContextCarrinho } from "../../Context/index";
import { CartComponent } from "../CartComponent";
import { CardTotal } from "./cardTotal";

export const Cart: React.FC = () => {
  const ContainerCart = styled.div`
    display: flex;
    width: 100%;
  `;

  const { carrinho } = useContext(ContextCarrinho);

  return (
    <ContainerCart>
      <CartComponent />
      <CardTotal />
    </ContainerCart>
  );
};
