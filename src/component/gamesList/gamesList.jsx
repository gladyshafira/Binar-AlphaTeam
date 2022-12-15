import React, { useState, useEffect } from 'react'
import { Image, Section, Subtitle, Title } from './styled'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import { useDispatch, useSelector } from 'react-redux'
import { getGameList } from '../../store/actions/gameActions'
import axios from '../../utils/axios'

export default function GamesList() {
  // const [gameList, setData] = useState([])
  // useEffect(() => {
  //   getData()
  // }, [])
  // const getData = async () => {
  //   const { data } = await axios.get('http://localhost:4000/api/game')
  //   setData(data.data)
  // }

  // const gameList = useSelector((state) => state.gameReducer.gameList)
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   fetchGameList()
  // }, [])
  // const fetchGameList = async () => {
  //   await dispatch(getGameList())
  // }

  return (
    <Container>
      <Section id="games-list">
        <Title>Games List</Title>
        <Grid
          container
          spacing={{ xs: 1, md: 2 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          justifyContent='center'
          alignItems='center'>
            <Grid
              item
              xs={6}
              sm={6}
              md={4}
              lg={4}
              xl={4}
              justifyContent='center'
              alignItems='center'>
            <a href="/games/rps">
              <Card
                sx={{ maxHeight: 270, backgroundColor: '#1e212e' }}>
                <Image src='/assets/c-rock-paper-scissor.png'></Image>
                <CardContent>
                  <div>
                    <Subtitle>Rock Paper Scissor</Subtitle>
                  </div>
                </CardContent>
              </Card>
              </a>
            </Grid>
        </Grid>


        {/* <Grid
          container
          spacing={{ xs: 1, md: 2 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          justifyContent='center'
          alignItems='center'>
            {gameList.map((item, index) => {
                return (
            <Grid
              item
              key={index}
              xs={6}
              sm={6}
              md={4}
              lg={4}
              xl={4}
              justifyContent='center'
              alignItems='center'>
            <a href={item?.game_url}>
              <Card
                sx={{ maxHeight: 270, backgroundColor: '#1e212e' }}>
                <Image src={item?.thumbnail_url}></Image>
                <CardContent>
                  <div>
                    <Subtitle>{item?.name}</Subtitle>
                  </div>
                </CardContent>
              </Card>
              </a>
            </Grid>
             )
        })}
        </Grid> */}
      </Section>
    </Container>
  )
}
