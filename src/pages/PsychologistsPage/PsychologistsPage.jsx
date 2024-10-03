import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import clsx from "clsx";
import { getPsychologistsWithParams } from "../../redux/psychologists/operations";
import { fetchFavorites } from "../../redux/favorites/operations";
import { selectIsLoggedIn, selectTheme } from "../../redux/auth/selectors";
import { setPage } from "../../redux/psychologists/slice";
import CardList from "../../components/CardsList/CardsList";
import Filters from "../../components/Filters/Filters";
import {
  selectSortParam,
  selectQueryParams,
} from "../../redux/filters/selectors";
import {
  selectPsychologists,
  selectCurrentPage,
  selectIsLoading,
  selectItemsPerPage,
  selectIsMore,
  selectError,
  selectPsychologistsNumber,
} from "../../redux/psychologists/selectors";
import Button from "../../components/UI/Button/Button";
import DocumentTitle from "../../components/DocumentTitle";

import css from "./PsychologistsPage.module.css";

export default function PsychologistsPage() {
  const dispatch = useDispatch();

  const psychologists = useSelector(selectPsychologists);
  const currentPage = useSelector(selectCurrentPage);
  const itemsPerPage = useSelector(selectItemsPerPage);
  const isLoading = useSelector(selectIsLoading);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isMore = useSelector(selectIsMore);
  const error = useSelector(selectError);
  const psychologistsNum = useSelector(selectPsychologistsNumber);

  const theme = useSelector(selectTheme);

  const queryParams = useSelector(selectQueryParams);
  const sortParam = useSelector(selectSortParam);

  useEffect(() => {
    dispatch(
      getPsychologistsWithParams({
        page: currentPage,
        limit: itemsPerPage,
        query: queryParams,
        sort: sortParam,
      })
    );
    // isLoggedIn && dispatch(fetchFavorites());
  }, [dispatch, currentPage, itemsPerPage, isLoggedIn, queryParams, sortParam]);

  const handleLoadMore = () => {
    dispatch(setPage(currentPage + 1));
  };
  return (
    <>
      <DocumentTitle>Psychologists catalog</DocumentTitle>
      <section className={css.container}>
        <h2 className="visually-hidden"> Psychologists catalog</h2>
        <Filters />
        <div className={css.catalog}>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <>
              {!error && psychologistsNum > 0 ? (
                <CardList psychologists={psychologists} />
              ) : (
                <p className={clsx(css.text, css[theme])}>
                  Not found psychologists.
                </p>
              )}
              {isMore && (
                <Button
                  onClick={handleLoadMore}
                  btnAuxStyles={css.btnAuxStyles}
                >
                  Load More
                </Button>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}
