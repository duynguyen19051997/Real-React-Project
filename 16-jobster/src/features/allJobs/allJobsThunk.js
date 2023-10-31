import { authHeader } from "../../utils/authHeader";
import customFetch from "../../utils/axios";

export const getAllJobsThunk = async (url, thunkAPI) => {
  try {
    const resp = await customFetch.get(url, authHeader(thunkAPI));
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const showStatsThunk = async (url, thunkAPI) => {
  try {
    const resp = await customFetch.get(url, authHeader(thunkAPI));
    console.log(resp.data);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
