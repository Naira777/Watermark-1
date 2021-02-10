import styled from "styled-components";

export const Box = styled.div`
  padding-top: 20px;
  border-right: 0.1rem #eff3ff solid;
  border-bottom: 0.1rem #eff3ff solid;
  padding-bottom: 25px;
`;

export const Logo = styled.div`

  width: 280px;
  height: 70px;
 // overflow: hidden;
  font-family: ${(props) => `${props.font}`};
  font-size: ${(props) => `${props.size}px`};
  color: ${(props) => `${props.color}`};
  opacity: 0.6;
  align-self: center;
  text-align: center;
  font-weight: 700;
  line-height: 0.8;
  padding-top: 10px;

  @media (max-width: 768px) {
    width: 115px;
    height: 80px;
    padding-top: 20px;
  
  
  }
`;

export const TiledBox = styled.div`
padding-top: 10px;
padding-left: 28px;
  display: flex;
  flex-diraction: space-between;
  flex-wrap: wrap;
  width: 1200px;
  height: 475px;
 position: absolute;
 overflow: hidden;

  @media (max-width: 768px) {
    width: 480px;
    height: 335px;
    padding-top: 40px;
    position: absolute;
    padding-left:  15px;
   
   
  }
`;
