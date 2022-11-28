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

export default function Play() {
  let [game, setGame] = useState({
    myChoice: "",
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

    if (game.round < 3) {
      if (myChoice === "rock" && pcChoice === "scissors") {
        setGame({
          ...(game.score += 1),
          ...(game.round += 1),
          ...(game.gameResult = "win"),
        });
      } else if (myChoice === "rock" && pcChoice === "paper") {
        setGame({
          ...(game.score -= 1),
          ...(game.round += 1),
          ...(game.gameResult = "lose"),
        });
      } else if (myChoice === "scissors" && pcChoice === "paper") {
        setGame({
          ...(game.score += 1),
          ...(game.round += 1),
          ...(game.gameResult = "win"),
        });
      } else if (myChoice === "scissors" && pcChoice === "rock") {
        setGame({
          ...(game.score -= 1),
          ...(game.round += 1),
          ...(game.gameResult = "lose"),
        });
      } else if (myChoice === "paper" && pcChoice === "rock") {
        setGame({
          ...(game.score += 1),
          ...(game.round += 1),
          ...(game.gameResult = "win"),
        });
      } else if (myChoice === "paper" && pcChoice === "scissors") {
        setGame({
          ...(game.score -= 1),
          ...(game.round += 1),
          ...(game.gameResult = "lose"),
        });
      } else {
        setGame({ ...(game.round += 1), ...(game.gameResult = "draw") });
      }
    } else {
      postScore(profile);
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
