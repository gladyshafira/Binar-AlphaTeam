import styled, { createGlobalStyle } from "styled-components";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #0b0e1c !important;
    background-size: cover;
    background-repeat: no-repeat;
    height: 100%;
    width: 100%;
  }
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Overpass:wght@100;400;500&display=swap');
  h1,
  h2,
  h3,
  h4,
  span,
  text {
    color: white;
    font-family: 'Poppins', sans-serif;
  }
`;
export const Game = styled.div`
  height: 100%;
  justify-content: space-between !important;
`;

export const Wrapper = styled(Grid)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 5em 3em 3em 3em;
  width: 100%;
  height: 100%;
`;

export const Row = styled(Grid)`
  background-color: #575b81;
  border-width: 5px !important;
  border-radius: 15px;
  margin: 0;
  margin-top: 2em
  padding: 0 0em;
  height: 30em;
  width: 50vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 600px) {
    flex-direction: column;
  }
  @media (max-width: 900px) {
    flex-direction: column-reverse !important;
    height: 80vh;
    width: 100%;
  }
  @media (max-width: 1200px) {
    flex-direction: column;
  }
  @media (max-width: 1536px) {
    flex-direction: row;
  }
`;

export const Col = styled(Grid)`
  display: flex;
  flex-direction: column;
  justify-content: center !important;
  align-items: center !important;
  @media (max-width: 600px) {
    flex-direction: column;
  }
  @media (max-width: 900px) {
    flex-direction: column;
    height: 100vh;
    width: 100%;
  }
  @media (max-width: 1200px) {
    flex-direction: column;
  }
  @media (max-width: 1536px) {
    flex-direction: column;
  }
`;

export const PlayerChoice = styled(Grid)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 60vh;
  justify-content: space-between !important;
  @media (max-width: 900px) {
    flex-direction: row !important;
    justify-content: center !important;
    height: 100%;
    width: 100%;
  }
`;

export const PcChoice = styled(Grid)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 60vh;
  justify-content: space-between !important;
`;

export const ResetRow = styled(Grid)`
  padding: 1.25em;
`;
