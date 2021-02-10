import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPicPositionLeft, setPicPositionTop } from "../../../redux/reducer";
import usePosition from "../../customHook";
import picture from "../Box/pictures/picture.png";
import * as Styled from "./styled";

export const Image = ({ firstPage }) => {
  const done = useSelector((state) => state.contentPage.done);
  const myRef = useRef(null);
  const { LEFT, TOP } = usePosition(myRef);
  const dispatch = useDispatch();

  useEffect(() => {
    if (done) {
      dispatch(setPicPositionLeft(LEFT));
      dispatch(setPicPositionTop(TOP));
    }
  }, [done, LEFT, TOP]);

  return (
    <Styled.Picture
      ref={myRef}
      src={picture}
      firstPage={firstPage}
    ></Styled.Picture>
  );
};
