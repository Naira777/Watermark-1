import styled from "styled-components";

export const LogoBox = styled.div`

border-bottom: 0.1rem  #EFF3FF solid;
margin-bottom: 25px;
margin-top: 15px;

@media (max-width: 768px) {
       border-bottom: 0px;    
       margin-bottom: 0px;
       margin-top: 380px;
       margin-left: 20px;
       }
    }
`;

export const TextLogo = styled.p`
  color: #7683a8;
  font-size: 11px;
  margin-left: 210px;
  opacity: 0.8;
  margin-top: 3px;

  @media (max-width: 768px) {
    display: none;
  }
`;
export const Box = styled.input`
  background: #eef5ff 0% 0% no-repeat padding-box;
  border: 2px solid #387dff;
  border-radius: 10px;
  opacity: 1;
  height: 40px;
  margin-top: 40px;
  margin-left: 30px;
  width: 300px;
  font-size: 17px;
  font-color: #0d2053;
  padding-left: 15px;
  opacity: 0.8;
  &:focus {
    outline: none;
  }
  @media (max-width: 768px) {
    background: #ffffff;
    height: 37px;
    width: 130px;
    opacity: 1;
    border: 0px;
    margin-top: 0px;
    margin-left: 0px;
    font-size: 14px;
    border-radius: 6px;
  }
`;
