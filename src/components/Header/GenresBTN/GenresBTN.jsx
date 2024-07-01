import React from 'react'
import './GenresBTN.css'

export const GenresBTN = ({ genre }) => {
 
    return (
        <>
            <button className='genreBTN'>
                {
                    genre.name
                }
               
            </button>
        </>
    )
}
