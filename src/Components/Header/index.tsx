import React, { useContext } from "react";
import { Navbar, Container } from "react-bootstrap";
import { ReactComponent as Logo } from "../Icons/logo.svg";
import { ReactComponent as Cart } from "../Icons/cart.svg";
import { Link } from "react-router-dom";
import { ContextCarrinho } from "../../Context/index";
import styled from "styled-components";

export const Header: React.FC = () => {
  const { calcularTotalCarrinho } = useContext(ContextCarrinho);

  type CarrinhoVazio = {
    vazio: boolean;
  };

  const QuantidadeItensCarrinho = styled.span<CarrinhoVazio>`
    border-radius: 5px;
    background-color: #845888;
    padding: ${(props) => (props.vazio ? "2px" : "0px")};
    margin-left: 5px;
  `;

  const RenderizarQuantidadeItems: React.FC = (): JSX.Element => {
    const quantidadeItens = calcularTotalCarrinho().quantidade;

    const isRenderizar: boolean = quantidadeItens > 0;
    const pluralOuSingular: string = quantidadeItens > 1 ? "items" : "item";
    const exibicao = `${quantidadeItens} ${pluralOuSingular}`;

    const Elemento: JSX.Element = (
      <QuantidadeItensCarrinho vazio={quantidadeItens > 0}>
        {isRenderizar && exibicao}
      </QuantidadeItensCarrinho>
    );

    return Elemento;
  };

  const IconeCarrinhoComponent: React.FC = (): JSX.Element => {
    return (
      <Link to="/carrinho" className="routerLink">
        <Cart />
        <RenderizarQuantidadeItems />
      </Link>
    );
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Link to="/" className="routerLink">
          <Navbar.Brand>
            <Logo /> React Bootstrap
          </Navbar.Brand>
        </Link>

        <IconeCarrinhoComponent />
      </Container>
    </Navbar>
  );
};
