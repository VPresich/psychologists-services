import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInst } from "../../api/axiosInst";

export const getPsychologistsPerPage = createAsyncThunk(
  "psychologists/getPage",
  async ({ page, limit }, thunkAPI) => {
    console.log("page: ", page, "limit:", limit);
    try {
      const response = await axiosInst.get(`psychologists`, {
        params: {
          page,
          limit,
        },
      });
      console.log("Psyhologists:", response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getPsychologistById = createAsyncThunk(
  "psychologists/psychologistById",
  async (id, thunkAPI) => {
    try {
      const response = await axiosInst.get(`psychologists/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getPsychologistsWithParams = createAsyncThunk(
  "psychologists/getPageWithParams",
  async ({ page, limit, query, sort }, thunkAPI) => {
    try {
      const response = await axiosInst.get("psychologists", {
        params: {
          page,
          limit,
          query,
          sort,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
