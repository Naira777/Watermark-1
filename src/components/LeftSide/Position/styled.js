import styled from 'styled-components';

export const Box = styled.div`
margin-left: 15px;

@media (max-width: 768px) {
    border-right: 0px;
    border-bottom: 0px;    
   
         
       }
`

export const BoxP = styled.div`
background:${props => (props.TL || props.TR || props.BR || props.BL)? '#497EF7' : '#EFF3FF' };
border: 1px solid #D2E0FC;
border-radius: 12px;
opacity: 1;
width: 47px;
height: 47px;
margin-right: 15px;
&:hover {
    background:${props => (props.TL || props.TR || props.BR || props.BL)? '#497EF7' : '#EFF3FF' };  
    box-shadow: 0px 3px 6px #1E55D880;
border: 1px solid #497EF7;
border-radius: 10px;
border: none;
}
@media (max-width: 768px) {

    margin-right: 30px;
              
     }
`

export const BoxLineHT = styled.div`
background: ${props => (props.TL || props.TR)? '#ffffff' : '#BDCFFB' };
border-radius: 0px;
opacity: 1;
width: 27px;
height: 8px;
margin-top: 10px;
margin-left: 8px;

`

export const BoxLineHB = styled.div`
background: ${props => (props.BL || props.BR)? '#ffffff' : '#BDCFFB' };
border-radius: 0px;
opacity: 1;
width: 27px;
height: 8px;
margin-left: 8px;

`

export const BoxLineVL = styled.div`
background: ${props => (props.TL)? '#ffffff' : '#BDCFFB' };
border-radius: 0px;
opacity: 1;
width: 8px;
height: 20px;
margin-left: 8px;

`

export const BoxLineVL1 = styled.div`
background: ${props => (props.BR || props.BL)? '#ffffff' : '#BDCFFB' };
border-radius: 0px;
opacity: 1;
width: 8px;
height: 20px;
margin-left: 8px;
margin-top: 10px;

`

export const BoxLineVR = styled.div`
background: ${props => (props.TR)? '#ffffff' : '#BDCFFB' };
border-radius: 0px;
opacity: 1;
width: 8px;
height: 20px;
margin-left: 27px;

`
export const BoxLineVR1 = styled.div`
background: ${props => (props.TL || props.BR)? '#ffffff' : '#BDCFFB' };
border-radius: 0px;
opacity: 1;
width: 8px;
height: 20px;
margin-left: 27px;
margin-top: 8px;

`

export const Box1 = styled.div`
margin-left: 10px;
display: flex;
justify-content: space-around;

@media (max-width: 768px) {

  justify-content: space-between;
  margin-left: 100px;
  margin-bottom: 10px;
         
}

`

export const TextHeader = styled.p`
font-size: 12px;
font: normal normal medium 12px/15px Montserrat;
color: #7683A8;
opacity: 1;
text-align: center;
margin-top: 10px;
font-weight: 500;
@media (max-width: 768px) {
   display: none;
   
       }
`
