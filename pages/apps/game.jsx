import { useEffect, useState } from "react";
import * as Components from "./rps.styled";
import Play from "../../src/component/game-rps/Play";

export default function GameRps() {
  const [myChoice, setMyChoice] = useState("");
  const [score, setScore] = useState(0);
  return (
    <Components.Container>
      <Play setMyChoice={setMyChoice} />
    </Components.Container>
  );
}
