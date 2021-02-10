import React, { useCallback, useEffect, useRef, useState } from "react";
import * as Styled from "./styled";
import { useDispatch, useSelector } from "react-redux";
import {
  setPositionBL,
  setPositionBR,
  setPositionTL,
  setPositionTR,
} from "../../../redux/reducer";

const Position = () => {

  const dispatch = useDispatch();

  const positionTL = useSelector((state) => state.contentPage.positionTL);
  const positionTR = useSelector((state) => state.contentPage.positionTR);
  const positionBL = useSelector((state) => state.contentPage.positionBL);
  const positionBR = useSelector((state) => state.contentPage.positionBR);

  const onClickHandlerTL = () => {
    if (!positionTL) {
      dispatch(setPositionTL(true));
      dispatch(setPositionTR(false));
      dispatch(setPositionBL(false));
      dispatch(setPositionBR(false));
    }
    else {
      dispatch(setPositionTL(false));
      dispatch(setPositionTR(false));
      dispatch(setPositionBL(false));
      dispatch(setPositionBR(false));
    }
  };

  const onClickHandlerTR = () => {
    if (!positionTR) {
      dispatch(setPositionTR(true));
      dispatch(setPositionTL(false));
      dispatch(setPositionBL(false));
      dispatch(setPositionBR(false));
    } else {
      dispatch(setPositionTR(false));
      dispatch(setPositionTL(false));
      dispatch(setPositionBL(false));
      dispatch(setPositionBR(false));
    }
  };

  const onClickHandlerBL = () => {
    if (!positionBL) {
      dispatch(setPositionBL(true));
      dispatch(setPositionTL(false));
      dispatch(setPositionTR(false));
      dispatch(setPositionBR(false));
    } else {
      dispatch(setPositionBL(false));
      dispatch(setPositionTL(false));
      dispatch(setPositionTR(false));
      dispatch(setPositionBR(false));
    }
  };

  const onClickHandlerBR = () => {
    if (!positionBR) {
      dispatch(setPositionBR(true));
      dispatch(setPositionTL(false));
      dispatch(setPositionTR(false));
      dispatch(setPositionBL(false));
    } else {
      dispatch(setPositionBR(false));
      dispatch(setPositionTL(false));
      dispatch(setPositionTR(false));
      dispatch(setPositionBL(false));
    }
  };

  return (
    <Styled.Box>
      <Styled.TextHeader>Position</Styled.TextHeader>

      <Styled.Box1>
        <Styled.BoxP onClick={onClickHandlerTL} TL={positionTL}>
          <Styled.BoxLineHT TL={positionTL}></Styled.BoxLineHT>
          <Styled.BoxLineVL TL={positionTL}> </Styled.BoxLineVL>
        </Styled.BoxP>

        <Styled.BoxP onClick={onClickHandlerTR} TR={positionTR}>
          <Styled.BoxLineHT TR={positionTR}></Styled.BoxLineHT>
          <Styled.BoxLineVR TR={positionTR}> </Styled.BoxLineVR>
        </Styled.BoxP>

        <Styled.BoxP onClick={onClickHandlerBL} BL={positionBL}>
          <Styled.BoxLineVL1 BL={positionBL}></Styled.BoxLineVL1>
          <Styled.BoxLineHB BL={positionBL}> </Styled.BoxLineHB>
        </Styled.BoxP>

        <Styled.BoxP onClick={onClickHandlerBR} BR={positionBR}>
          <Styled.BoxLineVR1 BR={positionBR}> </Styled.BoxLineVR1>
          <Styled.BoxLineHB BR={positionBR}></Styled.BoxLineHB>
        </Styled.BoxP>
      </Styled.Box1>
    </Styled.Box>
  );
};
export default Position;
