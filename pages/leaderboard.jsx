import React, { useState, useEffect } from 'react'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import { Container } from '@mui/material'
import { Title2 } from './styled'
import { styled } from '@mui/material/styles'
import { getLeaderboard } from '../src/store/actions/leaderboardActions'
import { useDispatch, useSelector } from 'react-redux'


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}))
// function createData(gameId, userId, username, score) {
//   return { gameId, userId, username, score }
// }

const rows = [
  {
    id_game: 2,
    id_user: 1,
    username: 'testimony',
    score: 90,
  },
  {
    id_game: 1,
    id_user: 1,
    username: 'testimony',
    score: 80,
  },
  {
    id_game: 4,
    id_user: 1,
    username: 'testimony',
    score: 90,
  },
  {
    id_game: 6,
    id_user: 1,
    username: 'testimony',
    score: 100,
  },
  {
    id_game: 1,
    id_user: 1,
    username: 'testimony',
    score: 50,
  },
]

  // const leaderboard = useSelector((state) => state.leaderboardActions.leaderboard)
  // const fetchLeaderboard = async () => {
  //   await dispatch(getLeaderboard(id))
  // }

  const columns = [
    {
      id: 'gameId',
      label: 'ID Game',
      minWidth: 100,
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'userId',
      label: 'ID User',
      minWidth: 100,
      format: (value) => value.toLocaleString('en-US'),
    },
    { id: 'username', label: 'Username', minWidth: 100 },
    {
      id: 'score',
      label: 'Score',
      minWidth: 100,
      format: (value) => value.toLocaleString('en-US'),
    },
  ]

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <Container>
      <Title2>Leaderboard</Title2>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label='sticky table'>
            <TableHead>
              <StyledTableRow>
                {columns.map((column) => (
                  <StyledTableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}>
                    {column.label}
                  </StyledTableCell>
                ))}
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {rows.map((item) => {
                  return (
                    <TableRow
                      // key={index}
                      >
                      <TableCell>{item.id_game}</TableCell>
                      <TableCell>{item.id_user}</TableCell>
                      <TableCell>{item.username}</TableCell>
                      <TableCell>{item.score}</TableCell>
                    </TableRow>
                  )
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component='div'
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Container>
  )
}