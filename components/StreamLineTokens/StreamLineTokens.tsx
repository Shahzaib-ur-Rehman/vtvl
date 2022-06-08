import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import styles from "./streamLineTokens.m.module.css";
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
     <section className={`${styles.graphSection}`}>
       <div className="container">
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography
            variant="subtitle1"
            gutterBottom
            component="div"
            textAlign={"center"}
          >
            <div className={`${styles.HeadingWrapper}`}>
              <h2>
            Streamline token vesting management with a few clicks. 
            No-code required.
            </h2>
            </div>
          </Typography>
        </Grid>
      </Grid>
     
        <div className="row">
          <div className="col-md-6">
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
        </div>
         <div className="col-md-6">
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
        
      </div>
      </div>
    </Box>
    </div>
    </section>

  );
}
