import React, {useState, useEffect} from 'react'
import PlayerDetails from '../players/PlayerDetails'
import GrossBudget from '../GrossBudget/GrossBudget'
import axios from 'axios';

function TradePlayer() {
    let [players, setPlayers] = useState([]);
    let [playerCart, setPlayerCart] = useState([])

    let addToList = (pl) => {
        let newPlayer = [...playerCart, pl]
        setPlayerCart(newPlayer)
    }

    useEffect(() =>{
        axios.get('https://api.mocki.io/v1/24b8fe41')
             .then((res) =>{
                let response = res.data;
                let data = response.slice(0, 10)
                setPlayers(data)
             })
    }, [])

    return (
        <div className="row">
            <div className="col-8 bg-secondary pt-3">
                {players.map((player) => {
                    return <span key={player.id}><PlayerDetails addToList={addToList} playerInfo={player}/></span>
                })}
            </div>
            <div className="col-4 bg-info pt-3">
                <GrossBudget playerCart={playerCart}/>
            </div>
        </div>
    )
}

export default TradePlayer
