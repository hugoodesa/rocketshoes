import React from "react";
import styled from "styled-components";

const ContainerProduct = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 550px;
  height: 283px;
  background-color: grey;
  margin: 5px;
  border-radius: 5px;
  padding: 10px;
`;

const ButtonIncrementDecrement = styled.button`
  background-color: #47acff;
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  padding: 10px 3px;
  width: 20px;
  margin-right: 5px;

  &:hover {
    background-color: #4099e2;
  }
`;

const QuantidadeComponent = styled.p`
  display: flex;
  padding: 10px;
  border: solid 1px lightgrey;
  border-radius: 5px;
  height: 15px;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 25%;
  height: 45%;
  background-color: white;
  border: 1px red;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 60%;
  height: 45%;
  background-color: white;
  border: 1px red;
  margin-left: 10px;
`;

const TrashComponent = styled.div`
  display: flex;
  flex-direction: column;
  width: 10%;
  height: 45%;
  background-color: white;
  border: 1px red;
  margin-left: 10px;
`;

const IncrementDecrementSubTotalComponent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 45%;
  background-color: white;
  border: 1px red;
`;

export const ProductCartComponent: React.FC = () => {
  return (
    <>
      <ContainerProduct>
        {/*  Quantidade :<ButtonIncrementDecrement>-</ButtonIncrementDecrement>
      <QuantidadeComponent>1</QuantidadeComponent>
    <ButtonIncrementDecrement>+</ButtonIncrementDecrement> */}
        <ImageContainer />
        <InfoContainer />
        <TrashComponent />
        <IncrementDecrementSubTotalComponent />
      </ContainerProduct>
    </>
  );
};
