import React, { useContext } from "react";
import { ContainerStyled } from "../UI/index";
import styled from "styled-components";
import { ProductCartComponent } from "../ProductCartComponent/index";
import { ContextCarrinho } from "../../Context/index";

const CartCardComponent = styled(ContainerStyled)`
  height: fit-content;
  width: 80%;
  background-color: rgba(117, 190, 218, 0.025);
  border-radius: 4px;
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
`;

export const CartComponent: React.FC = () => {
  const { carrinho } = useContext(ContextCarrinho);

  const ComponentCarrinhoVazio: React.FC = () => {
    return <h4>Carrinho se encontra vazio</h4>;
  };

  return (
    <ContainerStyled>
      <CartCardComponent>
        {carrinho?.length ? (
          carrinho?.map((produto) => {
            return <ProductCartComponent key={produto.id} produto={produto} />;
          })
        ) : (
          <ComponentCarrinhoVazio />
        )}
      </CartCardComponent>
    </ContainerStyled>
  );
};
