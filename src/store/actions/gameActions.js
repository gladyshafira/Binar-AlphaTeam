import axios from '../../utils/axios'
import { GET_GAMELIST } from '../type/gamelistType'

export const getGameList = () => async (dispatch) => {
  try {
    const { data } = await axios.get('/game')
    dispatch({
      type: GET_GAMELIST,
      gameList: data.data,
    })
  } catch (error) {
    console.log(error)
  }
}

const [data, setData] = useState([])
  useEffect(() => {
    getData()
  }, [])
  const getData = async () => {
    const { data } = await axios.get('http://localhost:4000/api/game')
    setData(data.data)
  }