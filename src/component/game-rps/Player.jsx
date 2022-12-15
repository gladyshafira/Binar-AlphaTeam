import React, { useEffect, useState } from "react"

const Player = ({ myChoice, pcChoice, gameResult }) => {
  return (
    <>
      {gameResult === "" ? (
        <h4>Select a Choice</h4>
      ) : (
        <h4>Players Choice: {myChoice}</h4>
      )}
    </>
  )
}

export default Player

/*
 my choice:{myChoice} <br />
      pcChoice choice:{pcChoice} <br />
      Result:
      {gameResult == "win" && <h2>You Win</h2>}
      {gameResult == "lose" && <h2>You lose</h2>}
      {gameResult == "draw" && <h2>Draw</h2>}
      <div onClick={() =>reset()}>
        Play Again
      </div>

*/
