import produce from "immer";
import { initialState } from "./state";

const SET_LOGO = "SET_LOGO";
const SET_SIZE = "SET_SIZE";
const SET_TILED_MODE = "SET_TILED_MODE";
const SET_FONT = "SET_FONT";
const SET_POSITION_TL = "SET_POSITION_TL";
const SET_POSITION_TR = "SET_POSITION_TR";
const SET_POSITION_BR = "SET_POSITION_BR";
const SET_POSITION_BL = "SET_POSITION_BL";
const SET_IS_TYPED = "SET_IS_TYPED";
const SET_COLOR = "SET_COLOR";
const SET_CLICK = "SET_CLICK";
const SET_POSITION = "SET_POSITION";
const SET_DONE = "SET_DONE";
const SET_PICPOSITIONLEFT = "SET_PICPOSITIONLEFT";
const SET_PICPOSITIONTOP = "SET_PICPOSITIONTOP";

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case SET_IS_TYPED:
        draft.isTyped = action.isTyped;

        break;

      case SET_LOGO:
        draft.logo = action.logo;

        break;

      case SET_COLOR:
        draft.color = action.color;

        break;

      case SET_SIZE:
        draft.size = action.size;

        break;

      case SET_FONT:
        draft.font = action.font;

        break;

      case SET_TILED_MODE:
        draft.tiledMode = action.tiledMode;

        break;

      case SET_POSITION_BL:
        draft.positionBL = action.position;

        break;
      case SET_POSITION_BR:
        draft.positionBR = action.position;

        break;
      case SET_POSITION_TL:
        draft.positionTL = action.position;

        break;

      case SET_POSITION_TR:
        draft.positionTR = action.position;

        break;
      case SET_CLICK:
        draft.clickFontMobile = action.clickFontMobile;

        break;

      case SET_POSITION:
        draft.position.left = action.left;
        draft.position.top = action.top;
        break;

      case SET_DONE:
        draft.done = action.done;
        break;

      case SET_PICPOSITIONLEFT:
        draft.pictureLeftPosition = action.left;
        break;

      case SET_PICPOSITIONTOP:
        draft.pictureTopPosition = action.top;
        break;
    }
  });
};

export const setLogo = (logo) => {
  return { type: SET_LOGO, logo };
};
export const setColor = (color) => {
  return { type: SET_COLOR, color };
};

export const setSize = (size) => {
  return { type: SET_SIZE, size };
};

export const setFont = (font) => {
  return { type: SET_FONT, font };
};

export const setTiledMode = (tiledMode) => {
  return { type: SET_TILED_MODE, tiledMode };
};

export const setPositionTL = (position) => {
  return { type: SET_POSITION_TL, position };
};
export const setPositionTR = (position) => {
  return { type: SET_POSITION_TR, position };
};
export const setPositionBL = (position) => {
  return { type: SET_POSITION_BL, position };
};
export const setPositionBR = (position) => {
  return { type: SET_POSITION_BR, position };
};
export const setIsTyped = (isTyped) => {
  return { type: SET_IS_TYPED, isTyped };
};

export const setClickFontMobile = (clickFontMobile) => {
  return { type: SET_CLICK, clickFontMobile };
};

export const setPosition = (left, top) => {
  return { type: SET_POSITION, left: left, top: top };
};
export const setDone = (done) => {
  return { type: SET_DONE, done };
};

export const setPicPositionLeft = (left) => {
  return { type: SET_PICPOSITIONLEFT, left };
};

export const setPicPositionTop = (top) => {
  return { type: SET_PICPOSITIONTOP, top };
};

export default reducer;
