import React, { useState } from 'react'

import GameCard from './GameCard'

const Games = () => {
  const [games,setGames] = useState([])
  return (
    <>
       <GameCard game={ {name:"PLAYERUNKNOWN'S BATTLEGROUNDS",image:"https://wstatic-prod.pubg.com/web/live/static/og/img-og-pubg.jpg",description:"PUBG: Battlegrounds (previously known as PlayerUnknown's Battlegrounds) is a battle royale game developed by PUBG Studios and published by Krafton. The game, which was inspired by the Japanese film Battle Royale (2000), is based on previous mods created by Brendan 'PlayerUnknown' Greene for other games, and expanded into a standalone game under Greene's creative direction. It is the first game in the PUBG Universe series."}  } />
    </>
  )
}

export default Games