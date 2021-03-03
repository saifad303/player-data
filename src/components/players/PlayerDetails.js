import React from 'react'

function PlayerDetails(props) {
    let { name, salary, url } = props.playerInfo
    return (
        <>
            <div className="card mb-3" style={{ maxWidth: '540px', backgroundColor: '#d1d1e0' }}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={url} className="card-img" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text"><b>Salary: </b>{salary}</p>
                            <p className="card-text">
                                <small className="text-muted">
                                    <button className="btn btn-success" onClick={() => props.addToList(props.playerInfo)}>Add to league</button>
                                </small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PlayerDetails
