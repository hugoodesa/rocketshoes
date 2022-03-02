import React from "react";
import { ContainerStyled } from "../UI/index";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { ProductCartComponent } from "../ProductCartComponent/index";

const CartCardComponent = styled(ContainerStyled)`
  height: 200px;
  width: 70%;
  background-color: rgba(117, 190, 218, 0.025);
  border-radius: 2px;
  flex-wrap: wrap;
`;

export const CartComponent: React.FC = () => {
  return (
    <ContainerStyled>
      <CartCardComponent>
        <ProductCartComponent />
      </CartCardComponent>
    </ContainerStyled>
  );
};
