import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialJob = {
  isLoading: false,
  company: "",
  position: "",
  jobLocation: "",
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
  reducers: {},
  extraReducers: {},
});

export default jobSlice.reducer;
