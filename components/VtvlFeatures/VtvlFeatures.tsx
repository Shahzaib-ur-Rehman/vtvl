import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Typography from "@mui/material/Typography";
let VtvlFeaturesList = [
  {
    name: "Audited and secure",
    discription: "The smart contracts are audited by Quantstamp",
    src: "/images/fImage1.png",
  },
  {
    name: "Flexible vesting schedule",
    discription: "Design and track vesting schedules for your own need",
    src: "/images/fImage2.png",
  },
  {
    name: "Token equity management",
    discription:
      "Your token cap table is ready once you have setup the vesting schedules ",
    src: "/images/fImage3.png",
  },
  {
    name: "Token holder engagement",
    discription:
      "You can communicate with token holders and keep them informed of your progress",
    src: "/images/fImage4.png",
  },
  {
    name: "Staking for vested tokens",
    discription:
      "Your token cap table is ready once you have setup the vesting schedules ",
    src: "/images/fImage5.png",
  },
];

export default function VtvlFeatures() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          {VtvlFeaturesList.map((content) => {
            return (
              <div>
                <Image src={content.src} width={50} height={50} />
                <Typography variant="h6" gutterBottom component="h6">
                  {content.name}
                </Typography>
                <Typography variant="subtitle1" gutterBottom component="span">
                  {content.discription}
                </Typography>
              </div>
            );
          })}
        </Grid>
      </Grid>
    </Box>
  );
}
