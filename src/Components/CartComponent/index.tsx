import React from "react";
import { ContainerStyled } from "../UI/index";
import styled from "styled-components";
import { Button } from "react-bootstrap";

const CartCardComponent = styled(ContainerStyled)`
  height: 200px;
  width: 70%;
  background-color: rgba(117, 190, 218, 0.025);
  border-radius: 2px;
`;

export const CartComponent: React.FC = () => {
  return (
    <ContainerStyled>
      <CartCardComponent>
        <Button>Finalizar Compra</Button>
      </CartCardComponent>
    </ContainerStyled>
  );
};
