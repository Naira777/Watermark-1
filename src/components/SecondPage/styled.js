import styled from "styled-components";

export const AppWrapper = styled.div`
  display: grid;
  height: 100vh;
  width: 100vw;
  grid-template-areas:
    "header"
    "content"
    "footer";

  //grid-template-rows: 100px 500px;
  grid-template-rows: 15% 70% 15%;

  @media (max-width: 768px) {
    background: #ffffff;
    grid-template-rows: 60px 430px;
//grid-template-rows: 10% 65%;
  }
`;

export const AppWrapperHeader = styled.div`
  grid-area: "header";
  background: #f7fcfd;
  border-radius: 0px 0px 9px 9px;
  text-align: center;
  padding-top: 35px;

  @media (max-width: 768px) {
    background: #ffffff;
    border-bottom: none;
    box-shadow: 0px 6px 12px #0052e01a;
    padding-top: 15px;
  }
`;
export const TextH = styled.div`
  font: Montserrat;
  color: #464463;
  text-align: center;
  font-size: 25px;
  font-weight: 500;
  @media (max-width: 768px) {
    text-align: left;
    margin-left: 150px;
    font-size: 20px;
  }
`;

export const AppWrapperFooter = styled.div`
  grid-area: "footer";
  background: #f7fcfd;
  border-radius: 0px 0px 9px 9px;
  border-top: 0.1rem #f3f3f3 solid;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    opacity: 1;
    background: #ffffff;
    box-shadow: 12px 6px 12px #0052e01a;
    border-top: none;
    justify-content: flex-start;
    width: 500px;
  }
`;

export const Done = styled.button`
  width: 104px;
  height: 40px;
  background: #387dff;
  box-shadow: 0px 3px 9px #387dff80;
  border-radius: 25px;
  opacity: 1;
  margin-left: 10px;
  border: none;
  outline: none;
  &:hover {

    box-shadow: 0px 0px 0px #387dff80;
  }
`;
export const Cancel = styled.button`
  width: 104px;
  height: 40px;
  background: #f7fcfd;
  border-radius: 25px;
  opacity: 1;
  margin-right: 10px;
  border: none;
  outline: none;
  &:hover {
    background: #f3f3f3;
  }
  @media (max-width: 768px) {
    background: #ffffff;
  }
`;
export const Text = styled.p`
  font-size: 15px;
  text-align: left;
  font: normal normal medium 14px/18px Montserrat;
  color: ${(props) => (props.cancel ? "#387DFF" : "#ffffff")};
  text-align: center;
  margin-bottom: 4px;
  letter-spacing: 0px;
`;

export const AppWrapperContent = styled.div`
  grid-area: "content";
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    height: 500px;
    background: #eef5ff;
  }
`;

/*left column */

export const Left = styled.div`

  display: flex;
  flex-direction: column;
  border-right: 0.1rem #EFF3FF solid;
   @media (max-width: 768px) {
    display: none;
  }
`;

/*right column */

export const Right = styled.div`


  @media (max-width: 768px) {
    z-index: 1;
    display: flex;
    flex-direction: column;
  }
`;

export const BoxForMobile = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    float: left;
  }
`;
export const Mode1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding-bottom: 5px;
  padding-top: 5px;
  z-index: 2;
`;

export const BoxColor = styled.div`
  display: flex;
  margin-top: 17px;
  margin-left: 40px;
`;

export const Mode2 = styled.div`
  border-bottom: 0.1rem #eff3ff solid;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const Position = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-right: 0.1rem #eff3ff solid;
    border-top: 0.1rem #eff3ff solid;

    padding-top: 10px;
    padding-bottom: 10px;
    padding-right: 10px;
    padding-left: 10px;
  }
`;

export const InnerT = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    padding-top: 15px;
    padding-bottom: 5px;
    padding-right: 48px;
    padding-left: 48px;

    background: ${(props) => (props.tiledMode ? "#EEF5FF" : "#ffffff")};
  }
`;
export const InnerF = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    padding-top: 15px;
    padding-bottom: 5px;
    padding-right: 48px;
    padding-left: 48px;

    background: ${(props) => (props.fontMode ? "#EEF5FF" : "#ffffff")};
  }
`;
export const InnerP = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    padding-top: 15px;
    padding-bottom: 5px;
    padding-right: 48px;
    padding-left: 48px;

    background: ${(props) => (props.positionMode ? "#EEF5FF" : "#ffffff")};
  }
`;

export const Footer = styled.div`
display: none;
@media (max-width: 768px) {

 display: flex;
 justify-content: flex-start;
padding-left: 120px;
margin-top: 30px;
margin-bottom: 20px;
z-index: ${(props) => (props.clickFontMobile ? "1" : "2")};
background: #ffffff;
border-top: 0.01rem #F6F7F7 solid;



`;
export const Footer1 = styled.div`

@media (max-width: 768px) {
display: none;

`;

export const TextP = styled.div`
  @media (max-width: 768px) {
    font-size: 11px;
    color: ${(props) => (props.fontMode ? "#0D2053" : "#9CA6C5")};
    color: ${(props) => (props.tiledMode ? "#0D2053" : "#9CA6C5")};

    text-align: ${(props) => (props.color ? "left" : "center")};
    margin-top: 10px;
    margin-right: ${(props) => (props.color ? "15px" : "0px")};
    font-weight: 500;
  }
`;

export const TextPP = styled.div`
  @media (max-width: 768px) {
    font-size: 11px;
    color: ${(props) => (props.positionMode ? "#0D2053" : "#9CA6C5")};
    text-align: center;
    margin-top: 10px;
    font-weight: 500;
  }
`;
export const TextPT = styled.div`
  @media (max-width: 768px) {
    font-size: 11px;
    color: ${(props) => (props.tiledMode ? "#0D2053" : "#9CA6C5")};
    text-align: center;
    margin-top: 10px;
    font-weight: 500;
  }
`;
export const TextPF = styled.div`
  @media (max-width: 768px) {
    font-size: 11px;
    color: ${(props) => (props.fontMode ? "#0D2053" : "#9CA6C5")};
    text-align: center;
    margin-top: 10px;
    font-weight: 500;
  }
`;

export const Logo = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
  }
`;
