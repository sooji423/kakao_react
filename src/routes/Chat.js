import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import './Chat.css'
    
function Chat(props) {
    const {location, history} = props;
    const redirect = () => {
        if(location.state === undefined){
            history.push('/');
        }
    }
    useEffect(redirect,[]);
    if(location.state){
        const {id, img, username} = location.state;
        
    return (
        <>
        <header class="chat_h header">
            <div class="h_top">
                <div class="h_column">
                    <i class="fas fa-plane"></i>
                    <i class="fas fa-wifi"></i>
                </div>
                <div class="h_column">
                    <span class="time">17:33</span>
                </div>
                <div class="h_column">
                    <i class="far fa-moon"></i>
                    <i class="fab fa-bluetooth-b"></i>
                    <span class="battery">100% <i class="fas fa-battery-full"></i></span>
                </div>
            </div>
            <div class="h_bottom">
                <div class="h_column">
                    <Link to="/Chats">
                        <i class="fas fa-chevron-left icon"></i>
                    </Link>
                </div>
                <div class="h_column">
                    <span>{username}</span>
                </div>
                <div class="h_column">
                    <i class="fas fa-search"></i>
                    <i class="fas fa-bars"></i>
                </div>
            </div>
        </header>
        <main class="chat">
            <div class="data">
                <span>Wednesday, April 12, 2018</span>
            </div>
            <div class="chat_msg to_you">
                <span class="chat_time">17:33</span>
                <div class="message">
                    <span class="comment">Hello!</span>
                    <span class="comment">Hello! This is a test message.<br />
                        Hello!</span>
                    <span class="comment">This is a test message.</span>
                </div>
            </div>
            <div class="chat_msg to_me">
                <img src={img} alt=""/>
                <div class="message">
                    <h3>{username}</h3>
                    <span class="comment">And this is an answer</span>
                    <span class="comment">And this is an answer And this is an answer</span>
                    <span class="comment">And this is an answer</span>
                </div>
                <span class="chat_time">20:37</span>
            </div>
        </main>
        <div class="chating">
            <i class="fas fa-plus icon"></i>
            <div class="chating_msg">
                <input type="text" />
                <i class="far fa-smile icon"></i>
                <span>
                    <i class="fas fa-microphone icon"></i>
                </span>
            </div>
        </div>
        </>
    )
}else return null;
}

export default Chat