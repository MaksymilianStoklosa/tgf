import { FC } from "react";
import { DialogContentText, Grid, Tooltip } from "@mui/material";
import { Modal } from "ui/modal";
import { Article } from "types/article.types";

interface ArticleModalProps {
  isOpen: boolean;
  onClose: () => void;
  article?: Article;
}

export const ArticleModal: FC<ArticleModalProps> = ({ isOpen, onClose, article }) => (
  <Modal
    title="Details"
    isOpen={isOpen}
    onClose={onClose}
    content={
      <Grid container display="flex" flexDirection="column">
        <DialogContentText mb={1}>Author: {article?.author}</DialogContentText>

        <DialogContentText mb={1}>{article?.description}</DialogContentText>

        <Tooltip title={article?.url}>
          <DialogContentText
            sx={{ maxWidth: "400px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}
          >
            Url: {article?.url}
          </DialogContentText>
        </Tooltip>
      </Grid>
    }
  />
);
