import axios from '../../utils/axios'
import { GET_PROFILE } from '../type/authType'
import Router from 'next/router'

export const getProfile = (username) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/user/${username}`)
    console.log(data)
    dispatch({
      type: GET_PROFILE,
      profile: data.data.username,
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
