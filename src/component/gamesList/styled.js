import style from 'styled-components'
// import { Link } from 'react-router-dom'
import { styled } from '@mui/material/styles';
import { Container } from '@mui/system';
import { Card } from '@mui/material';

export const CustomContainer = styled(Container)`
  height: 120vh;

@media (max-width: 600px) {
  height:170vh;
}

@media (max-width: 768px) {
  height:170vh;
}

@media (max-width: 900px) {
  height:170vh;
}
  `

export const Section = style.section`
  display: flex;
  flex-direction: column;
  `

// export const CustomCard = styled(Card)`
// @media (max-width: 600px) {
//   width:170vh;
// }

// @media (max-width: 768px) {
//   width:170vh;
// }
// `

export const Title = style.h2`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 180.5%;
  color: #ffffff;
  margin-top: 0;
`

export const Subtitle = style.h4`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 187.5%;
  color: white;
  text-align: center;
  margin: 0;
`

export const Image = style.img`
  justify-content: center;
  align-items: center;
  width: 305px;
  height: 172px;
  padding: 2rem 2rem 0;
  border-radius: 5%;
`

export const PlayButton = style.a`
  background-color: orange;
  color: white;
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border-radius: 10px;
  padding: 11px 20px;
`
