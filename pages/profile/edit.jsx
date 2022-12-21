import Grid from "@mui/material/Grid";

import { Button, TextField, Avatar } from "@mui/material/";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import React, { useState, useEffect } from "react";
import {
  TxtField,
  ProfileContainer,
  EditProfileBtn,
  EditProfileForm,
  EditAvatarForm,
} from "../../styles/me.module";
import { useDispatch, useSelector } from "react-redux";

import {
  updateProfile,
  changeAvatar,
} from "../../src/store/actions/userActions";

import { Title } from "../../styles/me.module";
import withAuth from "../../src/withAuth";

function Me() {
  const [value, setValue] = useState({
    username: "",
    email: "",
    first_name: "",
    last_name: "",
    avatar: "",
    avatarPreview: "",
  });
  const dispatch = useDispatch();
  const { email, profile, avatar, first_name, last_name } = useSelector(
    (state) => state.authReducer
  );
  const userInfo = useSelector((state) => state.authReducer);

  const handleChange = (name) => (e) => {
    setValue({ ...value, [name]: e.target.value });
  };
  const createPreviewImage = (file) => URL.createObjectURL(file);

  const changeProfile = async () => {
    const body = {
      first_name: value.first_name,
      last_name: value.last_name,
      email: value.email,
      username: value.username,
    };

    try {
      await dispatch(updateProfile(body));
      console.log(body);
    } catch (error) {}
  };

  return (
    <React.Fragment>
      <ProfileContainer maxWidth="sm">
        <ToastContainer />
        <Grid
          container
          spacing={5}
          p="2 5"
          columns={1}
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{ mt: 0 }}>
          <Title>Edit Profile</Title>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            columns={{ xs: 6, sm: 6, md: 6, lg: 6, xl: 6 }}
            maxWidth="100%">
            <Avatar alt="userAvatar" src={avatar}></Avatar>
          </Grid>
          <Grid item columns={{ xs: 2, sm: 4, md: 4 }} sx={{ p: 5 }}>
            <EditProfileForm>
              <TxtField
                label="Username"
                type="string"
                onChange={handleChange("username")}
                required
                variant="filled"></TxtField>
              <TxtField
                label="Email"
                type="email"
                onChange={handleChange("email")}
                required
                variant="filled"></TxtField>
              <TxtField
                label="First name"
                type="string"
                onChange={handleChange("first_name")}
                required
                variant="filled"></TxtField>
              <TxtField
                label="Username"
                type="string"
                onChange={handleChange("last_name")}
                required
                variant="filled"></TxtField>
              <EditProfileBtn variant="contained" onClick={changeProfile}>
                Edit Profile
              </EditProfileBtn>
            </EditProfileForm>
          </Grid>

          <Grid item xs="auto"></Grid>
        </Grid>
      </ProfileContainer>
    </React.Fragment>
  );
}
export default withAuth(Me);
