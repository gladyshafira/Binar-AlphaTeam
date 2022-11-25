import React, { useState, useEffect } from 'react'
// import image from '../../assets/c-rock-paper-scissor.png'
import { Image, Section, Subtitle, Title } from './styled'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { Grid } from '@mui/material'
import { Container } from '@mui/system'
// import axios from '../../utility/axios'
// import { Link } from 'react-router-dom'
import Link from 'next/link'

export default function GamesList() {
  // const [data, setData] = useState([])
  // useEffect(() => {
  //   getData()
  // }, [])
  // const getData = async () => {
  //   const { data } = await axios.get('http://localhost:5000/game/find')
  //   setData(data.data)
  // }

  return (
    <Container>
      <Section id="games">
        <Title>Games List</Title>
        <Grid
          container
          spacing={{ xs: 1, md: 2 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          justifyContent='center'
          alignItems='center'>
            {/* {data.map((item, index) => {
                return ( */}
            <Grid
              item
              // key={index}
              xs={6}
              sm={6}
              md={4}
              lg={4}
              xl={4}
              justifyContent='center'
              alignItems='center'>
            <Link href="/apps/game">
              <Card
                sx={{ maxHeight: 270, backgroundColor: '#1e212e' }}>
                
                {/* <Image src={item?.icon}></Image> */}
                <Image src='/assets/c-rock-paper-scissor.png'></Image>
                <CardContent>
                  <div>
                    {/* <Subtitle>{item?.name}</Subtitle> */}
                    <Subtitle>Rock Paper Scissor</Subtitle>
                  </div>
                </CardContent>
              </Card>
              </Link>
            </Grid>
            {/* )
        })} */}
        </Grid>
      </Section>
    </Container>
  )
}
