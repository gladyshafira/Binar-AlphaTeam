import React, { useState, useEffect } from "react";
import {
  Root,
  NavLink,
  LinkLogo,
  DivLink,
  Auth,
  ButtonSignIn,
  ButtonSignUp,
  Username,
} from "./styled";
// import axios from 'axios'
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Logout from "@mui/icons-material/Logout";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { orange } from "@mui/material/colors";
import Leaderboard from "@mui/icons-material/Leaderboard";
import { useDispatch, useSelector } from "react-redux";
import { doLogin, getProfile } from "../../store/actions/authActions";
export default function Navbar() {
  const [value, setProfile] = useState(null);
  const profile = useSelector((state) => state.authReducer.profile);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchProfile();
  }, []);
  const fetchProfile = async () => {
    await dispatch(getProfile());
  };
  // const fetchLogin = async () => {
  //   const body = {
  //     username: value.username,
  //     password: value.password,
  //   };
  //   await dispatch(doLogin(body));
  // };
  // const handleLogout = async () => {
  //   localStorage.removeItem('_q')
  //   window.location.reload()
  // }

  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const open = Boolean(anchorEl);
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  return (
    <Root>
      <LinkLogo>{profile?.name}</LinkLogo>
      <DivLink>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/#games">Game</NavLink>
        <NavLink href="/#testimony">Testimony</NavLink>
        <NavLink href="/#news">News</NavLink>
      </DivLink>
      <Auth>
        {/* {profile === null ? ( */}

        <ButtonSignIn to="/auth/login">Sign In</ButtonSignIn>
        <ButtonSignUp to="/auth/register">Sign Up</ButtonSignUp>

        {/* ) : (
          <>
            <span>
                <Tooltip title="Account settings">
                <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                >
                    <Username>{profile.username}</Username>
                    <AccountCircleOutlinedIcon sx={{ width: 32, height: 32, color: orange[500] }} />
                </IconButton>
                </Tooltip>
            </span>
            <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
            elevation: 0,
            sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
                },
                '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
                },
            },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
                <MenuItem>
                <ListItemIcon>
                    <Leaderboard fontSize="small" />
                </ListItemIcon>
                Leaderboard
                </MenuItem>
                <MenuItem>
                <ListItemIcon onClick={handleLogout}>
                    <Logout fontSize="small" />
                </ListItemIcon>
                Logout
                </MenuItem>
            </Menu>
            </>
        )} */}
      </Auth>
    </Root>
  );
}
