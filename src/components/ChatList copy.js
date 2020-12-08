import React from 'react'
import {Link} from 'react-router-dom'

function ChatList({id, name, img, text}) {
    return (
            <li className="chats">
                <Link to={({
                pathname : '/Chat',
                state : {id, name, img}
            })}>
                    <div className="chat_content">
                        <img src={img} alt="" />
                        <div className="chats_info">
                            <h3>{name}</h3>
                            <span>{text}</span>
                        </div>
                    </div>
                    <span>17:33</span>
                </Link>
            </li>
    )
} 

export default ChatList