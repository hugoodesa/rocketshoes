import React from "react";
import styled from "styled-components";
import { Produto } from "../../interfaces";

interface SubtotalContainerProps {
  lastItem?: boolean;
}

const ContainerSubtotal = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  background-color: #6e6e6e;
  height: fit-content;
  width: 30%;
  border-radius: 2px;
  align-items: center;
  justify-content: center;
  margin: 20px;
`;

const SubtotalElement = styled.div<SubtotalContainerProps>`
  border-bottom: ${(props) =>
    props?.lastItem ? "none" : "2px solid darkgrey"};
  margin: 5px;
  display: flex;
  flex-direction: row;
  color: whitesmoke;
  width: 100%;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 2px;

  &:hover {
    background-color: #d6d3d316;
    color: #dce1e4;
    border-radius: 2px;
    height: 100%;
  }
`;

const ButtonFinishShop = styled.div`
  margin: 5px;
  display: flex;
  flex-direction: row;
  color: whitesmoke;
  width: 100%;
  justify-content: center;
  box-sizing: border-box;
  padding: 2px;
`;

interface ProdutoInterface {
  produto: Produto;
}

export const SubtotalComponent: React.FC<ProdutoInterface> = ({
  produto,
}): JSX.Element => {
  return (
    <ContainerSubtotal>
      <SubtotalElement style={{ justifyContent: "center" }} lastItem>
        <span>Subtotal</span>
      </SubtotalElement>

      <SubtotalElement>
        <span>Items</span>
        <span>{produto.quantidade}</span>
      </SubtotalElement>

      <SubtotalElement>
        <span>Subtotal</span>
        <span>R$ {Math.round(produto.price).toFixed(2)}</span>
      </SubtotalElement>

      <SubtotalElement>
        <span>Descontos</span>
        <span>R$ 0,00</span>
      </SubtotalElement>

      <SubtotalElement>
        <span>Totais</span>
        <span>R$ {Math.round(produto.price).toFixed(2)}</span>
      </SubtotalElement>

      <ButtonFinishShop>
        <button style={{ width: "100%" }} className="btn btn-primary">
          Finalizar pedido
        </button>
      </ButtonFinishShop>
    </ContainerSubtotal>
  );
};
