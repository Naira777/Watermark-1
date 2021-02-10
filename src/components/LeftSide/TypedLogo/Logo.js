import React, { useCallback, useEffect, useState } from "react";
import * as Styled from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { setLogo } from "../../../redux/reducer";


const LogoContainer = () => {

  const logo = useSelector((state) => state.contentPage.logo);
  const dispatch = useDispatch();
  const [currentLogo, setCurrentLogo] = useState(logo);
  const [count, setCount] = useState(0);

  useEffect(() => {
    dispatch(setLogo(currentLogo));
  }, [currentLogo]);

  const inputHandler = (e) => {
    const typedLogo = e.target.value;
    setCurrentLogo(typedLogo);
    setCount(typedLogo.length);
  };

  return (
    <Styled.LogoBox>
      <Styled.Box
        onChange={inputHandler}
        placeholder="Replace logo"
      ></Styled.Box>
      <Styled.TextLogo>
        {`${Number(count)}/${42 - Number(count)} characters advised`}
      </Styled.TextLogo>
    </Styled.LogoBox>
  );
};
export default LogoContainer;
