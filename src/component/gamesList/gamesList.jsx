import React, { useState, useEffect } from "react"
import { Image, Section, Subtitle, Title } from "./styled"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import { Grid } from "@mui/material"
import { Container } from "@mui/system"
import { useDispatch, useSelector } from "react-redux"
import { getGameList } from "../../store/actions/gameActions"
import axios from "../../utils/axios"
import HoverVideoPlayer from "react-hover-video-player"
import { ImageAspectRatioRounded } from "@mui/icons-material"
import Link from "next/link"

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
      <Section id='games-list'>
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
            <Link href='/apps/game'>
              <Card sx={{ maxHeight: 270, backgroundColor: "#1e212e" }}>
                <HoverVideoPlayer
                  videoSrc='https://www.youtube.com/embed/fhOLg3vL_sI'
                  style={{
                    // Make the image expand to cover the video's dimensions
                    width: "305px",
                    height: "160px",
                    padding: "2rem 2rem 0",
                    borderRadius: "5%",
                  }}
                  pausedOverlay={
                    <Image src='/assets/c-rock-paper-scissor.png' alt='' />
                  }
                  loadingOverlay={
                    <div className='loading-overlay'>
                      <div className='loading-spinner' />
                    </div>
                  }
                />
                {/* <Image src='/assets/c-rock-paper-scissor.png'></Image> */}
                {/* <Video>
                <source src="https://www.youtube.com/embed/fhOLg3vL_sI" type="video/mp4" />
                </Video> */}
                <CardContent>
                  <div>
                    <Subtitle>Rock Paper Scissor</Subtitle>
                  </div>
                </CardContent>
              </Card>
            </Link>
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
