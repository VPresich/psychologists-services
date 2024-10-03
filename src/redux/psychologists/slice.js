import { createSlice } from "@reduxjs/toolkit";
import {
  getPsychologistsPerPage,
  getPsychologistById,
  getPsychologistsWithParams,
} from "./operations";

const psychologistsSlice = createSlice({
  name: "psychologists",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    favorites: [],
    currentPage: 1,
    totalItems: 30,
    totalPages: 1,
    itemsPerPage: 3,
  },
  reducers: {
    setPage(state, action) {
      state.currentPage = action.payload;
    },

    resetPsychologistsState(state) {
      state.currentPage = 1;
      state.items = [];
      state.isLoading = false;
      state.error = null;
      state.totalItems = 30;
      state.totalPages = 1;
      state.itemsPerPage = 3;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getPsychologistsPerPage.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getPsychologistsPerPage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.currentPage = action.payload.page;
        state.itemsPerPage = action.payload.limit;
        state.totalItems = action.payload.totalRecords;
        state.totalPages = action.payload.totalPages;

        if (state.currentPage > 1)
          state.items = [...state.items, ...action.payload.psychologists];
        else {
          state.items = action.payload.psychologists;
        }
      })

      .addCase(getPsychologistsPerPage.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(getPsychologistsWithParams.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getPsychologistsWithParams.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.currentPage = action.payload.page;
        state.itemsPerPage = action.payload.limit;
        state.totalItems = action.payload.totalRecords;
        state.totalPages = action.payload.totalPages;

        if (state.currentPage > 1)
          state.items = [...state.items, ...action.payload.psychologists];
        else {
          state.items = action.payload.psychologists;
        }
      })
      .addCase(getPsychologistsWithParams.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(getPsychologistById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getPsychologistById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const existingIndex = state.items.findIndex(
          (camper) => camper.id === action.payload.id
        );
        if (existingIndex !== -1) {
          state.items[existingIndex] = action.payload;
        } else {
          state.items.push(action.payload);
        }
      })
      .addCase(getPsychologistById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setPage, resetPsychologistsState } = psychologistsSlice.actions;
export default psychologistsSlice.reducer;
