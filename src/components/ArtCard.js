import React from 'react'

const ArtCard = (props) => {
    return (
            <div className="art-card">
                <h2 className="art-card-title">{props.title}</h2>
                <img src={props.source} alt={"surf's up Pikachu!"}/>
                <button onClick={props.onDelete} id={props.idName}>Delete</button>
            </div>
    )
}

export default ArtCard
