// Write your Character component here
import React from "react";

const Character = props => {
    return (
        <div className='character'>
            {props.info.name}
        </div>
    )
}

export default Character;