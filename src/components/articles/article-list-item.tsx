import { FC, useState } from "react";
import { Card, Grid, Typography } from "@mui/material";
import dayjs from "dayjs";
import { Article } from "types/article.types";
import { ArticleModal } from "./article-modal";

interface ArticlesListItemProps {
  article: Article;
}

export const ArticlesListItem: FC<ArticlesListItemProps> = ({ article }) => {
  const [isModalOpen, setModalStatus] = useState(false);
  const toggleModalStatus = () => setModalStatus(!isModalOpen);

  return (
    <Grid item xs={12}>
      <Card sx={{ padding: "10px" }} onClick={toggleModalStatus}>
        <Grid container>
          <Grid item xs={12} mb={5}>
            <Typography fontWeight="bold">{article.title}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container justifyContent="space-between">
              <Grid item>
                <Typography fontSize="12px">Source: {article.source.name}</Typography>
              </Grid>
              <Grid item>
                <Typography fontSize="12px">
                  Publish at: {dayjs(article.publishedAt).format("DD.MM.YYYY HH:MM:ss")}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>

      <ArticleModal isOpen={isModalOpen} onClose={toggleModalStatus} article={article} />
    </Grid>
  );
};
