import React, { ReactNode } from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";
import styled from "styled-components";
import { ReactComponent as TrashIcon } from "../Icons/trashIcon.svg";

const ContainerProduct = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 550px;
  height: 200px;
  background-color: #fafbfc4e;

  margin: 5px;
  border-radius: 5px;
  padding: 10px;
  box-sizing: border-box;
  color: #ece7e7;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 500;
`;

const Button = styled.button`
  background-color: #47acff;
  color: white;
  border: none;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  padding: 0px 8px;
  width: 5px;
  height: 15px;
  margin-right: 5px;
  font-size: 10px;
  margin: 10px;

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
  height: 60%;
  background-color: white;
  border: 1px red;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 60%;
  height: 60%;
  /* background-color: white; */
  border: 1px red;
  margin-left: 10px;
  flex-direction: column;
  align-items: flex-start;
  align-items: center;
  justify-content: center;
`;

const TrashComponent = styled.div`
  align-items: center;
  flex-direction: column;
  width: 11%;
  height: 60%;
  /* background-color: white; */
  border: 1px red;
  margin-left: 10px;
`;

const IncrementDecrementSubTotalComponent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
  height: 20%;
  /*  background-color: white; */
  border-top: 2px solid darkgrey;
`;

const TextComponent = styled.p`
  display: flex;
  flex-wrap: wrap;
  color: #19191b;
  font-weight: 600;
  width: 100%;
  height: 2%;
  font-size: 8px;
  margin-left: 10px;
`;

const CheckBox = (): JSX.Element => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        alignItems: "flex-start",
        marginLeft: "10px",
      }}
    >
      <input
        className='form-check-input mt-0'
        type='checkbox'
        value=''
        aria-label='Checkbox for following text input'
        style={{
          width: "10px",
          height: "10px",
          padding: "5px",
          marginRight: "10px",
        }}
      />
      <label
        style={{
          fontSize: "8px",
          color: "darkgray",
          display: "flex",
          alignItems: "center",
        }}
      >
        Para presente ?
      </label>
    </div>
  );
};

const QuantidadeDescricaoStyled = styled.p`
  color: darkgrey;
  font-size: 10px;
  font-weight: bold;
  margin: 10px;
  display: flex;
`;

const QuantidadeNumericaStyled = styled(QuantidadeDescricaoStyled)`
  border: 1px solid darkgrey;
  height: fit-content;
  padding: 5px;
  margin: 5px;
  border-radius: 5px;
  background-color: whitesmoke;
`;

export const ProductCartComponent: React.FC = () => {
  return (
    <>
      <ContainerProduct>
        <ImageContainer />

        <InfoContainer>
          <TextComponent>Titulo</TextComponent>
          <TextComponent>Ref: # NQQ-0144-257-41</TextComponent>
          <TextComponent>
            Vendido e entregue TextComponentor Netshoes
          </TextComponent>
          <TextComponent>Cor: Azul+Branco</TextComponent>
          <TextComponent>Tamanho: 41</TextComponent>
          <CheckBox />
        </InfoContainer>

        <TrashComponent>
          <TrashIcon />
        </TrashComponent>

        <IncrementDecrementSubTotalComponent>
          <QuantidadeDescricaoStyled>Quantidade :</QuantidadeDescricaoStyled>
          <Button>-</Button>
          <QuantidadeNumericaStyled>12</QuantidadeNumericaStyled>
          <Button>+</Button>

          <QuantidadeDescricaoStyled>Total R$0,00</QuantidadeDescricaoStyled>
        </IncrementDecrementSubTotalComponent>
      </ContainerProduct>
    </>
  );
};
