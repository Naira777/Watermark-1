import styled from 'styled-components'

export const TextButton = styled.div`
background: #F0F5F5;
border-radius: 5px;
font-size: 17px;
height: 35px;
width: 104px;
margin-right: 140px;
margin-left: 140px;
margin-bottom: 120px;
&:hover {
  box-shadow: 1px 1px 2px #497EF733;
  background: #4F8BFF;


}
@media (max-width: 768px) {

margin-right: 0px;
margin-left: 30px;
margin-bottom: 0px;
background: #E5F1EF;
}

`
export const Text = styled.p` 
color: #5690FF;
text-align: center;
margin-top: 3px;
font-size: 16px;
font-weight: 500;
${TextButton}:hover & {

  color: #ffffff;
}
`


export const Picture = styled.img` 

z-index: -1;
position: absolute;
width: ${props => (props.firstPage)? '1135px' : '1180px' };
height: 500px;
padding-top: 10px;

@media (max-width: 768px) {

width: 490px;
height: 350px;
margin-right: 40px;
padding-top: 40px;

}
`


