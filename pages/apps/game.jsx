import { useEffect, useState } from "react"
import * as Components from "./rps.styled"
import Play from "../../src/component/game-rps/Play"
import { useSelector } from "react-redux"

function GameRps() {
  const [myChoice, setMyChoice] = useState("")
  const [score, setScore] = useState(0)
  const profile = useSelector((state) => state.authReducer.profile)
  return (
    <Components.Container>
      <Play setMyChoice={setMyChoice} />
    </Components.Container>
  )
}
export default GameRps
