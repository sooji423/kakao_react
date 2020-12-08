import React, {useState, useEffect} from 'react'
import ChatList from '../components/ChatList';
import ImgJSON from '../data/ImgJSON.json';
import Nav from '../components/Nav';
import './Chats.css';
import axios from 'axios';



function Chats() {
    const chatimg = ImgJSON;
    const [chats, setchats] = useState([]);
    let getData = async () => {
        const { data : chats } = await axios.get('https://jsonplaceholder.typicode.com/users');
        setchats(chats);
    }

    useEffect(getData,[]);
    return (
        <>
        <header className="header">
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
                    <span className="txt">Edit</span>
                </div>
                <div className="h_column">
                    <span>Chats <i clclassNameass="fas fa-caret-down"></i></span>
                </div>
                <div className="h_column">
                </div>
            </div>
        </header>
        <div>
            <main className="chats">
                <div className="search">
                    <i className="fas fa-search"></i>
                    <input type="text" placeholder="Find friends, chats, Plus Friends" />
                </div>
                <ul className="chats_list">
                        {chats.map((chat, idx) =>(
                            <ChatList 
                                id = {chat.id}
                                username = {chat.username}
                                name = {chat.name}
                                img = {chatimg[idx].img}
                            />
                    ))}
                </ul>
            </main>
            <Nav />
            <div className="talk_btn">
                <i className="fas fa-comment"></i>
            </div>
        </div>
        </>
    )
}

export default Chats
