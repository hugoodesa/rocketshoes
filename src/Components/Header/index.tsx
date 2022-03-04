import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { ReactComponent as Logo } from "../Icons/logo.svg";
import { ReactComponent as Cart } from "../Icons/cart.svg";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <Link to='/' className='routerLink'>
          <Navbar.Brand>
            <Logo /> React Bootstrap
          </Navbar.Brand>
        </Link>

        <Link to='/carrinho' className='routerLink'>
          <Cart />
        </Link>
      </Container>
    </Navbar>
  );
};
