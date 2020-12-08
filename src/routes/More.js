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
                    <span className="txt"></span>
                </div>
                <div className="h_column">
                    <span>More</span>
                </div>
                <div className="h_column">
                    <i className="fas fa-cog"></i>
                </div>
            </div>
        </header>
        <main className="more">
        <header>
            <div className="user_contents">
                <img src={myprofile.profileimg} alt="" />
                <div className="user_content">
                    <h3>{myprofile.name}</h3>
                    <span>{myprofile.email}</span>
                </div>
            </div>
            <span>
                <i className="far fa-comment"></i>
            </span>
        </header>
        <section className="more_options">
            <div>
                <i className="far fa-smile"></i>
                <span>Emoticons</span>
            </div>
            <div>
                <i className="fas fa-paint-brush"></i>
                <span>Themes</span>
            </div>
            <div>
                <i className="far fa-hand-peace"></i>
                <span>Plus Friend</span>
            </div>
            <div>
                <i className="fas fa-user-circle"></i>
                <span>Account</span>
            </div>
        </section>
        <section className="plus_friends">
            <header>
                <h2>Plus Friends</h2>
                <span>
                    <i className="fas fa-info-circle"></i>
                    Learn More
                </span>
            </header>
            <div className="plus_options">
                {friends.map(friend=>(
                    <PlusFriends 
                        id = {friend.id}
                        icon = {friend.icon}
                        title = {friend.title}
                    />
                ))}
            </div>
        </section>
        <section className="more_link">
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