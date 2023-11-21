import React from 'react'
import '@coreui/coreui/dist/css/coreui.min.css'
import { CCard } from '@coreui/react'
import { CCardImage } from '@coreui/react'
import { CCardBody } from '@coreui/react'
import { CCardTitle } from '@coreui/react'
import { CCardText } from '@coreui/react'
import { CButton } from '@coreui/react'
const GameCard = ({  game,openModal,setOpenModal,setCurrentGame,currentGame }) => {
  return (
    <CCard className='col-3 m-5'>
      <CCardImage style={{height:'400px',objectFit:'cover',objectPosition:'0% 0%'}} orientation="top" src={game.image} />
      <CCardBody>
        <CCardTitle>{game.name}</CCardTitle>
        <CCardText style={{ height: '190px', overflow: 'hidden' }}>
          {game.description}
        </CCardText>
        <div className='d-flex justify-content-center '>
        <CButton onClick={()=>{ setOpenModal(true);setCurrentGame(currentGame)}}>Comment something</CButton>
        </div>
        
      </CCardBody>
    </CCard>
  )
}

export default GameCard