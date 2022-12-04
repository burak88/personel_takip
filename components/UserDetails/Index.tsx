import React, { Fragment,useEffect,useState } from "react";
import {
  Box,
TextField,
Button
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
 import Input from '@mui/material/Input';
import { updateUser } from "../../services/api";

type IUser = {
    id : number;
    name:string;
    surname: string;
    email:string ;
    password: string ;
    role: number;
};


export default function Index(props: IUser) {
  const dispatch = useAppDispatch();
  const [userData, setUserData] = useState<any>({
    userId: props.id,
    name : props.name,
    surname: props.surname,
    email: props.email,
    roleId: props.role,
    password: props.password
  })
  const handleUserUpdate = () => {
 
    dispatch(updateUser(userData)); 
  }
  const handleChange = (e:any,type:string) => {
    setUserData((prevState:any) => ({
      ...prevState,
      [type]:e.target.value
    }))
  }

  return (
  //   <Box
  //   component="form"
  //   sx={{
  //     '& > :not(style)': { m: 1 },
  //   }}
  //   noValidate
  //   autoComplete="off"
  // >
  //   <Input defaultValue={props.name} onChange={(e:any) => handleChange(e,"name")}  />
  //   <Input defaultValue={props.surname} onChange={(e:any) => handleChange(e,"surname")} />
  //   <Input defaultValue={props.email} onChange={(e:any) => handleChange(e,"email")}  />
  //   <Input defaultValue={props.password}  onChange={(e:any) => handleChange(e,"password")}/>
  //   <Button variant="contained"  onClick={()=>handleUserUpdate()} endIcon={<SendIcon />}>
  //           Güncelle
  //        </Button>
  // </Box>

     <Box
       component="form"
      sx={{
         '& .MuiTextField-root': { m: 1, width: '25ch' },
       }}
       noValidate
       autoComplete="off"
     >
       <div>
         <TextField
           label="İsim"
           defaultValue={props.name} onChange={(e:any) => handleChange(e,"name")}
           variant="filled"
         />
          <TextField
           label="Soyisim"
           defaultValue={props.surname} onChange={(e:any) => handleChange(e,"surname")}
           variant="filled"
         />
         <TextField
           label="Email"
           defaultValue={props.email} onChange={(e:any) => handleChange(e,"email")}
           variant="filled"
         />
         <TextField
           label="Şifre"
           type="password"
           defaultValue={props.email} onChange={(e:any) => handleChange(e,"password")}
           variant="filled"
         />
         <Button variant="contained"  onClick={()=>handleUserUpdate()} endIcon={<SendIcon />}>
             Güncelle
           </Button>
       </div>
     </Box>
    
  );
}
