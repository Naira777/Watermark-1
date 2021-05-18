import React, { useCallback, useEffect, useState } from "react";
import * as Styled from "./styled";
import { useSelector } from "react-redux";


const MySlider = ({ defaultValue, onChange }) => {
  const size = useSelector((state) => state.contentPage.size);
  const [currentSize, setCurrentSize] = useState(size);
  const [dragging, setDragging] = useState(false);
  const [styles, setStyles] = useState({});
  const [styles1, setStyles1] = useState({});

  const clickHandler = useCallback((e) => {
    setDragging(false);
    setStyles({ transform: `translate(${e.clientX - 75}px, -4px)` });
    setCurrentSize((e.clientX - 75) / 2);
    setStyles1({
      background: `linear-gradient(to right,
        #377DFF ${(e.clientX - 75) / 2}%, #0052E01A ${
        (e.clientX - 75) / 2
      }% 100%)`,
    });
  }, []);

  const dragStart = (e) => {
    setDragging(true);
  };

  const dragEnd = () => {
    setDragging(false);
  };

  const draggingHandler = useCallback(
    (e) => {
      if (dragging) {
        var left = e.clientX - 75;

        if (left <= 200 && left > 0) {
          setStyles({ transform: `translate(${left}px, -4px)` });
          setCurrentSize(left / 2);
          setStyles1({
            background: `linear-gradient(to right,
            #377DFF ${left / 2}%, #0052E01A ${left / 2}% 100%)`,
          });
        }
      }
    },
    [dragging]
  );

  useEffect(() => {
    window.addEventListener("mouseup", dragEnd);

    return () => {
    window.removeEventListener("mouseup", dragEnd);
    };
  }, [dragging]);

  useEffect(() => {
    onChange(currentSize);
  }, [currentSize]);

  return (
    <Styled.Box
      onMouseUp={dragEnd}
      onMouseMove={draggingHandler}
      onMouseDown={dragStart}
    >
      <Styled.Slider
        onClick={clickHandler}
        onMouseUp={dragEnd}
        onMouseMove={draggingHandler}
        onMouseDown={dragStart}
        style={styles1}
      >
        <Styled.Dot
          onMouseUp={dragEnd}
          onMouseMove={draggingHandler}
          onMouseDown={dragStart}
          style={styles}
        ></Styled.Dot>
      </Styled.Slider>
    </Styled.Box>
  );
};

export default MySlider;
