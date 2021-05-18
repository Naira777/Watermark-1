import styled from "styled-components";

export const Box = styled.div`
  padding-top: 20px;
  border-bottom: 0.1rem #eff3ff solid;
  padding-bottom: 25px;
  //z-index: -1;

  @media (max-width: 768px) {
    border-right: 0px;
    padding-bottom: 0px;
    padding-top: 0px;

    border-bottom: 0px;
    margin-left: 170px;
    margin-bottom: 10px;
  }
`;
export const Box1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const TextS = styled.div`
  color: #7683a8;
  font-size: 14px;
  font: normal normal medium 12px/15px Montserrat;
  margin-left: 10px;
  margin-right: 10px;
  opacity: ${(props) => (!props.mode ? "1" : "0.4")};
  font-weight: 500;
`;
export const TextT = styled.div`
  color: #7683a8;
  font-size: 14px;
  font: normal normal medium 12px/15px Montserrat;
  margin-left: 10px;
  margin-right: 10px;
  opacity: ${(props) => (!props.mode ? "0.4" : "1")};
  font-weight: 500;
`;

export const TextHeader = styled.p`
  font-size: 12px;
  font: normal normal medium 12px/15px Montserrat;
  color: #7683a8;
  opacity: 1;
  text-align: center;
  font-weight: 500;
`;
export const SwitchBox = styled.div``;
