import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";
import { Button, TextField, Avatar } from "@mui/material/";

import React, { useState, useEffect } from "react";
import {
  TxtField,
  ProfileContainer,
  EditProfileBtn,
  EditProfileForm,
  EditAvatarForm,
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

  const [username, setUsername] = useState(profile);
  const [userEmail, setEmail] = useState(userInfo);
  const [firstName, setFirstName] = useState(
    userInfo ? userInfo.first_name : ""
  );
  const [lastName, setLastName] = useState(userInfo ? userInfo.last_name : "");
  const [avatarUrl, setavatar] = useState(userInfo ? userInfo.avatar : "");
  const handleChange = (e) => {
    let { name, state } = e.target;
    if (e.target.name === "avatar") {
      state = e.target.files[0];
      // setValue({ avatarPreview: createPreviewImage(value) });
    } else {
      state = e.target.value;
    }
    setState({ ...state, [name]: state });
  };
  const createPreviewImage = (file) => URL.createObjectURL(file);
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
            <Input
              type="file"
              name="avatar"
              id="avatar"
              accept="image/*"></Input>
            <EditAvatarForm>
              <TxtField
                id="avatar"
                label="Avatar URL"
                name="avatar"
                variant="filled"
                onChange={handleChange}></TxtField>
              <EditProfileBtn
                variant="outlined"
                sx={{ ml: 5 }}
                onClick={submitAvatarUrl}>
                Change Avatar
              </EditProfileBtn>
            </EditAvatarForm>
          </Grid>
          <Grid item columns={{ xs: 2, sm: 4, md: 4 }} sx={{ p: 5 }}>
            <EditProfileForm>
              <TxtField
                id="username"
                label="Username"
                name="username"
                variant="filled"
                onChange={(e) => setUsername(e.target.value)}></TxtField>
              <TxtField
                id="email"
                label="Email"
                name="email"
                variant="filled"
                onChange={handleChange}></TxtField>
              <TxtField
                required
                id="firstName"
                label="First Name"
                name="first_name"
                variant="filled"
                onChange={(e) => setFirstName(e.target.value)}></TxtField>
              <TxtField
                required
                id="lastName"
                label="Last Name"
                name="last_name"
                variant="filled"
                onChange={(e) => setLastName(e.target.value)}></TxtField>
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