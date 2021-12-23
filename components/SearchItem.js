import React from 'react'
import { tile } from "../styles/style"

export default function SearchItem({ icon, content, handleClick }) {
    return (
        <div css={tile} onClick={ handleClick }>
            <div className='tile-icon' >
                <img src={icon}></img>
            </div>
            <div className='tile-title' >
                <span>{content}</span>
            </div>
        </div>
    )
}
