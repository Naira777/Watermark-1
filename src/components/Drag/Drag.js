import React, { useCallback, useEffect, useRef, useState } from "react";
import * as Styled from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { setDone, setPosition, setSize } from "../../redux/reducer";
import usePosition from "../customHook";

const Drag = ({ BL, BR, TL, TR }) => {
  const matches = window.matchMedia("(max-width: 768px)").matches;
  const done = useSelector((state) => state.contentPage.done);
  const size = useSelector((state) => state.contentPage.size);
  const font = useSelector((state) => state.contentPage.font);
  const logo = useSelector((state) => state.contentPage.logo);
  const color = useSelector((state) => state.contentPage.color);
  const tiledMode = useSelector((state) => state.contentPage.tiledMode);
  const picLeft = useSelector((state) => state.contentPage.pictureLeftPosition);
  const picTop = useSelector((state) => state.contentPage.pictureTopPosition);

  const myRef = useRef(null);
  const { LEFT, TOP } = usePosition(myRef);
  const [diffX, setDiffX] = useState(0);
  const [diffY, setDiffY] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [styles, setStyles] = useState({});
  const [fontSize, setFontSize] = useState(size);
  const dispatch = useDispatch();

  const dragStart = useCallback((e) => {
    if (!BL && !BR && !TR && !TL) {
      setDiffX(e.clientX - e.target.getBoundingClientRect().left);
      setDiffY(e.clientY - e.target.getBoundingClientRect().top);
      setDragging(true);
    }
  }, []);

  const dragEnd = () => {
    setDragging(false);
  };

  const draggingHandler = useCallback(
    (e) => {
      if (dragging) {
        const left = e.clientX - diffX;
        const top = e.clientY - diffY;
        setStyles({ left: left, top: top });
      }
    },
    [dragging]
  );

  useEffect(() => {
    dispatch(setSize(fontSize));
  }, [fontSize]);

  useEffect(() => {
    if (done) {
      if (!matches) {
        var left = LEFT - picLeft - 31;
        var top = TOP - picTop - 27;
      } else {
        var left = LEFT - picLeft - 12;
        var top = TOP - picTop - 51;
      }

      const myData = {
        size,
        font,
        color,
        logo,
        tiledMode,
        position: { left, top },
      };

      const myJSON = JSON.stringify(myData);
      console.log(myJSON);
      console.log(LEFT, TOP);
    }
  }, [
    done,
    size,
    font,
    color,
    logo,
    tiledMode,
    LEFT,
    TOP,
    picLeft,
    picTop,
    matches,
  ]);

  const handlerBig = useCallback(() => {
    setDragging(false);
    setFontSize((size) => size + 5);
  }, [size]);

  const handlerSmall = useCallback(() => {
    setDragging(false);
    setFontSize((size) => size - 5);
  }, [size]);

  useEffect(() => {
    window.addEventListener("mouseup", dragEnd);

    return () => {
    window.removeEventListener("mouseup", dragEnd);
    };
  }, [dragging]);

  return (
    <Styled.Box
      ref={myRef}
      style={styles}
      onMouseDown={dragStart}
      onMouseMove={draggingHandler}
      onMouseUp={dragEnd}
      size={size}
      font={font}
      color={color}
      BL={BL}
      BR={BR}
      TL={TL}
      TR={TR}
      logo={logo}
      dragging={dragging}
    >
      {logo}

      <Styled.Dot2 onClick={handlerSmall}></Styled.Dot2>
      <Styled.Dot4 onClick={handlerSmall}></Styled.Dot4>
      <Styled.Dot3 onClick={handlerBig}></Styled.Dot3>
      <Styled.Dot1 onClick={handlerBig}></Styled.Dot1>
    </Styled.Box>
  );
};
export default Drag;
