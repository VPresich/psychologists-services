import { createSelector } from "reselect";

export const selectPsychologistsState = (state) => state.psychologists;
export const selectPsychologists = (state) => state.psychologists.items;
export const selectPsychologistsNumber = (state) =>
  state.psychologists.items.length || 0;

export const selectIsLoading = (state) => state.psychologists.isLoading;
export const selectError = (state) => state.psychologists.error;

export const selectItemsPerPage = (state) => state.psychologists.itemsPerPage;
export const selectCurrentPage = (state) => state.psychologists.currentPage;

const selectTotalPages = (state) => state.psychologists.totalPages;

export const selectFavorites = (state) => state.psychologists.favorites;

export const selectIsMore = createSelector(
  [selectCurrentPage, selectTotalPages],
  (currPage, lastPage) => currPage < lastPage
);

export const selectPsychologistById = createSelector(
  [selectPsychologists, (_, psychologistId) => psychologistId],
  (psychologists, psychologistId) =>
    psychologists.find((psychologist) => psychologist._id === psychologistId)
);
