import React, { Fragment,useEffect } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Chip,
  IconButton,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useAppDispatch } from "../../redux/hooks";
import DeleteIcon from "@mui/icons-material/Delete";
import { deletejob, updatejobstatus,getAllJob } from "../../services/api";


type ICard = {
  id:number;
  category: string;
  color: string;
  projectName: string;
  createdDate: string;
  decription: string;
  status: boolean;
  userid : number;
  worktypeid : number;
};

export default function Index(props: ICard) {
  const dispatch = useAppDispatch();

  const handleDeleteJob = () => {
    dispatch(deletejob(props.id));
  }


  const handleUpdateJobStatu = () => {
    let requestPayload : any = {
      jobId : props.id,
      projectName: props.projectName,
      description: props.decription,
      status : !props.status,
      userId: props.userid,
      workTypeId: props.worktypeid
    }

    dispatch(updatejobstatus(requestPayload));
  }

  return (
    <Card sx={{ width: 600, boxShadow: "0 4px 7px rgba(0,0,0,0.16)" }}>
      <CardContent>
        <Chip label={props.category} color="warning" variant="outlined" />
        <Typography variant="h5" component="div">
          {props.projectName}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.createdDate}
        </Typography>
        <Typography variant="body2">{props.decription}</Typography>
      </CardContent>
      <CardActions>
        {props.status === false ? (
          <Button size="small" onClick={handleUpdateJobStatu} color="success" endIcon={<CheckIcon />}>
            Bitir
          </Button>
        ) : (
          <Button size="small" onClick={handleUpdateJobStatu} color="warning" endIcon={<PlayArrowIcon />}>
            İşe Başla
          </Button>
        )}
      </CardActions>
      <IconButton
            aria-label="delete"
            size="large"
             onClick={handleDeleteJob}
          >
            <DeleteIcon />
          </IconButton>
    </Card>
  );
}
