import React from "react";
import { Card, Button } from "react-bootstrap";
import styled from "styled-components";
import { ReactComponent as PlusCircle } from "../Icons/plusCircle.svg";

const TitleStyled = styled.p`
  font-weight: lighter;
  font-size: 10px;
  color: #393941c5;
`;

const PriceStyled = styled(TitleStyled)`
  font-weight: bolder;
  color: #1c1c1dc5;
`;

const ButtonStyled = styled(Button)`
  font-weight: lighter;
  height: 25px;
  font-size: 10px;
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BodyCard = styled(Card.Body)`
  padding: 5px;
`;

export const ItemCard: React.FC = () => {
  return (
    <Card style={{ width: "10rem", margin: "2px" }}>
      <Card.Img
        variant="top"
        src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg"
      />
      <BodyCard>
        <TitleStyled>
          Tênis VR Caminhada Confortável Detalhes Couro Masculino
        </TitleStyled>
        <PriceStyled>R$ 139,99</PriceStyled>
      </BodyCard>
      <ButtonStyled>
        <PlusCircle />
        Adicionar ao Carrinho
      </ButtonStyled>
    </Card>
  );
};
