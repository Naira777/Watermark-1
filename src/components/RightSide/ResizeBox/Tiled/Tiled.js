import React, { useCallback, useEffect, useState } from "react";
import * as Styled from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { getCount } from "./helper";

const Tiled = () => {
  const matches = window.matchMedia("(max-width: 768px)").matches;

  const font = useSelector((state) => state.contentPage.font);
  const size = useSelector((state) => state.contentPage.size);
  const color = useSelector((state) => state.contentPage.color);
  const logo = useSelector((state) => state.contentPage.logo);

  let array = [];

  let Size = size;
  if (matches) {
    Size = 20;
  }

  array = getCount(16);
  return (
    <Styled.TiledBox>
      {array.map((c) => (
        <Styled.Logo font={font} key={c} size={size} color={color}>
          {logo}
        </Styled.Logo>
      ))}
    </Styled.TiledBox>
  );
};

export default Tiled;
