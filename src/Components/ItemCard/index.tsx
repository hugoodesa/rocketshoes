import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import styled from "styled-components";
import { ContextCarrinho } from "../../Context";
import { Produto } from "../../interfaces";
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

const CardStyled = styled(Card)`
  width: 10rem;
  margin: 2px;

  &:hover {
    background-color: #f8f8f8fd;
  }
`;

export const ItemCard = (produto: Produto, key: number) => {
  const { adicionarItemCarrinho } = useContext(ContextCarrinho);

  return (
    <CardStyled>
      <Card.Img variant='top' src={produto.image} />
      <BodyCard>
        <TitleStyled>{produto.title}</TitleStyled>
        <PriceStyled>R$ {produto.price}</PriceStyled>
      </BodyCard>
      <ButtonStyled
        onClick={() => {
          if (adicionarItemCarrinho) adicionarItemCarrinho(produto);
        }}
      >
        <PlusCircle />
        Adicionar ao Carrinho
      </ButtonStyled>
    </CardStyled>
  );
};
