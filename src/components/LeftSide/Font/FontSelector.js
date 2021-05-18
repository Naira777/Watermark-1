import React, { useCallback, useEffect, useState } from "react";
import * as Styled from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { setClickFontMobile, setFont } from "../../../redux/reducer";

const GoogleFonts = ["Audiowide", "Mukta", "Lobster"];

const FontSelector = () => {
  const matches = window.matchMedia("(max-width: 768px)").matches;

  const font = useSelector((state) => state.contentPage.font);

  const [currentFont, setCurrentFont] = useState(font);
  const [currentFont1, setCurrentFont1] = useState(font);
  const dispatch = useDispatch();
  const [mode, setMode] = useState(false);

  const [click, setClick] = useState(false);
  const [font1, setFont1] = useState(true);

  const clickHandler =(e) => {
      setCurrentFont1(e.currentTarget.id);
      setClick(true);
      setFont1(!font1);
      dispatch(setClickFontMobile(true));
    }

  const ApplyHandler = () => {
    setCurrentFont(currentFont1);
    setClick(false);
    dispatch(setFont(currentFont));
    setMode(false);
    setFont1(false);
    dispatch(setClickFontMobile(false));
  }

  const CancelHandler = () => {
    setClick(false);
    setCurrentFont("Mukta");
    setMode(false);
    dispatch(setClickFontMobile(false));
  }

  useEffect(() => {
    dispatch(setFont(currentFont));
  }, [currentFont]);

  return (
    <>
      {!matches && (
        <Styled.Box>
          <Styled.Text>Font </Styled.Text>
          <Styled.DropDown>
            <Styled.DropBtn font={font}>
              {font}
              <Styled.Svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                fill="currentColor"
                class="bi bi-caret-down-fill"
                viewBox="0 0 16 16"
              >
                <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
              </Styled.Svg>
            </Styled.DropBtn>
            <Styled.DropDownContent>
              {GoogleFonts.map((font) => (
                <Styled.DropDownFont
                  key={font}
                  id={font}
                  value={font}
                  font={font}
                  onClick={(e) => {
                    setCurrentFont(e.currentTarget.id);
                  }}
                >
                  {font}
                </Styled.DropDownFont>
              ))}
            </Styled.DropDownContent>
          </Styled.DropDown>
         </Styled.Box>
      )}

      {matches && !mode && (
        <Styled.Box>
          <Styled.Text>Font </Styled.Text>
          <Styled.Font
            value={currentFont}
            font={currentFont}
            onClick={() => {
              setMode(true);
            }}
          >
            {font}
            <Styled.Svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                fill="currentColor"
                class="bi bi-caret-down-fill"
                viewBox="0 0 16 16"
              >
                <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
              </Styled.Svg>
          </Styled.Font>
        </Styled.Box>
      )}

      {matches && mode && (
        <Styled.BoxFontMobile click={click}>
          {GoogleFonts.map((font) => (
            <Styled.BoxFont
              key={font}
              id={font}
              click={click}
              currentFont1={currentFont1}
              font1={font1}
              font={font}
              currentFont={currentFont}
              onClick={clickHandler}
            >
              {font}
            </Styled.BoxFont>
          ))}

          {click && (
            <Styled.Footer>
              <Styled.Cancel onClick={CancelHandler}>
                <Styled.TextB cancel>
                  <b>Cancel</b>{" "}
                </Styled.TextB>{" "}
              </Styled.Cancel>

              <Styled.Done onClick={ApplyHandler}>
                <Styled.TextB> APPLY </Styled.TextB>{" "}
              </Styled.Done>
            </Styled.Footer>
          )}
        </Styled.BoxFontMobile>
      )}
    </>
  );
};
export default FontSelector;
