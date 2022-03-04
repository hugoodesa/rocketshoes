import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { api, getProducts } from "../../api";
import { Produto } from "../../interfaces";
import { ItemCard } from "../ItemCard";

export const ListProducts = (): JSX.Element => {
  const ContainerProductsList = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  `;

  const [listaProdutos, setListaProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    const getListProducts = async () => {
      const listaProdutos = await getProducts();
      setListaProdutos(listaProdutos);
      console.log(listaProdutos);
    };
    getListProducts();
  }, []);

  return (
    <ContainerProductsList>
      {listaProdutos.map((produto) => (
        <ItemCard {...produto} key={produto.id} />
      ))}
    </ContainerProductsList>
  );
};
