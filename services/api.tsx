import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { tokenParse } from "../utils";
import { IToken,DeleteJob } from "../Interfaces";


// const token:string | any = sessionStorage.getItem("token");
const api = "https://localhost:44375/api/";


export const getAllJob:any = createAsyncThunk<any>('getAllJob',async (Id) => {
     const res = await axios.get(`${api}Job/getbyid?id=${Id}`,{
         headers: {
             Authorization: `Bearer ${sessionStorage.getItem("token")}` 
         }
     });
     return res.data;
})

export const deletejob:any = createAsyncThunk<DeleteJob>('deletejob', async(jobId)=>{
    const res = await axios.delete(`${api}Job/${jobId}`,{
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}` 
        }
    });
    return res.data;
})

export const getUser = createAsyncThunk('getUser' , async () => {
    const res = await axios.get(`${api}User/getbyid?id=${tokenParse(sessionStorage.getItem("token")).Id}`,{
        headers:{
            Authorization:`Bearer ${sessionStorage.getItem("token")}`
        }
    });
    return res.data;
})


 export const updateUser:any = createAsyncThunk<any>('updateUser', async(userdata:any) =>{
    const res = await axios.put(`${api}User/update`,userdata,{
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}` 
        }
      });
      return res.data;
 })

export const updatejobstatus:any = createAsyncThunk<any>('updatejobstatus',async(jobdata:any)=>{
    const res = await axios.put(`${api}Job/update`, jobdata, {
        headers:{
            Authorization: `Bearer ${sessionStorage.getItem("token")}` 
        }
      });
      return res.data;
      
})

interface IUserData {
    email: String;
    password: String | Number;
}

export const Login = createAsyncThunk('Login' ,async (userData:IUserData) => {
    const res = await axios.post(`${api}Home/action`,userData);
    return res.data;
    
})
