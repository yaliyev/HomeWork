import React, { useEffect, useState } from 'react'
import { getGames } from '../api/games_request'
import GameCard from './GameCard'
import ComponentForm from './ComponentForm'
import { Alert,Snackbar } from '@mui/material'


const Games = () => {
  const [games,setGames] = useState([])
  const [openModal, setOpenModal] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [currentGame,setCurrentGame] = useState(null);
  useEffect(()=>{
    async function loadData(){
      const data = await getGames();
      setGames(data);
    }
      
    loadData();
  },[])
  return (
    <>
    <div className='row'>
    <Snackbar openAlert={openAlert} autoHideDuration={4000} onClose={()=>{setOpenAlert(false)}}>
        <Alert onClose={()=>{setOpenAlert(false)}} severity="success" sx={{ width: '100%' }}>
          Comment added
        </Alert>
      </Snackbar>
      <ComponentForm openAlert={openAlert} setOpenAlert={setOpenAlert} currentGame={currentGame}  openModal={openModal} setOpenModal={setOpenModal}/>
    {games.map((game,index)=>{
        return <GameCard setCurrentGame={setCurrentGame} currentGame={game} openModal={openModal} setOpenModal={setOpenModal} key={index} game={game} />
      })}

    </div>
     
    </>
  )
}

export default Games