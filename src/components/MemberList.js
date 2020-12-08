import React from 'react'
import {Link} from 'react-router-dom'

function MemberList({id, name, email, img, text, bg}) {
    return (
        <div className="section_row section_fri">
            <div className="s_column">
                <img src={img} alt="" />
                <Link to={({
                pathname : '/Profile',
                state : {id, name, email, img, bg}
            })}>{name}</Link>
            </div>     
            <span>{text}</span>         
        </div>
    )
} 

export default MemberList