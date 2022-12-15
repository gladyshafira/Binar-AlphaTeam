import axios from '../../utils/axios'
import { GET_PROFILE } from '../type/authType'
import Router from 'next/router'
import { toast } from 'react-toastify'
export const getProfile = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`/me`)
    dispatch({
      type: GET_PROFILE,
      profile: data.user.username,
    })
  } catch (error) {
    console.log(error)
  }
}

export const doLogin = (body) => async () => {
  try {
    const { data } = await axios.post('/login', body)
    localStorage.setItem('_q', data.data.accessToken)
    Router.push('/')
  } catch (error) {}
}
export const doRegister = async (body) => {
  try {
    await axios.post('/register', body)
    toast.success('silahkan login')
  } catch (error) {
    toast.error(error.message)
  }
}
