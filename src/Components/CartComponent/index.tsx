import React from "react";
import { ContainerStyled } from "../UI/index";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { ProductCartComponent } from "../ProductCartComponent/index";

const CartCardComponent = styled(ContainerStyled)`
  height: fit-content;
  width: 60%;
  background-color: rgba(117, 190, 218, 0.025);
  border-radius: 4px;
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
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
