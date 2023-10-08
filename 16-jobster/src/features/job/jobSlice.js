import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUserFromLocalStorage } from "../../utils/localStorage";
import { toast } from "react-toastify";
import { createJobThunk } from "./jobThunk";

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

export const createJob = createAsyncThunk(
  "job/createJob",
  async (job, thunkAPI) => {
    return createJobThunk("/jobs", job, thunkAPI);
  }
);

export const updateJob = () => {
  // TODO
};

export const removeJob = () => {
  // TODO
};

const jobSlice = createSlice({
  name: "job",
  initialState: initialJob,
  reducers: {
    changeHandle: (state, { payload: { name, value } }) => {
      return { ...state, [name]: value };
    },
    clearValues: () => {
      return { ...initialJob };
    },
    setEditJob: () => {},
  },
  extraReducers: {
    [createJob.pending]: (state) => {
      state.isLoading = true;
    },
    [createJob.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      if (payload) {
        toast.success("Add job successfully");
      } else {
        toast.error("Add job failure");
      }
    },
    [createJob.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});

export const { changeHandle, clearValues, setEditJob } = jobSlice.actions;

export default jobSlice.reducer;
