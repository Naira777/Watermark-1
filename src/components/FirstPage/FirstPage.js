import React from "react";
import * as Styled from "./styled";
import { TextLogo } from "../../components/RightSide/Box/text";
import { useDispatch } from "react-redux";
import { setIsTyped } from "../../redux/reducer";
import { Image } from "../RightSide/Box/image";
import { Line } from "../../components/CanvasLine/Line";

function FirstPage() {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(setIsTyped(true));
  };

  return (
    <Styled.AppWrapper>
      <Styled.AppWrapperHeader>
        <Styled.TextH>Add Your Watermark</Styled.TextH>
      </Styled.AppWrapperHeader>

      <Styled.AppWrapperContent>
        <Styled.Left>
          <Styled.LogoButton>
            <Styled.Cycle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#387DFF"
                class="bi bi-arrow-up-short"
                viewBox="1 2 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"
                />
              </svg>
            </Styled.Cycle>
            <Styled.Text> UPLOAD YOUR LOGO</Styled.Text>
          </Styled.LogoButton>

          <Styled.MiddleLine>
            <Styled.Canvas>
              {" "}
              <Line left />
            </Styled.Canvas>
            or
            <Styled.Canvas>
              <Line right />
            </Styled.Canvas>
          </Styled.MiddleLine>

          <TextLogo onClickHandler={onClickHandler} />
        </Styled.Left>

        <Styled.Right>
          <Image firstPage />
        </Styled.Right>
      </Styled.AppWrapperContent>

      <Styled.AppWrapperFooter>
        <Styled.Cancel>
          {" "}
          <Styled.TextB cancel>
            <b>Cancel</b>{" "}
          </Styled.TextB>{" "}
        </Styled.Cancel>

        <Styled.Done>
          {" "}
          <Styled.TextB> DONE </Styled.TextB>{" "}
        </Styled.Done>
      </Styled.AppWrapperFooter>
    </Styled.AppWrapper>
  );
}

export default FirstPage;
