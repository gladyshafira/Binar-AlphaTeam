import { useSelector } from 'react-redux'
import withAuth from '../src/withAuth'

function About() {
  const profile = useSelector((state) => state.authReducer.profile)
  return <h1>Nama saya {profile?.username}</h1>
}
export default withAuth(About)
