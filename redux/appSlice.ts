import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { act } from "@testing-library/react";
import { JobsModel } from "../models/JobsModel";
import { UserDetailModel } from "../models/UserDetailModel";
import { getAllJob, getUser, Login,updatejobstatus,deletejob,updateUser } from "../services/api";
import { tokenParse } from "../utils";
import type { RootState } from "./store";

type User = {
    email: String
    password: String | Number
}

type InitialState = {
    isLogin: Boolean,
    errorMessage: string,
    jobs: Array<any>,
    userdetail: Array<any>,
    userData : any
}


const initialState: InitialState = {
    isLogin: false,
    errorMessage: "",
    jobs: [],
    userdetail:[],
    userData:{}
   
}

export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        // signIn: (state, actions: PayloadAction<User>) => {
        //     if (actions.payload.email === "admin" && actions.payload.password === "123456") {
        //         localStorage.setItem("user", JSON.stringify(actions.payload));
        //         state.isLogin = true;
        //     }
        // },
        checkLogin: (state) => {
            if(sessionStorage.getItem("token")?.length){
                state.isLogin = true;
                state.userData = tokenParse(sessionStorage.getItem("token"))
                console.log(state.userData);
            }else{
                state.isLogin = false;
            }
        },
        clearErrors:(state)=>{
            state.errorMessage = ""
         }
    },
    extraReducers: (builder) => {
        builder.addCase(Login.fulfilled, (state:any,action:any) => {
             state.isLogin = true;
             sessionStorage.setItem("token", action.payload.token);
            
        });
        builder.addCase(Login.rejected, (state:any,action:any) => {
            state.errorMessage = "Email veya şifre yanlıştır."
        });
        builder.addCase(getAllJob.fulfilled, (state:any,action:any) => {
           state.jobs = JobsModel.mapJobs(action.payload)
           console.log(action.payload);

        });
        builder.addCase(getAllJob.rejected, (state:any,action:any) => {
            console.log(action)
        });

        builder.addCase(getUser.fulfilled, (state:any,action:any) => {
            state.userdetail = UserDetailModel.mapUserDetail(action.payload)
            console.log(action.payload);
 
         });
         builder.addCase(getUser.rejected, (state:any,action:any) => {
            console.log(action.payload)
        });
        builder.addCase(updatejobstatus.fulfilled,(state:any,action:any) =>{
            state.jobs = JobsModel.mapJobs(action.payload)
        });
        builder.addCase(deletejob.fulfilled,(state:any,action:any) =>{
            state.jobs = JobsModel.mapJobs(action.payload)
        });
        builder.addCase(updateUser.fulfilled,(state:any,action:any) =>{
            state.jobs = JobsModel.mapJobs(action.payload)
        });

    }
});

export default appSlice.reducer;
export const { checkLogin , clearErrors} = appSlice.actions;
