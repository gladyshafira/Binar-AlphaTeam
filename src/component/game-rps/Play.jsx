import React, { useEffect, useState } from "react";
import * as Components from "./gamerps.styled";
import Com from "./Com";
import Scoreboard from "./Scoreboard";
import Result from "./Result";
import * as Choice from "./choice.styled";
import { Reset } from "./Reset";
import Image from "next/image";
import Player from "./Player";
import axios from "../../utils/axios";
import { useDispatch, useSelector } from "react-redux";
import { updateScore, UPDATE_SCORE } from "../../store/actions/profileActions";
import { getProfile, GET_PROFILE } from "../../store/actions/authActions";

export default function Play() {
  let [game, setGame] = useState({
    myChoice: "",
    pcScore: 0,
    userScore: 0,
    score: 0,
    round: 0,
    pcChoice: "",
    gameResult: "",
  });

  const reset = () => {
    setGame({
      ...game,
      myChoice: "",
      round: 0,
      userScore: 0,
      pcScore: 0,
      score: 0,
      pcChoice: "",
      gameResult: "",
    });
  };
  const { score, round } = game;

  const [profile, setProfile] = useState(null);

  useEffect(() => {
    getProfile();
  }, []);

  useEffect(() => {
    if (game.round == 3) {
      console.log(`This is round: ${game.round}`);
      console.log(`User Score: ${game.userScore}`);
      console.log(`pc score: ${game.pcScore}`);
      if (game.userScore > game.pcScore) {
        setGame({
          ...(game.score += 1),
          ...(game.gameResult = "congratsWin"),
        });
      } else if (game.pcScore > game.userScore) {
        setGame({
          ...(game.score -= 1),
          ...(game.gameResult = "congratsLose"),
        });
      }
      setGame({
        ...game,
      });
      // postScore(profile);
    }
    console.log(`This is a test no: ${game.round}`);
  }, [game.round]);
  // const getProfile = async () => {
  //   try {
  //     const { data } = await axios.get("http://localhost:5000/user/profile");
  //     setProfile(data);
  //   } catch (error) {
  //     console.log(error);
  //     setProfile(null);
  //   }
  // };

  // const postScore = async (profile) => {
  //   try {
  //     await axios.post(`http://localhost:5000/score/create/${profile.id}`, {
  //       user: profile.id,
  //       score: game.score,
  //       game: "636510eb4748b47a1bf72202",
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const postScore = async () => {
    const body = {
      user: profile.id,
      score: game.score,
      game: "636510eb4748b47a1bf72202",
    };
    await dispatch(updateScore(body));
  };

  const play = (e) => {
    const myChoice = e.target.dataset.id;

    const pcChoice = ["rock", "paper", "scissors"][
      Math.floor(Math.random() * 3)
    ];

    // useEffect(() => {

    // });

    if (game.round < 3) {
      if (myChoice === "rock" && pcChoice === "scissors") {
        setGame({
          ...(game.userScore += 1),
          ...(game.round += 1),
          ...(game.gameResult = "win"),
        });
      } else if (myChoice === "rock" && pcChoice === "paper") {
        setGame({
          ...(game.pcScore += 1),
          ...(game.round += 1),
          ...(game.gameResult = "lose"),
        });
      } else if (myChoice === "scissors" && pcChoice === "paper") {
        setGame({
          ...(game.userScore += 1),
          ...(game.round += 1),
          ...(game.gameResult = "win"),
        });
      } else if (myChoice === "scissors" && pcChoice === "rock") {
        setGame({
          ...(game.pcScore += 1),
          ...(game.round += 1),
          ...(game.gameResult = "lose"),
        });
      } else if (myChoice === "paper" && pcChoice === "rock") {
        setGame({
          ...(game.userScore += 1),
          ...(game.round += 1),
          ...(game.gameResult = "win"),
        });
      } else if (myChoice === "paper" && pcChoice === "scissors") {
        setGame({
          ...(game.pcScore += 1),
          ...(game.round += 1),
          ...(game.gameResult = "lose"),
        });
      } else {
        setGame({ ...(game.gameResult = "draw") });
      }
    } else {
    }

    setGame({
      ...game,
      myChoice,
      pcChoice,
    });
  };

  return (
    <>
      {/* <Navbar /> */}
      <Components.GlobalStyle />
      <Components.Wrapper>
        <Components.Row>
          <Components.Col>
            <Components.Game>
              <Components.PlayerChoice>
                <h3>Player 1</h3>
                <Choice.Icon
                  src="/assets/batu.svg"
                  data-id="rock"
                  onClick={play}
                  width="96"
                  height="92"></Choice.Icon>
                <Choice.Icon
                  src="/assets/kertas.svg"
                  data-id="paper"
                  onClick={play}
                  width="96"
                  height="92"></Choice.Icon>
                <Choice.Icon
                  src="/assets/gunting.svg"
                  data-id="scissors"
                  onClick={play}
                  width="96"
                  height="92"></Choice.Icon>
                <Player {...game}></Player>
              </Components.PlayerChoice>
            </Components.Game>
          </Components.Col>
          <Components.Col>
            <Result {...game}></Result>
          </Components.Col>

          <Components.Col>
            <Components.PcChoice>
              <Com {...game}></Com>
            </Components.PcChoice>
          </Components.Col>
        </Components.Row>
        <Components.ResetRow>
          <Reset onClick={reset} />
        </Components.ResetRow>
        <div>
          <Scoreboard score={score} round={round} />
        </div>
      </Components.Wrapper>
    </>
  );
}
