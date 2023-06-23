import styled from "styled-components";

export const TableBc = styled.div`
  height: 100vh;
  background: #fbfbfd;
`;
export const TableBox = styled.div`
  max-width: 1140px;
  height: 100vh;
  background: #fbfbfd;
  margin: 0 auto;
  padding: 80px 0 80px;
`;
export const TableCard = styled.div`
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #000;
  width: 100%;
  background: rgb(241 241 241);
`;
export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ContractBox = styled.div`
  display: flex;
  align-items: center;
`;
export const ContractText = styled.div`
  width: 100px;
`;
export const HCandLPM = styled.div`
  display: flex;
  flex-direction: column;
  .HC {
    font-size: 16px;
  }
  .LPM {
    font-size: 14px;
    color: #999;
  }
`;
export const ProgressBox = styled.div`
  display: flex;
  flex-direction: column;

  .ProgressNum {
    text-align: center;
  }
`;
