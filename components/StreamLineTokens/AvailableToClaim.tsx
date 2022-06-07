import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function AvailableToClaim() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography
          variant="subtitle2"
          gutterBottom
          component="div"
          textAlign={"left"}
        >
          Available to cliam
        </Typography>
      </CardContent>
      <Typography
        variant="subtitle2"
        gutterBottom
        component="div"
        textAlign={"left"}
      >
        6142.45
      </Typography>
      <Button variant="outlined" size="small">
        Claim
      </Button>
    </Card>
  );
}
