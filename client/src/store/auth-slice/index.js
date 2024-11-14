import { createAsyncThunk, createSlice  } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  user: null,
};

export const registerUser = createAsyncThunk(
  "/auth/register",
  async (formData) => {
    const response = await axios.post(
      "http://localhost:8000/api/auth/register",
      formData,
      {
        withCredentials: true,
      },
    );

    return response.data;
  }
);

const authslice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {},
  },
  extraReducers
});

export const { setUser } = authslice.actions;
export default authslice.reducer;
