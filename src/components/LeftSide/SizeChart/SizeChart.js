import React from "react";
import * as Styled from "./styled";
import { useDispatch, useSelector } from "react-redux";
import Picker from "./ColorPicker/ChromPicker";
import FontSizeRange from "./SizeLine/FontSizeRange";

const SizeChart = () => {
  return (
    <>
      <Styled.SizeBox>
        <FontSizeRange />
        <Picker />
      </Styled.SizeBox>
    </>
  );
};

export default SizeChart;
