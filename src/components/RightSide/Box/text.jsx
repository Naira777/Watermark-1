import React from "react";
import * as Styled from "./styled";


export const TextLogo = ({ onClickHandler }) => {
  return (
    <Styled.TextButton onClick={onClickHandler}>
      <Styled.Text> Type Text </Styled.Text>
    </Styled.TextButton>
  );
};
