import React from 'react'
import './GenresBTN.css'
import { Loding } from '../../Loding/Loding'

export const GenresBTN = ({ genre }) => {
    return (
        <>
            <button className='genreBTN'>
                <Loding />
            </button>
        </>
    )
}
