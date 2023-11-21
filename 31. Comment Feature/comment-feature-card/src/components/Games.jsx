import React, { useEffect, useState } from 'react'
import { getGames } from '../api/games_request'
import GameCard from './GameCard'

const Games = () => {
  const [games,setGames] = useState([])
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
    {games.map((game,index)=>{
        return <GameCard key={index} game={game} />
      })}

    </div>
     
    </>
  )
}

export default Games