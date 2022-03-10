import React, { createContext, ReactNode, useState, useEffect } from "react";
import { Produto } from "../interfaces";
import { getStock } from "../api/index";
import { Estoque } from "../interfaces/index";

const PRODUTO_DEFAULT: Produto = {
  id: 0,
  image: "",
  price: 0,
  quantidade: 0,
  title: "",
};

const CONTEXT_DEFAULT = {
  adicionarItemCarrinho: (produto: Produto) => console.log("teste"),
  subtrairItemCarrinho: (produto: Produto) => console.log("teste"),
  excluirItemDoCarrinho: (produto: Produto) => console.log("teste"),
  calcularTotalCarrinho: () => PRODUTO_DEFAULT,
};

interface CarrinhoInterface {
  carrinho?: Produto[];
  setCarrinho?: React.Dispatch<React.SetStateAction<Produto[]>>;
  adicionarItemCarrinho: (produto: Produto) => void;
  subtrairItemCarrinho: (produto: Produto) => void;
  excluirItemDoCarrinho: (produto: Produto) => void;
  calcularTotalCarrinho: () => Produto;
}

export const ContextCarrinho =
  createContext<CarrinhoInterface>(CONTEXT_DEFAULT);

interface Props {
  children: ReactNode;
}

export const CarrinhoProvider: React.FC<Props> = ({
  children,
}): JSX.Element => {
  const [carrinho, setCarrinho] = useState<Produto[]>([]);
  const [estoque, setEstoque] = useState<Estoque[]>([]);

  useEffect(() => {
    const getProductsStock = async () => {
      const estoqueProdutos = await getStock();
      setEstoque(estoqueProdutos);
    };

    getProductsStock();
  }, []);

  const findIndexProduct = (produto: Produto): number => {
    const [produtoAdicionar] = carrinho.filter((p) => p.id === produto.id);
    const index = carrinho.indexOf(produtoAdicionar);
    return index;
  };

  const isProdutoTemEstoque = (produto: Produto): boolean => {
    let isTemEstoque: boolean = true;

    const [produtoEstoque] = estoque.filter((p) => p.id === produto.id);

    isTemEstoque = produtoEstoque.amount >= produto.quantidade + 1;

    return isTemEstoque;
  };

  const adicionarItemCarrinho = (produto: Produto) => {
    const index = findIndexProduct(produto);

    let newStateCarrinho: Produto[] = [...carrinho];

    if (index >= 0) {
      const produto: Produto = newStateCarrinho[index];

      if (!isProdutoTemEstoque(produto)) {
        return alert("Produto se encontra sem estoque");
      }

      newStateCarrinho[index] = {
        ...produto,
        quantidade: produto.quantidade + 1,
      };
      console.log(newStateCarrinho);
      setCarrinho(newStateCarrinho);
      return;
    }

    newStateCarrinho = [...newStateCarrinho, { ...produto, quantidade: 1 }];
    setCarrinho(newStateCarrinho);
    console.log(newStateCarrinho);
    return;
  };

  const subtrairItemCarrinho = (produto: Produto) => {
    let newStateCarrinho = [...carrinho];

    if (produto.quantidade === 1) {
      newStateCarrinho = newStateCarrinho.filter((p) => p.id !== produto.id);
      setCarrinho(newStateCarrinho);
      return;
    }

    if (produto.quantidade > 1) {
      const index = findIndexProduct(produto);
      newStateCarrinho = [...carrinho];
      const produtoDecrementarQuantidade: Produto = newStateCarrinho[index];

      newStateCarrinho[index] = {
        ...produtoDecrementarQuantidade,
        quantidade: produtoDecrementarQuantidade.quantidade - 1,
      };
      setCarrinho(newStateCarrinho);

      return;
    }
  };

  const excluirItemDoCarrinho = (produto: Produto) => {
    const newStateCarrinho = [...carrinho].filter((p) => p.id !== produto.id);
    setCarrinho(newStateCarrinho);
  };

  const calcularTotalCarrinho = (): Produto => {
    const acc: Produto = {
      id: 0,
      image: "",
      price: 0,
      quantidade: 0,
      title: "",
    };

    const carrinhoTotalizado = carrinho.reduce((accProduto, nextProduto) => {
      accProduto.quantidade += nextProduto.quantidade;
      accProduto.price += nextProduto.price * nextProduto.quantidade;
      console.log(accProduto);
      return accProduto;
    }, acc);

    console.log(carrinhoTotalizado);
    return carrinhoTotalizado;
  };

  return (
    <ContextCarrinho.Provider
      value={{
        carrinho,
        adicionarItemCarrinho,
        excluirItemDoCarrinho,
        subtrairItemCarrinho,
        calcularTotalCarrinho,
      }}
    >
      {children}
    </ContextCarrinho.Provider>
  );
};
