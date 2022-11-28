import React from "react";
import * as Components from "./scoreboard.styled";
import Image from "next/image";

const Scoreboard = ({ score, round }) => {
  console.log(`Score: ${score}`);
  console.log(`Round: ${round}`);
  return (
    <Components.Board>
      <Components.Logo>
        <Image src="/assets/logo.svg" width="90" height="90"></Image>
      </Components.Logo>
      <Components.ScoreBoardText>
        <div>Round: {round}</div>
      </Components.ScoreBoardText>
      <Components.ScoreBox>
        <Components.ScoreTitle>Score</Components.ScoreTitle>
        <Components.Score>{score}</Components.Score>
      </Components.ScoreBox>
    </Components.Board>
  );
};

export default Scoreboard;
