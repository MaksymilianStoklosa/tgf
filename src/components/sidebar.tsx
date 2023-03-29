import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ListItem, List, Toolbar, Drawer, Box, ListItemButton, ListItemText, Theme, Tooltip } from "@mui/material";
import { DRAWER_WIDTH, DRAWER_WIDTH_MOBILE } from "static/constants";
import { useAppDispatch } from "store";
import { setCountryAction } from "store/slices/settings/settings.slice";
import { Routes } from "static/enums/routes.enum";
import { CountryCode } from "types/global.types";
import { useTranslation } from "react-i18next";
import i18n from "config/libs/i18n";
import { LangSelector } from "./lang-selector";

interface NavigationItem {
  route: Routes;
  translationKey: string;
  code: CountryCode;
}

const links: NavigationItem[] = [
  {
    route: Routes.Poland,
    translationKey: "main.poland",
    code: "pl",
  },
  {
    route: Routes.UK,
    translationKey: "main.unitedKingdom",
    code: "gb",
  },
  {
    route: Routes.France,
    translationKey: "main.france",
    code: "fr",
  },
];

export const Sidebar: FC = () => {
  const [selectedLang, setSelectedLang] = useState("en");

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(selectedLang);
  }, [selectedLang]);

  return (
    <Drawer variant="permanent" sx={(theme) => sidebarSx.drawer(theme)}>
      <Box component="aside" sx={sidebarSx.box}>
        <Toolbar />
        <List>
          {links.map(({ translationKey, route, code }) => (
            <ListItem key={translationKey} disablePadding sx={sidebarSx.listItem}>
              <Tooltip title={t(translationKey)} placement="right">
                <ListItemButton
                  onClick={() => {
                    navigate(route);
                    dispatch(setCountryAction(code));
                  }}
                >
                  <ListItemText primary={t(translationKey)} sx={sidebarSx.listItemText} />
                </ListItemButton>
              </Tooltip>
            </ListItem>
          ))}
        </List>

        <LangSelector />
      </Box>
    </Drawer>
  );
};

const sidebarSx = {
  drawer: (theme: Theme) => ({
    width: DRAWER_WIDTH,
    [theme.breakpoints.down("lg")]: {
      width: DRAWER_WIDTH_MOBILE,
    },
    flexShrink: 0,
    [`& .MuiDrawer-paper`]: {
      width: DRAWER_WIDTH,
      [theme.breakpoints.down("lg")]: {
        width: DRAWER_WIDTH_MOBILE,
      },
      boxSizing: "border-box",
    },
  }),
  box: { overflow: "auto" },
  listItemIcon: {
    display: "flex",
    alignItems: "center",
    margin: "0 15px",
    minWidth: "auto",
  },
  listItem: {
    display: "block",
    marginBottom: "7px",
  },
  listItemText: (theme: Theme) => ({
    [theme.breakpoints.down("lg")]: {
      span: {
        fontSize: "12px",
      },
    },
  }),
};
