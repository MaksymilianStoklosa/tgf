import { FC, useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import dayjs from "dayjs";
import { Colors } from "static/constants";
import { useTypedSelector } from "store";

export const Footer: FC = () => {
  const [time, setTime] = useState<Date>();
  const { totalResults } = useTypedSelector((state) => state.articles);

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Box
      component="footer"
      sx={{
        position: "fixed",
        bottom: 0,
        height: "50px",
        background: Colors.primary,
        width: "100%",
        padding: "10px",
      }}
    >
      <Grid container alignItems="center" height="100%" justifyContent="space-around">
        <Grid item>
          <Typography color="secondary">Results: {totalResults}</Typography>
        </Grid>
        <Grid item>
          <Typography color="secondary">Time: {dayjs(time).format("HH:mm:ss")}</Typography>
        </Grid>
        <Grid item />
      </Grid>
    </Box>
  );
};
