import { FC } from "react";
import { Grid } from "@mui/material";
import { useTypedSelector } from "store";
import { ArticlesListItem } from "./article-list-item";
import { ArticlesTile } from "./article-tile";
import { Conditional } from "utils/conditional";

export const ArticlesList: FC = () => {
  const { articles } = useTypedSelector((state) => state.articles);
  const { articlesMode } = useTypedSelector((state) => state.settings);

  return (
    <Grid container spacing={2}>
      {articles.map((article) => {
        const props = {
          key: article.url,
          article,
        };

        return (
          <Conditional
            condition={articlesMode === "grid"}
            trueRender={<ArticlesTile {...props} />}
            falseRender={<ArticlesListItem {...props} />}
          />
        );
      })}
    </Grid>
  );
};
