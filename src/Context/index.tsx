import React, { createContext, ReactNode, useState } from "react";
import { Produto } from "../interfaces";

interface CarrinhoInterface {
  carrinho?: Produto[];
  setCarrinho?: React.Dispatch<React.SetStateAction<Produto[]>>;
  adicionarItemCarrinho?: (produto: Produto) => void;
  removerItemCarrinho?: (produto: Produto) => void;
}

export const ContextCarrinho = createContext<CarrinhoInterface>({});

interface Props {
  children: ReactNode;
}

export const CarrinhoProvider: React.FC<Props> = ({ children }) => {
  const [carrinho, setCarrinho] = useState<Produto[]>([]);

  const adicionarItemCarrinho = (produto: Produto) => {
    const newStateCarrinho = [...carrinho, produto];
    console.log(newStateCarrinho);
    setCarrinho(newStateCarrinho);
  };

  const removerItemCarrinho = (produto: Produto) => {
    let newStateCarrinho = [...carrinho];

    newStateCarrinho = newStateCarrinho.filter((p) => p.id !== produto.id);

    setCarrinho(newStateCarrinho);
  };

  return (
    <ContextCarrinho.Provider
      value={{ carrinho, adicionarItemCarrinho, removerItemCarrinho }}
    >
      {children}
    </ContextCarrinho.Provider>
  );
};
