import { createSlice } from "@reduxjs/toolkit";

const initialFilters = {
  search: "",
  searchStatus: "all",
  searchType: "all",
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

const allJobsSlice = createSlice({
  name: "allJobs",
  initialState: initialAllJobs,
  reducers: {},
  extraReducers: {},
});

export default allJobsSlice.reducer;
