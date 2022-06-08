import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import styles from "./header.module.css";
import Image from "next/image";
interface HeaderProps {
  sections: ReadonlyArray<{
    title: string;
    url: string;
  }>;
  title: string;
}

export default function Header(props: HeaderProps) {
  const { sections, title } = props;

  return (
    <React.Fragment>
      {/* <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="left"
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
          <Button size="small" className={styles.betaPrivateBtn}>
            Beta Private
          </Button>
        </Typography>
        {sections.map((content,index)=>{
            return <div key={index}>About</div>
          })}
        <Button variant="outlined" size="small">
          Join our waitlist
        </Button>
      </Toolbar> */}
       <header className={`${styles.pageHeader}`}>
         <div className="d-flex justify-content-between align-items-center">
         <div className={styles.logoWrapper}>
            <span>
            {/* <Image src={"/images/logo.png"} width={122} height={32}></Image> */}
            sitelogo
            </span>
            <span className={styles.betaPrivateBtn}>
            Private Beta
            </span>
          </div>
          <div className={styles.rightSide}>
             <span className="me-3 me-md-4">About</span>
             <span className={`btn btnDarkPink`}>Join our waitlist</span>
          </div>
          </div>
       </header>
    </React.Fragment>
  );
}
