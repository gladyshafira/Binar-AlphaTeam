import { useSelector } from "react-redux"

function About() {
  const profile = useSelector((state) => state.authReducer.profile)
  return <h1>Nama saya {profile?.username}</h1>
}
export default About
