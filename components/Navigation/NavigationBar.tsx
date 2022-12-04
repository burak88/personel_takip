import React, { useState, useEffect } from "react";
import {
  AppBar,
  Typography,
  Badge,
  Avatar,
  ListItemIcon,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import * as Styled from "./NavigationBar.styles";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { checkLogin } from "../../redux/appSlice";
import { useNavigate } from "react-router-dom";

export default function NavigationBar() {
  const navigate = useNavigate();
  const isLogin = useAppSelector((state) => state.app.isLogin);
  const dispatch = useAppDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    dispatch(checkLogin());
    navigate("/giris-yap")
  };

  return (
    <AppBar position="fixed">
      <Styled.MenuBar>
        <Typography variant="h6" component="div">
          Personel Takip
        </Typography>
        {isLogin ? (
          <Styled.Icons>
            <Link to="/islerim">
              <Button color="inherit" variant="text">
                İş Takip
              </Button>
            </Link>
            <Avatar
              onClick={handleClick}
              alt="Cindy Baker"
              sx={{ width: "32px", height: "32px", objectFit: "cover" }}
              src="https://media-exp1.licdn.com/dms/image/D4D35AQGZsmV_DWeitA/profile-framedphoto-shrink_200_200/0/1665330388147?e=1668942000&v=beta&t=lj2xKz8EoRvhErc6HyhMx3rh83D8hvncgzhscqlYwcg"
            />
          </Styled.Icons>
        ) : (
          <Styled.Icons>
            <Link to="/giris-yap">
              <Button color="inherit" variant="text">
                Giriş Yap
              </Button>
            </Link>
          </Styled.Icons>
        )}
      </Styled.MenuBar>
      {isLogin && (
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <Link to="/profilim">
            <MenuItem>
              <ListItemIcon>
                <AccountCircleIcon fontSize="small" />
              </ListItemIcon>
              Profilim
            </MenuItem>
          </Link>
          <MenuItem onClick={handleLogout}>
            <ListItemIcon>
              <LogoutIcon fontSize="small" />
            </ListItemIcon>
            Çıkış Yap
          </MenuItem>
        </Menu>
      )}
    </AppBar>
  );
}
