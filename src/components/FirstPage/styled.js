import styled from "styled-components";

export const AppWrapper = styled.div`
  display: grid;
  height: 100vh;
  width: 100vw;
  grid-template-areas:
    "header"
    "content"
    "footer";

grid-template-rows: 15% 70% 15%;


  @media (max-width: 768px) {
    background: #eef5ff;
  }
`;

export const AppWrapperHeader = styled.div`
  grid-area: "header";
  background: #f7fcfd;
  border-radius: 0px 0px 9px 9px;
  border-bottom: 0.1rem #f3f3f3 solid;
 padding-top: 35px;

  @media (max-width: 768px) {
    background: #ffffff;
    border-bottom: none;
    box-shadow: 0px 6px 12px #0052e01a;
  }
`;

export const TextH = styled.div`
  font: Montserrat;
  color: #464463;
  text-align: center;
  opacity: 1;
  font-size: 25px;
  font-weight: 500;
`;

export const AppWrapperFooter = styled.div`
  grid-area: "footer";
  background: #f7fcfd;
  border-radius: 0px 0px 9px 9px;

  border-top: 0.1rem #f3f3f3 solid;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.9;
  
  @media (max-width: 768px) {
    opacity: 1;
    background: #ffffff;
    box-shadow: 12px 6px 12px #0052e01a;
    border-top: none;
  }
`;

export const AppWrapperContent = styled.div`
  grid-area: "content";
  display: flex;
  flex-direction: row;
`;

export const LogoButton = styled.div`
  background: #5690ff;
  box-shadow: 0px 3px 9px #387dff80;
  border-radius: 25px;
  opacity: 1;
  height: 45px;
  width: 280px;
  margin-top: 120px;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (max-width: 768px) {
    margin-left: 40px;
  }
`;

export const Text = styled.div`
  font: Montserrat;
  letter-spacing: 2px;
  color: #ffffff;
  font-weight: 400;
  font-size: 16px;
  align-self: center;
  
`;

/*left column */

export const Cycle = styled.div`
 background: #ffffff;
 border-radius: 50%;
 width: 14px;
 height: 14px;
 align-self: center;
 margin-right: 5px;
`;

export const Left = styled.div`
  border-right: 0.1rem #f2f4f7 solid;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 40px;
  

  @media (max-width: 768px) {
    justify-content: flex-start;
   border-right: none;
    margin-left: 70px;
   
  }
`;

export const MiddleLine = styled.div`
  border-radius: 0.1rem #f2f4f7 solid;
  font-weight: 700;
  font-size: 15px;
  opacity: 0.8;
  display: flex;
  flex-direction: row;
  align-items: space-between;
  

  @media (max-width: 768px) {
    margin-top: 40px;
    padding-left: 35px;
    margin-bottom: 40px;
  }
`;

export const TextButton = styled.div`
  background: #4f8bff;
  border-radius: 5px;
  opacity: 0.1;
  font-size: 17px;
  height: 35px;
  width: 100px;
  color: #5690ff;
  font-weight: 800;
 
 
`;

/*right column */

export const Right = styled.div`
  margin-right: 70px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Done = styled.button`
width: 104px;
height: 40px;
background:  #387DFF;
box-shadow: 0px 3px 9px #387DFF80;
border-radius: 25px;
opacity: 0.4;
margin-left: 10px;
border: none;
outline: none;
@media (max-width: 768px) {
  display: none;
`;
export const Cancel = styled.button`
  width: 104px;
  height: 40px;
  background: #f7fcfd;
  border-radius: 25px;
  opacity: 0.4;
  margin-right: 10px;
  border: none;
  outline: none;
  @media (max-width: 768px) {
    background: #ffffff;
    opacity: 1;
  }
`;

export const TextB = styled.p`
  font-size: 15px;
  text-align: left;
  font: Montserrat;
  color: ${(props) => (props.cancel ? "#387DFF" : "#ffffff")};
  text-align: center;
  margin-bottom: 4px;
`;

export const Canvas = styled.div`
  margin-left: 7px;
  margin-right: 7px;
 `;
