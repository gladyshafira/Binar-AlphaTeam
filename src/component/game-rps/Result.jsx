import React, { useEffect, useState } from "react";
import * as Components from "./result.styled";

const Result = ({ gameResult }) => {
  return (
    <>
      {gameResult == "" && <h3 className="text font-bold text-white">VS</h3>}
      {gameResult == "win" && (
        <div className="game__play">
          <Components.Result color="darkgreen">You Win</Components.Result>
        </div>
      )}
      {gameResult == "lose" && (
        <div className="game__play">
          <Components.Result color="red">You Lose</Components.Result>
        </div>
      )}
      {gameResult == "draw" && (
        <div className="game__play">
          <Components.Result color="black">Draw</Components.Result>
        </div>
      )}
    </>
  );
};

export default Result;
