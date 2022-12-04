import React, { Fragment, useState, useEffect } from "react";
import { Container, Stack, TextField, Button } from "@mui/material";
import NavigationBar from "../components/Navigation/NavigationBar";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import {  checkLogin, clearErrors } from "../redux/appSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useNavigate } from "react-router-dom";
import {Login} from "../services/api";

interface IUserData {
  email: String;
  password: String | Number;
}

export default function SignIn() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {isLogin,errorMessage} = useAppSelector((state) => state.app);

  const [userData, setUserData] = useState<IUserData | any>({
    email: "",
    password: "",
  });
useEffect(() =>{
if(errorMessage && errorMessage.length > 0){
  alert(errorMessage)
  dispatch(clearErrors())
}
},[errorMessage]) 
  const handleLogin = () => {
    dispatch(Login(userData))
  };

  useEffect(() => {
    if (isLogin) {
      navigate("/");
    }
  }, [isLogin]);

  useEffect(() => {
    dispatch(checkLogin());
  }, [dispatch]);

  return (
    <Fragment>
      <Container>
        <NavigationBar />
        <Stack
          mt={15}
          direction="column"
          gap={4}
          justifyContent="center"
          alignItems="center"
        >
          <TextField
            id="email"
            label="E-mail"
            variant="outlined"
            value={userData?.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
            sx={{ width: 500 }}
          />
          <TextField
            id="password"
            label="Şifre"
            type="password"
            value={userData?.password}
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
            variant="outlined"
            sx={{ width: 500 }}
          />
          <Button
            variant="contained"
            endIcon={<LockOpenIcon />}
            onClick={handleLogin}
          >
            Giriş Yap
          </Button>
        </Stack>
      </Container>
    </Fragment>
  );
}
