import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { getAllJobsThunk } from "./allJobsThunk";

const initialFilters = {
  search: "",
  searchStatus: "all",
  searchStatusOptions: ["all", "interview", "declined", "pending"],
  searchType: "all",
  searchTypeOptions: ["all", "full-time", "part-time", "remote", "internship"],
  sort: "latest",
  sortOptions: ["latest", "oldest", "a-z", "z-a"],
};

const initialAllJobs = {
  isLoading: false,
  jobs: [],
  totalJobs: 0,
  numberOfPages: 1,
  stats: {},
  monthlyApplications: [],
  ...initialFilters,
};

export const getAllJobs = createAsyncThunk(
  "allJobs/getJobs",
  async (_, thunkAPI) => {
    return getAllJobsThunk("/jobs", thunkAPI);
  }
);

const allJobsSlice = createSlice({
  name: "allJobs",
  initialState: initialAllJobs,
  reducers: {
    changeFilterHandle: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
  },
  extraReducers: {
    [getAllJobs.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllJobs.fulfilled]: (state, { payload }) => {
      const { jobs, numberOfPages, totalJobs } = payload;
      state.isLoading = false;
      state.jobs = jobs;
      state.numberOfPages = numberOfPages;
      state.totalJobs = totalJobs;
      console.log(jobs);
    },
    [getAllJobs.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});

export const { changeFilterHandle } = allJobsSlice.actions;

export default allJobsSlice.reducer;
