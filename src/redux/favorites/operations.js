import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInst } from "../../api/axiosInst";

export const fetchFavoritesByPsychologistIds = createAsyncThunk(
  "psychologists/getFavoritsByPsychologistIds",
  async (ids, thunkAPI) => {
    try {
      const promises = ids.map((id) => axiosInst.get(`psychologists/${id}`));
      const responses = await Promise.all(promises);
      const data = responses.map((response) => response.data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchFavorites = createAsyncThunk(
  "favorites/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axiosInst.get(`psychologists/favorites`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addFavorite = createAsyncThunk(
  "favorites/addFavorite",
  async (idPsychologist, thunkAPI) => {
    try {
      const response = await axiosInst.post(
        `psychologists/favorites/${idPsychologist}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeFavorite = createAsyncThunk(
  "favorites/removeFavorite",
  async (idPsychologist, thunkAPI) => {
    try {
      const response = await axiosInst.delete(
        `psychologists/favorites/${idPsychologist}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
