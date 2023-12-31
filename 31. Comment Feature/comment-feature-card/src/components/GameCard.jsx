import React from 'react'
import '@coreui/coreui/dist/css/coreui.min.css'
import { CCard } from '@coreui/react'
import { CCardImage } from '@coreui/react'
import { CCardBody } from '@coreui/react'
import { CCardTitle } from '@coreui/react'
import { CCardText } from '@coreui/react'
import { CButton } from '@coreui/react'
import { Typography,Rating } from '@mui/material'
const GameCard = ({ game, openModal, setOpenModal, setCurrentGame, currentGame }) => {
  let star = 0;
  if(game.comments.length > 0){
    let sum = 0;
    game.comments.forEach((comment)=>{
      sum += Number(comment.star);
    });
    star = sum / game.comments.length;
  }
  return (
    <CCard className='col-3 m-5'>
      <CCardImage style={{ height: '400px', objectFit: 'cover', objectPosition: '0% 0%' }} orientation="top" src={game.image} />
      <CCardBody>
        <CCardTitle>{game.name}</CCardTitle>
        <CCardText style={{ height: '190px', overflow: 'hidden' }}>
          {game.description}
        </CCardText>
        <CCardText>
          <Typography component="legend">Rating(Read only)</Typography>
          <Rating name="read-only" value={star} readOnly />
        </CCardText>
        <div className='d-flex justify-content-center '>
          <CButton onClick={() => { setOpenModal(true); setCurrentGame(currentGame) }}>Comment something</CButton>
        </div>

      </CCardBody>
    </CCard>
  )
}

export default GameCard