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
    const [produtoAdicionar] = carrinho.filter((p) => p.id === produto.id);
    const index = carrinho.indexOf(produtoAdicionar);

    let newStateCarrinho: Produto[] = [...carrinho];

    console.log("index " + index);

    if (index >= 0) {
      console.log("Entrou");
      const produto: Produto = newStateCarrinho[index];
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
