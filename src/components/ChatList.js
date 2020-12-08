import React from 'react'
import {Link} from 'react-router-dom'

function ChatList({id, name, img, username}) {
    return (
            <li className="chats">
                <Link to={({
                pathname : '/Chat',
                state : {id, img, username}
            })}>
                    <div className="chat_content">
                        <img src={img} alt="" />
                        <div className="chats_info">
                            <h3>{username}</h3>
                            <span>{name}</span>
                        </div>
                    </div>
                    <span>17:33</span>
                </Link>
            </li>
    )
} 

export default ChatList