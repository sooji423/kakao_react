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
        <header class="header">
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
                    <span class="txt">Edit</span>
                </div>
                <div class="h_column">
                    <span>Chats <i class="fas fa-caret-down"></i></span>
                </div>
                <div class="h_column">
                </div>
            </div>
        </header>
        <div>
            <main class="chats">
                <div class="search">
                    <i class="fas fa-search"></i>
                    <input type="text" placeholder="Find friends, chats, Plus Friends" />
                </div>
                <ul class="chats_list">
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
            <div class="talk_btn">
                <i class="fas fa-comment"></i>
            </div>
        </div>
        </>
    )
}

export default Chats
