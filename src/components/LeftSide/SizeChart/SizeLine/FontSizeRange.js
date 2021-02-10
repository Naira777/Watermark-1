import React, { useEffect, useState } from 'react';
import * as Styled from './styled';
import MySlider from '../../SizeChart/MySlider/MySlider';
import { useDispatch, useSelector } from "react-redux";
import { setSize } from '../../../../redux/reducer';



const FontSizeRange = () => {
 
   
    const size = useSelector(state => state.contentPage.size);
    const [currentSize, setCurrentSize] = useState(size);  
    const dispatch = useDispatch();

useEffect(() => {

dispatch(setSize(currentSize));


}, [currentSize])


const handleSlider = (value) => {

 setCurrentSize(value);
  
}


return (
<Styled.Box>
   <Styled.Text> Size </Styled.Text> 

<Styled.Slider>
<MySlider   defaultValue={30} onChange={handleSlider}  />
</Styled.Slider>

</Styled.Box>
) 

}

export default FontSizeRange;