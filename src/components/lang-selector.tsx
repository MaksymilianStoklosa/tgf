import { FC, useEffect, useState } from "react";
import { Grid, Button, Typography } from "@mui/material";
import i18n from "config/libs/i18n";
import { useTranslation } from "react-i18next";

export const LangSelector: FC = () => {
  const [selectedLang, setSelectedLang] = useState("en");
  const { t } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(selectedLang);
  }, [selectedLang]);

  return (
    <Grid container padding="16px">
      <Grid item xs={12} mb={2}>
        <Typography>{t("main.language")}</Typography>
      </Grid>
      <Grid item marginRight="15px">
        <Button variant="outlined" onClick={() => setSelectedLang("pl")}>
          PL
        </Button>
      </Grid>
      <Grid item>
        <Button variant="outlined" onClick={() => setSelectedLang("en")}>
          EN
        </Button>
      </Grid>
    </Grid>
  );
};
