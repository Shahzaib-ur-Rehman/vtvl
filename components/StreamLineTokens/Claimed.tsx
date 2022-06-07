import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Claimed() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography
          variant="subtitle2"
          gutterBottom
          component="div"
          textAlign={"left"}
        >
          Claimed
        </Typography>
      </CardContent>
      <Typography
        variant="subtitle2"
        gutterBottom
        component="div"
        textAlign={"left"}
      >
        2023.12
      </Typography>
      <Button variant="outlined" size="small">
        Staking comming soon
      </Button>
    </Card>
  );
}
