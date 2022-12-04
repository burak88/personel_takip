import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { checkLogin } from "../../redux/appSlice";
import NoAuth from "./NoAuth";

const RenderOnAuthenticated = ({ children }) => {
  const isLogin = useAppSelector((state) => state.app.isLogin);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(checkLogin());
  }, [sessionStorage.getItem("token")]);

  return isLogin ? children : <NoAuth/>;
};

export default RenderOnAuthenticated;
