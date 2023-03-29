import { Grid, Typography } from "@mui/material";
import { useGetArticlesByCountryQuery } from "api/api";
import { ArticlesList } from "components/articles/articles-list";
import { FC, useEffect } from "react";
import { useAppDispatch, useTypedSelector } from "store";
import { setArticlesAction } from "store/slices/articles/articles.slice";

export const ArticlePage: FC = () => {
  const { country } = useTypedSelector((state) => state.settings);
  const { data, isLoading, isFetching } = useGetArticlesByCountryQuery(country);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data) {
      dispatch(setArticlesAction(data));
    }
  }, [data]);

  if (isLoading || isFetching) return <div>Loading...</div>;

  return (
    <Grid container>
      <Grid item xs={12} mb={2}>
        <Typography variant="h5" fontWeight="bold">
          Breaking news!
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <ArticlesList />
      </Grid>
    </Grid>
  );
};
