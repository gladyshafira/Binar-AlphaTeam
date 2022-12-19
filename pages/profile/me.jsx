import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";
import { Button, TextField, Avatar } from "@mui/material/";
import EditIcon from "@mui/icons-material/Edit";

import React, { useState, useEffect } from "react";
import {
  TxtField,
  ProfileContainer,
  EditProfileBtn,
  EditProfileForm,
  EditProfileLinkBtn,
} from "../../styles/me.module";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../src/store/actions/authActions";
import {
  updateProfile,
  changeAvatar,
} from "../../src/store/actions/userActions";

import { Title, Input } from "../../styles/me.module";
import Modal from "../../src/component/profile/avatarUrl";
import withAuth from "../../src/withAuth";

function Me() {
  const [state, setState] = useState({
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

  console.log(`userinfo is: ${profile}`);

  const changeProfile = (e) => {
    try {
      dispatch(updateProfile(username, email, first_name, last_name));
    } catch (error) {}
  };
  const [showModal, setShowModal] = useState(false);
  const submitAvatarUrl = async () => {
    const body = {
      avatar: state.avatar,
    };
    try {
      dispatch(changeAvatar(body));
    } catch (error) {}
  };

  return (
    <React.Fragment>
      <Modal onClose={() => setShowModal(false)} show={showModal}></Modal>
      <ProfileContainer maxWidth="sm">
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
                disabled
                id="username"
                label="Username"
                name="username"
                value={profile || ""}
                variant="filled"></TxtField>
              <TxtField
                disabled
                id="email"
                label="Email"
                name="email"
                value={email || ""}
                variant="filled"></TxtField>
              <TxtField
                disabled
                id="firstName"
                label="First Name"
                name="first_name"
                value={first_name || ""}
                variant="filled"></TxtField>
              <TxtField
                disabled
                id="lastName"
                label="Last Name"
                name="last_name"
                value={last_name || ""}
                variant="filled"></TxtField>

              <EditProfileLinkBtn
                href="/profile/edit"
                variant="outlined"
                endIcon={<EditIcon />}>
                Edit Profile
              </EditProfileLinkBtn>
            </EditProfileForm>
          </Grid>

          <Grid item xs="auto"></Grid>
        </Grid>
      </ProfileContainer>
    </React.Fragment>
  );
}
export default withAuth(Me);
