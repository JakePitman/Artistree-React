import React from 'react'
import ArtCard from './ArtCard'


const ArtPage = (props) => {

    return (
        <div>
            <div className="art-page">
                {props.arts.map((entry) => {
                    return <ArtCard onDelete={props.onDelete} key={entry._id} idName={entry._id} title={entry.title} source={entry.url} />
                })}
                
            </div>
            <div>
                <form className="add-art-form" onSubmit={props.onClick}>
                    <input name="title" placeholder="title" />
                    <input name="url" placeholder="url" />

                    <button className="add-art-button" >Add Art</button>
                </form>
            </div>
        </div>
    )
}

export default ArtPage


