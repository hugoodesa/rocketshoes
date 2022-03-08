import React from "react";
import styled from "styled-components";

const ContainerCardtotal = styled.div`
  background-color: transparent;
  width: 40%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 40%;
  border: 1px solid red;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  margin-left: 10px;
`;

const SubTotalContainer = styled(ContainerCardtotal)`
  background-color: rgba(117, 190, 218, 0.025);
  width: 100%;
  display: flex;
  height: 300px;
  border: 1px solid red;
  border-radius: 4px;
`;

const LinhaTotal = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: row;
`;

const TitulosTotais = styled.p`
  font-size: 11px;
  width: 50%;
  color: whitesmoke;
  display: flex;
  flex-direction: row;
`;

const ValoresTotais = styled(TitulosTotais)`
  width: 20%;
  font-size: 12px;
  color: whitesmoke;
  display: flex;
  flex-direction: row;
`;

export const CardTotal: React.FC = (): JSX.Element => {
  return (
    <ContainerCardtotal>
      Resumo da compra
      <SubTotalContainer>
        <LinhaTotal>
          <TitulosTotais>
            SubTotal {1 > 2 ? `${2} itens` : "item"}
          </TitulosTotais>
          <ValoresTotais>10</ValoresTotais>
        </LinhaTotal>

        <LinhaTotal>
          <TitulosTotais>Cupom de desconto</TitulosTotais>
          <ValoresTotais>10</ValoresTotais>
        </LinhaTotal>

        <LinhaTotal>
          <TitulosTotais>Descontos</TitulosTotais>
          <ValoresTotais>R$ 0.00</ValoresTotais>
        </LinhaTotal>

        <LinhaTotal>
          <TitulosTotais>Valor Total </TitulosTotais>
          <ValoresTotais>10</ValoresTotais>
        </LinhaTotal>
      </SubTotalContainer>
    </ContainerCardtotal>
  );
};
