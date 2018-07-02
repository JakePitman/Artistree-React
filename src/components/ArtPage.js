import React from 'react'
import ArtCard from './ArtCard'


const ArtPage = (props) => {

    return (
        <div className="art-page">
            {props.entries.map((entry) => {
                return <ArtCard title={entry.title} source={entry.source} />
            })}
        </div>
    )
}

export default ArtPage


