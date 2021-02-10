import styled from "styled-components";

export const Box = styled.div`
  
  border-bottom: 0.1rem #eff3ff solid;
  padding-bottom: 15px;
  display: flex;

  @media (max-width: 768px) {
    border-bottom: 0px;
    margin-right: 10px;
  }
`;

export const Text = styled.p`
  color: #7683a8;
  font-size: 12px;
  opacity: 0.8;
  margin-left: 38px;
  margin-top: 24px;
  font-weight: 500;
  
`;
export const DropDown = styled.div`
position: relative;
display: inline-block;

`

export const DropBtn = styled.div`
  background: #eef5ff;
  border: 1px solid #dde3f0;
  border-radius: 10px;
  height: 40px;
  margin-top: 13px;
  margin-left: 15px;
  padding-top: 3px;
  width: 253px;
  font-size: 20px;
  font-family: ${(props) => `${props.font}`};
  padding-left: 15px;
  color: #0d2053;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
 
`;

export const DropDownContent = styled.div`

  width: 253px;
  margin-left: 15px;
  display: none;
  position: absolute;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0px 8px 10px 0px rgba(0,0,0,0.1);
  z-index: 1;

  ${DropDown}:hover & {
display: block;
  }
  }
`;





export const DropDownFont = styled.div`
 border-bottom: 0.1rem #eff3ff solid;
 padding-top: 10px;
 height: 50px;
  color: #0d2053;
   display: block;
  text-align: center;
  font-family: ${(props) => `${props.font}`};
  font-size: 20px;
  &:hover {
    border: 2px #387DFF solid;
  }

`;
export const Svg = styled.svg`
margin-top: 10px;
margin-right: 15px;

@media (max-width: 768px) {
 //margin-left: 100px;
 margin-right: 15px;
margin-top: 15px;
 
}
`;

export const Font = styled.div`
  background: #eef5ff;
  border: 1px solid #dde3f0;
  border-radius: 10px;
  height: 40px;
  margin-top: 17px;
  margin-left: 5px;

  width: 253px;
  font-size: 20px;
  font-family: ${(props) => `${props.font}`};
  padding-left: 15px;
  color: #0d2053;
  outline: none;
  @media (max-width: 768px) {
   display: flex;
   flex-direction: row;
  justify-content: space-between;
    
   }
`;

export const Options = styled.p`
  font-family: ${(props) => `${props.font}`};
  font-size: 20px;
  background-color: white;
  color: #0d2053;
`;

export const BoxFontMobile = styled.div`
display: none;
@media (max-width: 768px) {

background: #ffffff;

width: ${(props) => (props.click ? "490px" : "480px")};
height: ${(props) => (props.click ? "700px" : "200px")};
margin-top:${(props) => (props.click ? "0px" : "500px")};
box-shadow: 0px -1px 6px #387DFF33;
display: flex;
flex-direction: column;
    z-index: 2;
    position: absolute;
top: ${(props) => (props.click ? "5px" : "0px")};    
   overflow: visible;



`;

export const BoxFont = styled.div`
  width: ${(props) => (props.click ? "490px" : "470px")};
  height: 60px;
  text-align: center;
  padding-top: 7px;
  font-family: ${(props) => `${props.font}`};
  font-size: 25px;
  color: ${(props) => (props.currentFont === props.font ? "#387DFF" : "")};
  border-bottom: 0.1rem #eff3ff solid;
  border: ${(props) =>
    props.font === props.currentFont1 ? "2px #387DFF solid" : ""};
`;

export const Footer = styled.div`

 display: flex;

 width: 500px;
 height: 100px;
margin-top: 650px;
margin-bottom: 20px;
padding-left: 130px;

z-index: 2;
background: #ffffff;
border-top: 0.1rem #F6F7F7 solid;
position absolute;

`;

export const Done = styled.button`
  margin-top: 30px;
  width: 105px;
  height: 40px;
  background: #387dff;
  box-shadow: 0px 3px 9px #387dff80;
  border-radius: 25px;
  opacity: 1;
  margin-left: 10px;
  border: none;
  outline: none;
`;
export const Cancel = styled.button`
  margin-top: 30px;
  width: 105px;
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
export const TextB = styled.p`
  font-size: 15px;
  text-align: left;
  font: normal normal medium 14px/18px Montserrat;
  color: ${(props) => (props.cancel ? "#387DFF" : "#ffffff")};
  text-align: center;
  margin-bottom: 4px;
  letter-spacing: 0px;
`;
