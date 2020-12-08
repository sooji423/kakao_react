import React from 'react'
import PlusFriends from '../components/PlusFriends';
import friends from '../data/plusFriends.json';
import profiles from '../data/UserListJSON.json';
import Nav from '../components/Nav';
import './More.css';


function More() {
    const myprofile = profiles[0];
    const plus = friends[0];
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
                    <span class="txt"></span>
                </div>
                <div class="h_column">
                    <span>More</span>
                </div>
                <div class="h_column">
                    <i class="fas fa-cog"></i>
                </div>
            </div>
        </header>
        <main class="more">
        <header>
            <div class="user_contents">
                <img src={myprofile.profileimg} alt="" />
                <div class="user_content">
                    <h3>{myprofile.name}</h3>
                    <span>{myprofile.email}</span>
                </div>
            </div>
            <span>
                <i class="far fa-comment"></i>
            </span>
        </header>
        <section class="more_options">
            <div>
                <i class="far fa-smile"></i>
                <span>Emoticons</span>
            </div>
            <div>
                <i class="fas fa-paint-brush"></i>
                <span>Themes</span>
            </div>
            <div>
                <i class="far fa-hand-peace"></i>
                <span>Plus Friend</span>
            </div>
            <div>
                <i class="fas fa-user-circle"></i>
                <span>Account</span>
            </div>
        </section>
        <section class="plus_friends">
            <header>
                <h2>Plus Friends</h2>
                <span>
                    <i class="fas fa-info-circle"></i>
                    Learn More
                </span>
            </header>
            <div class="plus_options">
                {friends.map(friend=>(
                    <PlusFriends 
                        id = {friend.id}
                        icon = {friend.icon}
                        title = {friend.title}
                    />
                ))}
            </div>
        </section>
        <section class="more_link">
            <div>
                <img src="images/kakaostory.png" alt="" />
                <span>Kakao Story</span>
            </div>
            <div>
                <img src="images/path.png" alt="" />
                <span>Path</span>
            </div>
            <div>
                <img src="images/kakaofriends.png" alt="" />
                <span>kakao friends</span>
            </div>
        </section>
    </main>
    <Nav />
    </>
    )
}

export default More