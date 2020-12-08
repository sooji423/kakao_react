import React from 'react';
import MemberList from '../components/MemberList';
import profiles from '../data/UserListJSON.json';
import Nav from '../components/Nav';
import './Friends.css';

function Friends() {

    const myprofile = profiles[0];
    return (
            <>
            <div className="header">
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
                        <span className="battery">100% <i class="fas fa-battery-full"></i></span>
                    </div>
                </div>
                <div className="h_bottom">
                    <div className="h_column">
                        <span className="txt">Manage</span>
                    </div>
                    <div className="h_column">
                        <span>Friends <span class="number">1</span></span>
                    </div>
                    <div className="h_column">
                        <i className="fas fa-cog"></i>
                    </div>
                </div>
            </div>
            <main className="friends">
                <div className="search">
                    <i className="fas fa-search"></i>
                    <input type="text" placeholder="Find friends, chats, Plus Friends" />
                </div>
                <section className="friends_s">
                    <header className="section_h">
                        <h6>My Profile</h6>
                    </header>
                    <div className="section-rows">
                            <MemberList 
                                id = {myprofile.id}
                                name = {myprofile.name}
                                email = {myprofile.email}
                                img = {myprofile.profileimg}
                                text = {myprofile.profilemsg}
                                bg = {myprofile.backgroundimg}
                            />
                    </div>
                </section>
                <section className="friends_s">
                    <header className="section_h">
                        <h6>Friends</h6>
                    </header>
                    <div className="section-rows">
                        {profiles.map(profile =>{
                            if(profile.id != 0) {return(
                            <MemberList 
                                id = {profile.id}
                                name = {profile.name}
                                email = {profile.email}
                                img = {profile.profileimg}
                                text = {profile.profilemsg}
                                bg = {profile.backgroundimg}
                            />
                        )}})}
                    </div>
                </section>
            </main>
            <Nav />
            </>
    )
    
}

export default Friends;
