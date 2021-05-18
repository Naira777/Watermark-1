import styled from 'styled-components';

export const Box = styled.div`
height: 30px;
width: 300px;
`

export const Dot = styled.div`
height: 12px;
width: 12px;
background-color: #377DFF;
border-radius: 50%;
transform: translate(100px, -4px);  // defaultValue 50px font size
box-shadow: 0px 0px 6px #1B55D84D;
cursor: pointer;
`


export const Slider = styled.div`
margin-top: 13px;
width: 210px;
height: 3px;

// defaultValue*2 /2
background: linear-gradient(to right, #377DFF ${50}%, #0052E01A ${50}% 100%);
border-radius: 2px;

`



