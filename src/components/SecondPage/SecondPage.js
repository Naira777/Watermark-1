import React, { useEffect, useState } from "react";
import * as Styled from "./styled";
import { Image } from "../RightSide/Box/image";
import { useDispatch, useSelector } from "react-redux";
import ResizeBox from "../RightSide/ResizeBox/ResizeBox";
import SizeChart from "../LeftSide/SizeChart/SizeChart";
import FontSelector from "../LeftSide/Font/FontSelector";
import TiledMode from "../LeftSide/Tiled mode/TiledMode";
import Tiled from "../RightSide/ResizeBox/Tiled/Tiled";
import Position from "../LeftSide/Position/Position";
import LogoContainer from "../LeftSide/TypedLogo/Logo";
import Picker from "../../components/LeftSide/SizeChart/ColorPicker/ChromPicker";
import { setFont, setSize, setColor, setDone } from "../../redux/reducer";

const SecondPage = () => {
  const tiled = useSelector((state) => state.contentPage.tiledMode);
  const clickFontMobile = useSelector(
    (state) => state.contentPage.clickFontMobile
  );
  const dispatch = useDispatch();
  const [fontMode, setFontMode] = useState(false);
  const [tiledMode, setTiledMode] = useState(false);
  const [positionMode, setPositionMode] = useState(false);

  const clickHandlerFontMode = () => {
    setFontMode(true);
    setTiledMode(false);
    setPositionMode(false);
  };

  const clickHandlerPositionMode = () => {
    setPositionMode(true);
    setFontMode(false);
    setTiledMode(false);
  };

  const clickHandlerTiledMode = () => {
    setTiledMode(true);
    setFontMode(false);
    setPositionMode(false);
  };

  const OnClickHandler = () => {
    dispatch(setDone(true));
  };

  const CancelHandler = () => {
    dispatch(setDone(false));
    dispatch(setFont("Mukta"));
    dispatch(setSize(50));
    dispatch(setColor("#FF77E0"));
  };

  useEffect(() => {}, [tiledMode, fontMode, tiled, positionMode]);

  return (
    <Styled.AppWrapper>
      <Styled.AppWrapperHeader>
        <Styled.TextH>Add Your Watermark</Styled.TextH>
      </Styled.AppWrapperHeader>

      <Styled.AppWrapperContent>
        <Styled.Left>
          <LogoContainer />
          <SizeChart />
          <FontSelector />
          <TiledMode />
          <Position />
        </Styled.Left>

        <Styled.Right>
          <Image />
          {!tiled && <ResizeBox />}
          {tiled && <Tiled />}

          {
            //this logo is for only mobile
          }
          <Styled.Logo>
            {" "}
            <LogoContainer />{" "}
          </Styled.Logo>
        </Styled.Right>
      </Styled.AppWrapperContent>

      <Styled.AppWrapperFooter>
        <Styled.BoxForMobile>
          {fontMode && (
            <Styled.Mode1>
              <FontSelector />
              <Styled.BoxColor>
                <Styled.TextP color> Color </Styled.TextP>
                <Picker />
              </Styled.BoxColor>
            </Styled.Mode1>
          )}

          {positionMode && (
            <Styled.Mode1>
              <Position />
            </Styled.Mode1>
          )}

          {tiledMode && (
            <Styled.Mode1>
              <TiledMode />
            </Styled.Mode1>
          )}

          <Styled.Mode2>
            <Styled.Position onClick={clickHandlerFontMode}>
              <Styled.InnerF fontMode={fontMode}>
                <svg
                  width="2em"
                  height="1.7em"
                  viewBox="0 0 16 16"
                  class="bi bi-fonts"
                  fill={fontMode ? "#0D2053" : "#9CA6C5"}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.258 3H3.747l-.082 2.46h.479c.26-1.544.758-1.783 2.693-1.845l.424-.013v7.827c0 .663-.144.82-1.3.923v.52h4.082v-.52c-1.162-.103-1.306-.26-1.306-.923V3.602l.43.013c1.935.062 2.434.301 2.694 1.846h.479L12.258 3z" />
                </svg>
                <Styled.TextPF fontMode={fontMode}> Text </Styled.TextPF>
              </Styled.InnerF>
            </Styled.Position>

            <Styled.Position onClick={clickHandlerTiledMode}>
              <Styled.InnerT tiledMode={tiledMode}>
                <svg
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 16 16"
                  class="bi bi-x-diamond-fill"
                  fill={tiledMode ? "#0D2053" : "#9CA6C5"}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9.05.435c-.58-.58-1.52-.58-2.1 0L4.047 3.339 8 7.293l3.954-3.954L9.049.435zm3.61 3.611L8.708 8l3.954 3.954 2.904-2.905c.58-.58.58-1.519 0-2.098l-2.904-2.905zm-.706 8.615L8 8.707l-3.954 3.954 2.905 2.904c.58.58 1.519.58 2.098 0l2.905-2.904zm-8.615-.707L7.293 8 3.339 4.046.435 6.951c-.58.58-.58 1.519 0 2.098l2.904 2.905z"
                  />
                </svg>

                <Styled.TextPT tiledMode={tiledMode}>
                  {" "}
                  Tiled mode{" "}
                </Styled.TextPT>
              </Styled.InnerT>
            </Styled.Position>

            <Styled.Position onClick={clickHandlerPositionMode} positionMode>
              <Styled.InnerP positionMode={positionMode}>
                <svg
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 18 18"
                  class="bi bi-fullscreen"
                  fill={positionMode ? "#0D2053" : "#9CA6C5"}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1h-4zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zM.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5z"
                  />
                </svg>

                <Styled.TextPP positionMode={positionMode}>
                  {" "}
                  Position{" "}
                </Styled.TextPP>
              </Styled.InnerP>
            </Styled.Position>
          </Styled.Mode2>

          <Styled.Footer clickFontMobile={clickFontMobile}>
            <Styled.Cancel onClick={CancelHandler}>
              <Styled.Text cancel>
                <b>Cancel</b>{" "}
              </Styled.Text>{" "}
            </Styled.Cancel>

            <Styled.Done onClick={OnClickHandler}>
              <Styled.Text> DONE </Styled.Text>{" "}
            </Styled.Done>
          </Styled.Footer>
        </Styled.BoxForMobile>

        <Styled.Footer1>
          <Styled.Cancel onClick={CancelHandler}>
            <Styled.Text cancel>
              <b>Cancel</b>{" "}
            </Styled.Text>{" "}
          </Styled.Cancel>

          <Styled.Done onClick={OnClickHandler}>
            <Styled.Text> DONE </Styled.Text>{" "}
          </Styled.Done>
        </Styled.Footer1>
      </Styled.AppWrapperFooter>
    </Styled.AppWrapper>
  );
};

export default SecondPage;
