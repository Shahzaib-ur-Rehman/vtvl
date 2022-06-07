import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import PaiChart from "./PieChart";
import { LineChart } from "./LineChart";

export const data = {
  labels: ["Available to claim", "Claimed", "vesting in progress"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
      ],
      borderWidth: 1,
    },
  ],
};
export default function StreamLineTokens() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography
            variant="subtitle1"
            gutterBottom
            component="div"
            textAlign={"center"}
          >
            Design token vesting schedules, automate distributions and manage
            your token cap table - all in one platform
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography
            variant="subtitle2"
            gutterBottom
            component="div"
            textAlign={"left"}
          >
            Token Allocation (ABC)
          </Typography>
          <Typography
            variant="subtitle2"
            gutterBottom
            component="div"
            textAlign={"left"}
          >
            10,000.00
          </Typography>
          <PaiChart />
        </Grid>

        <Grid item xs={6}>
          <Typography
            variant="subtitle2"
            gutterBottom
            component="div"
            textAlign={"left"}
          >
            Token Allocation (ABC)
          </Typography>
          <Typography
            variant="subtitle2"
            gutterBottom
            component="div"
            textAlign={"left"}
          >
            10,000.00
          </Typography>
          <LineChart />
        </Grid>
      </Grid>
    </Box>
  );
}
