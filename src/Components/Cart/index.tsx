import React, { useContext, useEffect } from "react";
import { ContextCarrinho } from "../../Context/index";
import { CartComponent } from "../CartComponent/index";
import { SubtotalComponent } from "../SubtotalComponent/index";
import styled from "styled-components";

export const Cart: React.FC = () => {
  const { calcularTotalCarrinho } = useContext(ContextCarrinho);

  useEffect(() => {
    console.log(calcularTotalCarrinho());
  }, []);

  const CartContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
  `;

  return (
    <CartContainer>
      <CartComponent />
      <SubtotalComponent produto={calcularTotalCarrinho()} />
    </CartContainer>
  );
};
