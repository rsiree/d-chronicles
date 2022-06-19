import * as types from "./actionTypes";

// initial state
const initState = {
  loading: false,
  error: false,
  mData: [],
  cData: []
};

// reducer
export const mainReducer = (state = initState, action) => {
  switch (action.type) {
    case types.GET_MAIN_ST_DATA_REQ:
      return {
        ...state,
        loading: true,
        error: false
      };
    case types.GET_MAIN_ST_DATA_SUCC:
      return {
        ...state,
        loading: false,
        mData: action.payload
      };
    case types.GET_MAIN_ST_DATA_FAIL:
      return {
        ...state,
        loading: false,
        error: true
      };
    default:
      return state;
  }
};

// reducer
export const catReducer = (state = initState, action) => {
  switch (action.type) {
    case types.GET_CATEGORY_DATA_REQ:
      return {
        ...state,
        loading: true,
        error: false
      };
    case types.GET_CATEGORY_DATA_SUCC:
      return {
        ...state,
        loading: false,
        cData: action.payload
      };
    case types.GET_CATEGORY_DATA_FAIL:
      return {
        ...state,
        loading: false,
        error: true
      };
    default:
      return state;
  }
};
