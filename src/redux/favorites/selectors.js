import { createSelector } from "reselect";
export const selectFavorites = (state) => state.favorites.items;

export const selectIsFavorite = createSelector(
  [selectFavorites, (_, psychologistId) => psychologistId],
  (favorites, psychologistId) => {
    if (!favorites || !psychologistId || favorites.length === 0) return false;
    return favorites.some((favorite) => favorite._id === psychologistId);
  }
);
