import React, { Fragment ,useEffect} from "react";
import NavigationBar from "../components/Navigation/NavigationBar";
import { Container, Stack, TextField, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import BreadCrumbs from "../components/BreadCrumbs/Index";
import { useAppSelector,useAppDispatch } from "../redux/hooks";
import { getUser } from "../services/api";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@mui/material";
import UserDetailBox from "../components/UserDetails/Index";


interface IUser{
  id:number;
  name:string;
  surname: string;
  email:string ;
  password: string ;
  role: number;
}

export default function Profile() {
  const dispatch = useAppDispatch()

  const {userdetail} = useAppSelector(state => state.app);
  
  useEffect(() => {
      dispatch(getUser())
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
          <BreadCrumbs name="Anasayfa" link="/" subname="Profilim" />
           <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
    >
      {userdetail.map((item: IUser, index: number) => (
            <UserDetailBox {...item} key={index} ></UserDetailBox>
          ))}
        </List>
        </Stack>
      </Container>
    </Fragment>
  );
}
