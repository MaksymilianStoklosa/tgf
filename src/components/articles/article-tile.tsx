import { FC, useState } from "react";
import { Card, Grid, Typography, CardMedia } from "@mui/material";
import dayjs from "dayjs";
import { Article } from "types/article.types";
import { ArticleModal } from "./article-modal";

interface ArticlesListItemProps {
  article: Article;
}

export const ArticlesTile: FC<ArticlesListItemProps> = ({ article }) => {
  const [isModalOpen, setModalStatus] = useState(false);
  const toggleModalStatus = () => setModalStatus(!isModalOpen);

  return (
    <Grid item lg={3} md={6} xs={12}>
      <Card sx={{ padding: "10px", height: "375px" }} onClick={toggleModalStatus}>
        <Grid container>
          <Grid item xs={12}>
            <CardMedia
              component="img"
              height="194"
              image={article.urlToImage ?? "https://joadre.com/wp-content/uploads/2019/02/no-image.jpg"}
              alt="Article image"
            />
          </Grid>
          <Grid item xs={12} mb={2}>
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

          <Grid item xs={12}>
            <Typography fontWeight="bold">{article.title}</Typography>
          </Grid>
        </Grid>
      </Card>

      <ArticleModal isOpen={isModalOpen} onClose={toggleModalStatus} article={article} />
    </Grid>
  );
};
