import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Drag from "../../Drag/Drag";
import { setPositionBL, setPositionBR, setPositionTL, setPositionTR } from "../../../redux/reducer";

const ResizeBox = () => {
  const dispatch = useDispatch();

  const logo = useSelector((state) => state.contentPage.logo);
  const size = useSelector((state) => state.contentPage.size);
  const font = useSelector((state) => state.contentPage.font);
  const color = useSelector((state) => state.contentPage.color);
  const positionTL = useSelector((state) => state.contentPage.positionTL);
  const positionTR = useSelector((state) => state.contentPage.positionTR);
  const positionBL = useSelector((state) => state.contentPage.positionBL);
  const positionBR = useSelector((state) => state.contentPage.positionBR);

  const [mode, setMode] = useState(false);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    if (positionTL || positionTR || positionBL || positionBR) {
      setMode(true);
      setDragging(false);
    } 
    else {
      setMode(false);
      setDragging(true);
   
    }
  }, [positionTL, positionBL, positionBR, positionTR, mode]);
 
  
useEffect(() => {

if(dragging){

  dispatch(setPositionBL(false));
  dispatch(setPositionBR(false));
  dispatch(setPositionTR(false));
  dispatch(setPositionTL(false));

}

},[dragging])






  return (
    <>
      {" "}
      {!mode && (
        <Drag
          logo={logo}
          size={size}
          font={font}
          color={color}
          mode={mode}
        
        />
      )}
      {mode && (
        <Drag
          mode={mode}
          BL={positionBL}
          BR={positionBR}
          TL={positionTL}
          TR={positionTR}
          size={size}
          font={font}
          color={color}
          logo={logo}
        />
      )}
    </>
  );
};

export default ResizeBox;
