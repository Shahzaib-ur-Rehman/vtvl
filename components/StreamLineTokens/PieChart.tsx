import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import AvailableToClaim from "./AvailableToClaim";
import Claimed from "./Claimed";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Vesting in progress", "Available to cliam", "Claimed"],
  datasets: [
    {
      label: "# of Votes",
      data: [30, 15, 10],
      backgroundColor: ["#F0F0F0", "#65DEBE", "#86A9A1"],
      borderColor: ["#F0F0F0", "#65DEBE", "#86A9A1"],
      borderWidth: 1,
    },
  ],
};

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom" as const,
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

export default function PaiChart() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Doughnut data={data} options={options} />
        </Grid>
        <Grid item xs={6}>
          <AvailableToClaim />
          <Claimed />
        </Grid>
      </Grid>
    </Box>
  );
}
