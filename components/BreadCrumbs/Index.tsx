import { Typography, Breadcrumbs, Link as MLink } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import GrainIcon from "@mui/icons-material/Grain";
import { Link } from "react-router-dom";
import React from 'react'

interface IProps {
  link: string;
  name: string;
  subname?: string;
}

export default function Index(props: IProps) {
  return (
    <Breadcrumbs aria-label="breadcrumb" sx={{marginTop:12}}>
      <Link to={props.link}>
        <MLink sx={{ display: "flex", alignItems: "center" }} color="inherit">
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          {props.name}
        </MLink>
      </Link>
      {props.subname && (
        <Typography
          sx={{ display: "flex", alignItems: "center" }}
          color="text.primary"
        >
          {props.subname}
        </Typography>
      )}
    </Breadcrumbs>
  );
}
