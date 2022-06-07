import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Image from "next/image";

let AudienceList = [
  {
    title: "For Web3 Founders",
    disc: "Have (or plan to have) a token and struggle to use spreadsheet to calculate and manually distribute tokens?",
    src: "/images/tokenOwner.png",
  },
  {
    title: "For Investors",
    disc: "Invest in web3 companies and need to manage your multiple token vesting?",
    src: "/images/tokenHolder.png",
  },
];

export default function Audience() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Typography
          variant="subtitle1"
          gutterBottom
          component="div"
          textAlign={"center"}
        >
          We are ready for the next wave of Web3 startups
        </Typography>
        {AudienceList.map((content) => {
          return (
            <Grid item xs={6}>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Image src={content.src} width={300} height={300} />
                  <Typography
                    variant="h6"
                    gutterBottom
                    component="h6"
                    textAlign={"center"}
                  >
                    {content.title}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    gutterBottom
                    component="div"
                    textAlign={"center"}
                  >
                    {content.disc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
