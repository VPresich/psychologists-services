import { createAsyncThunk } from "@reduxjs/toolkit";

import { axiosInst, setAuthHeader, clearAuthHeader } from "../../api/axiosInst";

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      credentials.app = "psychologists";
      const resp = await axiosInst.post("users/register", credentials);
      setAuthHeader(resp.data.token);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      credentials.app = "psychologists";
      const resp = await axiosInst.post("users/login", credentials);
      setAuthHeader(resp.data.token);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk("users/logout", async (_, thunkAPI) => {
  try {
    await axiosInst.post("/users/logout");
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    // Reading the token from the state via getState()
    const reduxState = thunkAPI.getState();
    const savedToken = reduxState.auth.token;

    // Add it to the HTTP header and perform the request
    setAuthHeader(savedToken);
    const response = await axiosInst.get("users/current");

    return response.data;
  },
  {
    condition: (_, { getState }) => {
      // Reading the token from the state via getState()
      const state = getState();
      const savedToken = state.auth.token;

      // If there is no token, exit without performing any request
      return savedToken !== null;
    },
  }
);

export const updateTheme = createAsyncThunk(
  "users/themes",
  async (data, thunkAPI) => {
    try {
      const response = await axiosInst.patch(`users/themes`, data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
