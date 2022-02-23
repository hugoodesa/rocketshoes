import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { ReactComponent as Logo } from "../Icons/logo.svg";
import { ReactComponent as Cart } from "../Icons/cart.svg";

export const Header: React.FC = () => {
  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand>
          <Logo /> React Bootstrap
        </Navbar.Brand>
        <Cart />
      </Container>
    </Navbar>
  );
};
