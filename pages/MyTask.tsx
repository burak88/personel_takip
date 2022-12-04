import React, { Fragment,useState,useEffect } from "react";
import NavigationBar from "../components/Navigation/NavigationBar";
import { Container, Stack } from "@mui/material";
import TaskCard from "../components/Tasks/Index";
import BreadCrumbs from "../components/BreadCrumbs/Index";
import { useAppSelector,useAppDispatch } from "../redux/hooks";
import { getAllJob } from "../services/api";

interface ICardProps {
  id: number;
  category: string;
  color: string;
  projectName: string;
  createdDate: string;
  decription: string;
  status: boolean;
  userid : number;
  worktypeid : number;
}

export default function MyTask() {
  const dispatch = useAppDispatch()

  const {jobs,userData} = useAppSelector(state => state.app);
  

  useEffect(() => {
    dispatch(getAllJob(userData.Id))
},[])

  return (
    <Fragment>
      <Container>
        <NavigationBar />
        <Stack
          mt={2}
          direction="column"
          gap={4}
          justifyContent="center"
          alignItems="center"
        >
        <BreadCrumbs name="Anasayfa" link="/" subname="İşlerim" />
          {jobs.map((item: ICardProps, index: number) => (
            <TaskCard {...item} key={index} />
          ))}
        </Stack>
      </Container>
    </Fragment>
  );
}
