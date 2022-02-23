import React from "react";
import { Card, Button } from "react-bootstrap";
import styled from "styled-components";

const TitleStyled = styled.span`
  font-weight: lighter;
  font-size: 10px;
`;

const ButtonStyled = styled(Button)`
  font-weight: lighter;
  font-size: 10px;
  height: 20px;
  font-size: 15px;
`;

export const ItemCard: React.FC = () => {
  return (
    <Card style={{ width: "10rem" }}>
      <Card.Img
        variant='top'
        src='https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg'
      />
      <Card.Body>
        <TitleStyled>
          Tênis VR Caminhada Confortável Detalhes Couro Masculino
        </TitleStyled>
        {/* <Button style={{ height: "20px", fontSize: "10px" }} variant='primary'>
          Adicionar ao Carrinho +{" "}
        </Button> */}
        <ButtonStyled>Adicionar ao Carrinho</ButtonStyled>
      </Card.Body>
    </Card>
  );
};
