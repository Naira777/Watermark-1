import React, { useEffect, useState } from "react";
import * as Styled from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { setTiledMode } from "../../../redux/reducer";
import { Switch } from "antd";

const TiledMode = () => {
  const tiledMode = useSelector((state) => state.contentPage.tiledMode);

  const [mode, setMode] = useState(tiledMode);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTiledMode(mode));
  }, [mode]);

  const changeTiledMode = (checked) => {
    if (checked) setMode(true);
    else {
      setMode(false);
    }
  };

  return (
    <Styled.Box>
      <Styled.TextHeader>Tiled mode</Styled.TextHeader>

      <Styled.Box1>
        <Styled.TextS mode={mode}>Single</Styled.TextS>

        <Styled.SwitchBox>
          <Switch
            defaultChecked={mode}
            size="small"
            onChange={changeTiledMode}
          />
        </Styled.SwitchBox>

        <Styled.TextT mode={mode}>Tiled</Styled.TextT>
      </Styled.Box1>
    </Styled.Box>
  );
};
export default TiledMode;
