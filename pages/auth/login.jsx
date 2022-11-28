import React, { useState, useEffect } from "react";
import * as Components from "./auth.styled";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Button, TextField } from "@mui/material/";
import { useDispatch, useSelector } from "react-redux";
import { doLogin, getProfile } from "../../src/store/actions/authActions";
import Router from "next/router";

export default function Login() {
  const [value, setValue] = useState({
    username: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  useEffect(() => {
    const data = localStorage.getItem("_q");
    //console.log(token);
    if (data) {
      Router.push("/");
    }
  }, []);

  const handleChange = (name) => (e) => {
    setValue({ ...value, [name]: e.target.value });
  };
  // const handleLogin = async () => {
  //   try {
  //     const { data } = await axios.post("http://localhost:4000/user/login", {
  //       username: value.username,
  //       password: value.password,
  //     });
  //     localStorage.setItem("_q", data.data.token);
  //     window.location.reload();
  //   } catch (error) {
  //     toast.error("Login error!");
  //   }
  // };
  const handleLogin = async () => {
    const body = {
      username: value.username,
      password: value.password,
    };
    try {
      await dispatch(doLogin(body));
    } catch (error) {
      toast.error(`Login error: ${error}`);
    }
  };
  return (
    <Components.Container>
      {/* <Link to='/'>
        <img src={logo} alt='logo' className={style.logo} />
      </Link> */}
      <ToastContainer />
      <Components.FormContainer>
        <Components.LoginContainer>
          <Components.LoginForm>
            <Components.BtnGoogleLogin variant="contained">
              Sign In with Google
            </Components.BtnGoogleLogin>
            <Components.Rectangle>or</Components.Rectangle>
            <Components.Input
              placeholder="Username"
              type="string"
              onChange={handleChange("username")}
              required
            />
            <Components.Input
              placeholder="Password"
              type="password"
              onChange={handleChange("password")}
              required
            />
            <Components.BtnLogin variant="contained" onClick={handleLogin}>
              Sign In →
            </Components.BtnLogin>
            <p>
              Not a member?&nbsp;
              <Components.CreateAccount href="/auth/register">
                Create an account.
              </Components.CreateAccount>
            </p>
          </Components.LoginForm>
        </Components.LoginContainer>
      </Components.FormContainer>
    </Components.Container>
  );
}
