// import action types
import * as types from "./actionTypes";
import axios from "axios";

export const getMainStReq = () => {
  return {
    type: types.GET_MAIN_ST_DATA_REQ
  };
};

export const getMainStSucc = (payload) => {
  return {
    type: types.GET_MAIN_ST_DATA_SUCC,
    payload
  };
};

export const getMainStFail = () => {
  return {
    type: types.GET_MAIN_ST_DATA_FAIL
  };
};

export const getMainStData = (payload) => {
  return (dispatch) => {
    console.log("req");
    dispatch(getMainStReq());
    axios
      .get("/news")
      .then((res) => {
        dispatch(getMainStSucc(res.data));
        console.log(res.data, "payload");
      })
      .catch((err) => {
        dispatch(getMainStFail());
        console.log("error :", err);
      });
  };
};

// category
export const getCatReq = () => {
  return {
    type: types.GET_CATEGORY_DATA_REQ
  };
};

export const getCatSucc = (payload) => {
  return {
    type: types.GET_CATEGORY_DATA_SUCC,
    payload
  };
};

export const getCatFail = () => {
  return {
    type: types.GET_CATEGORY_DATA_FAIL
  };
};

export const getCatData = ({ id }) => {
  return (dispatch) => {
    console.log(id);
    dispatch(getCatReq());
    axios
      .get(`/news/id/${id}`)
      .then((res) => {
        dispatch(getCatSucc(res.data));
        console.log(res.data, "payload");
      })
      .catch((err) => {
        dispatch(getCatFail());
        console.log("error :", err);
      });
  };
};
