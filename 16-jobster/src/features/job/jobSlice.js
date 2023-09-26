import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUserFromLocalStorage } from "../../utils/localStorage";

const initialJob = {
  isLoading: false,
  company: "",
  position: "",
  jobLocation: getUserFromLocalStorage()?.location || "",
  jobTypeOptions: ["full-time", "part-time", "remote", "internship"],
  jobType: "fulltime",
  statusOptions: ["interview", "declined", "pending"],
  status: "pending",
  isEditing: false,
  editJobId: "",
};

const jobSlice = createSlice({
  name: "job",
  initialState: initialJob,
  reducers: {
    changeHandle: (state, { payload: { name, value } }) => {
      return { ...state, [name]: value };
    },
    clearValue: () => {
      return initialJob;
    },
    setEditJob: () => {},
  },
  extraReducers: {},
});

export const { changeHandle, clearValue, setEditJob } = jobSlice.actions;

export default jobSlice.reducer;
