import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import styles from "./mainsection.module.css";
import Image from "next/image";

export default function MainSection() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="h2" gutterBottom component="h2">
            Managing your token vesting seamlessly
          </Typography>
          <Typography variant="subtitle1" gutterBottom component="div">
            Design token vesting schedules, automate distributions and manage
            your token cap table - all in one platform
          </Typography>
          <Button size="small" className={styles.waitListBtn}>
            Join our waitlist
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Image src={"/images/main.png"} width={570} height={460}></Image>
        </Grid>
      </Grid>
    </Box>
  );
}
