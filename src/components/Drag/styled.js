import styled from "styled-components";


export const Box = styled.span`
  line-height: 0.8;
  cursor:${props => (!props.BL && !props.BR && !props.TR && !props.TL) ? 'move' : 'not-allowed'} ;
  position: absolute;
  box-shadow: 0px 0px 3px #00000033;
  border: 3px solid #5690ff;
  font-family: ${(props) => `${props.font}`};
  font-size: ${(props) => `${props.size}px`};
  color: ${(props) => `${props.color}`};
  font-weight: 900;
 
  
  top: ${(props) =>
    props.TR || props.TL ? "130px" : "350px"};
  left: ${(props) =>
      props.TL || props.BL ? "377px"  :  "800px"};

margin-top: ${props => (props.BL || props.BR) ? `${220-props.size*80/100}px` : '0'};
margin-left: ${props => props.TR || props.BR ? `${670-((props.size*2.6)*(props.logo.length+2)/6.7)}px`  : '0'};




  @media (max-width: 768px) {
    top: ${(props) =>
      props.TR || props.TL
        ? "110px"
       : "250px"};
    left: ${(props) =>
       props.TL || props.BL ? "10px" : "100px"};

margin-top: ${props => props.BL || props.BR ? `${140-props.size*80/100}px` : '0px'};
margin-left: ${props => props.TR || props.BR? `${350-((props.size*2.6)*(props.logo.length+2)/7.2)}px` : '0px'};
 
   
  }
`;
export const Dot1 = styled.div`
  float: left;
  height: 10px;
  width: 10px;
  background-color: #5690ff;
  border-radius: 50%;
  transform: translate(-8px, -3px);
  position: inherit;
  border: 1px #ffffff solid;
  cursor: zoom-in;
`;
export const Dot2 = styled.div`
  float: right;
  height: 10px;
  width: 10px;
  background-color: #5690ff;
  border-radius: 50%;
  transform: translate(8px, -8px);
  cursor: zoom-out;
  border: 1px #ffffff solid;
`;

export const Dot3 = styled.div`
  right: -0%;
  height: 10px;
  width: 10px;
  background-color: #5690ff;
  border-radius: 50%;
  transform: translate(8px, -3px);
  position: absolute;
  border: 1px #ffffff solid;
  cursor: zoom-in;
`;

export const Dot4 = styled.div`
  float: left;
  height: 10px;
  width: 10px;
  background-color: #5690ff;
  border-radius: 50%;
  transform: translate(-8px, -8px);
  border: 1px #ffffff solid;
  cursor: zoom-out;
`;
