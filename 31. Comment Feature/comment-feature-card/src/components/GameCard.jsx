import React from 'react'
import '@coreui/coreui/dist/css/coreui.min.css'
import { CCard } from '@coreui/react'
import { CCardImage } from '@coreui/react'
import { CCardBody } from '@coreui/react'
import { CCardTitle } from '@coreui/react'
import { CCardText } from '@coreui/react'
import { CButton } from '@coreui/react'
const GameCard = ({ game }) => {
  return (
    <CCard style={{ width: '18rem',margin:'20px' }}>
      <CCardImage orientation="top" src={game.image} />
      <CCardBody>
        <CCardTitle>{game.name}</CCardTitle>
        <CCardText style={{ height: '190px', overflow: 'hidden' }}>
          {game.description}
        </CCardText>
        <CButton href="#">Comment something</CButton>
      </CCardBody>
    </CCard>
  )
}

export default GameCard