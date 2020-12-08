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
        <header className="chat_h header">
            <div className="h_top">
                <div className="h_column">
                    <i className="fas fa-plane"></i>
                    <i className="fas fa-wifi"></i>
                </div>
                <div className="h_column">
                    <span className="time">17:33</span>
                </div>
                <div className="h_column">
                    <i className="far fa-moon"></i>
                    <i className="fab fa-bluetooth-b"></i>
                    <span className="battery">100% <i className="fas fa-battery-full"></i></span>
                </div>
            </div>
            <div className="h_bottom">
                <div className="h_column">
                    <Link to="/Chats">
                        <i className="fas fa-chevron-left icon"></i>
                    </Link>
                </div>
                <div className="h_column">
                    <span>{username}</span>
                </div>
                <div className="h_column">
                    <i className="fas fa-search"></i>
                    <i className="fas fa-bars"></i>
                </div>
            </div>
        </header>

        
        <main className="chat">
            <div className="data">
                <span>Wednesday, April 12, 2018</span>
            </div>
            <div className="chat_msg to_you">
                <span className="chat_time">17:33</span>
                <div className="message">
                    <span className="comment">Hello!</span>
                    <span className="comment">Hello! This is a test message.<br />
                        Hello!</span>
                    <span className="comment">This is a test message.</span>
                </div>
            </div>
            <div className="chat_msg to_me">
                <img src={img} alt=""/>
                <div className="message">
                    <h3>{username}</h3>
                    <span className="comment">And this is an answer</span>
                    <span className="comment">And this is an answer And this is an answer</span>
                    <span className="comment">And this is an answer</span>
                </div>
                <span className="chat_time">20:37</span>
            </div>
        </main>
        <div className="chating">
            <i className="fas fa-plus icon"></i>
            <div className="chating_msg">
                <input type="text" />
                <i className="far fa-smile icon"></i>
                <span>
                    <i className="fas fa-microphone icon"></i>
                </span>
            </div>
        </div>
        </>
    )
}else return null;
}

export default Chat