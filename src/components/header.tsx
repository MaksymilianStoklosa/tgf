import { FC, useState } from "react";
import { AppBar, Box, Toolbar, Button, Theme, IconButton, DialogContentText } from "@mui/material";
import { useNavigate } from "react-router-dom";
import TableRowsIcon from "@mui/icons-material/TableRows";
import WindowIcon from "@mui/icons-material/Window";
import { useAppDispatch, useTypedSelector } from "store";
import { setArticlesModeAction } from "store/slices/settings/settings.slice";
import { Modal } from "ui/modal";

export const Header: FC = () => {
  const [isModalOpen, setModalStatus] = useState(false);
  const navigate = useNavigate();
  const { articlesMode } = useTypedSelector((state) => state.settings);
  const dispatch = useAppDispatch();

  const toggleModalStatus = () => setModalStatus(!isModalOpen);

  return (
    <AppBar sx={headerSx.appBar}>
      <Toolbar sx={headerSx.toolbar}>
        <Button variant="text" size="large" color="secondary" onClick={() => navigate("/")}>
          TGF 11
        </Button>
        <Box>
          <IconButton
            onClick={() => {
              dispatch(setArticlesModeAction("list"));
            }}
          >
            <TableRowsIcon
              color="secondary"
              sx={{
                opacity: articlesMode === "list" ? 1 : 0.5,
              }}
            />
          </IconButton>
          <IconButton
            onClick={() => {
              dispatch(setArticlesModeAction("grid"));
            }}
          >
            <WindowIcon
              color="secondary"
              sx={{
                opacity: articlesMode === "grid" ? 1 : 0.5,
              }}
            />
          </IconButton>

          <Button variant="outlined" size="small" color="secondary" onClick={toggleModalStatus}>
            Project descriptsion
          </Button>
        </Box>
      </Toolbar>

      <Modal
        isOpen={isModalOpen}
        onClose={toggleModalStatus}
        title="Opis projektu"
        content={
          <Box>
            <DialogContentText mb={1}>Problemy</DialogContentText>
            <DialogContentText>
              Brak czasu na: konfiguracje CSP, optymalizacje importów tak żeby zmniejszyć bundle size, tworzenie unit
              testów oraz pełne tłumaczenie apki i lepsze stylowanie aplikacji.
            </DialogContentText>
            <DialogContentText mt={1} mb={1}>
              Odczucia
            </DialogContentText>
            <DialogContentText>
              Fajnie było użyć RTK Query, odświeżyć wiedzę z Reduxa i potestować React Vite
            </DialogContentText>
          </Box>
        }
      />
    </AppBar>
  );
};

const headerSx = {
  appBar: { zIndex: (theme: Theme) => theme.zIndex.drawer + 1 },
  toolbar: { display: "flex", justifyContent: "space-between" },
};
