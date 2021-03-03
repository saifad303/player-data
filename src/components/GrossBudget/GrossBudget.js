import React from 'react'

function GrossBudget({ playerCart }) {
    let totalPlayer = playerCart.length;
    console.log(playerCart);

    let totalAmount = playerCart.reduce((total, player) =>{
        let salary = Number(player.salary.slice(1))

        return total + salary
    },0)

    return (
        <>
            <div className="card" style={{ width: '18rem' }}>
                <div className="card-body">
                    <p><b>Number of players: </b>{ totalPlayer }</p>
                    <p><b>Total Amount: </b>${totalAmount.toFixed(2)}</p>
                </div>
            </div>
        </>
    )
}

export default GrossBudget
