import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import './Profile.css';

function Profile(props) {
    const {location, history} = props;
    const redirect = () => {
        if(location.state === undefined){
            history.push('/');
        }
    }
    useEffect(redirect,[]);
    if(location.state){
        const {id, name, email, img, bg} = location.state;
        
    return (
        <>
        <header className="header p_h">
            <div className="h_top">
                <div className="h_column">
                    <i class="fas fa-plane"></i>
                    <i class="fas fa-wifi"></i>
                </div>
                <div className="h_column">
                    <span className="time">17:33</span>
                </div>
                <div className="h_column">
                    <i class="far fa-moon"></i>
                    <i class="fab fa-bluetooth-b"></i>
                    <span className="battery">100% <i class="fas fa-battery-full"></i></span>
                </div>
            </div>
            <div className="h_bottom">
                <div className="h_column">
                    <Link to="/" exact={true}>
                        <i class="fas fa-times icon"></i>
                    </Link>
                </div>
                <div className="h_column">
                </div>
                <div className="h_column">
                    <i class="fas fa-user icon"></i>
                </div>
            </div>
        </header>
        <main className="profile">
            <header className="profile_h" style={{background: "url("+bg+") no-repeat 50% 50%" , backgroundSize: "cover"}}>
                <div>
                    <img src={img} alt="" />
                    <h3>{name}</h3>
                </div>
            </header>
            <div className="container">
                <input type="text" placeholder={email} />
                <div class="p_icons">
                    <div>
                        <span className="p_icon">
                            <i class="fas fa-comment icon"></i>
                        </span>
                        <span>My Chatroom</span>
                    </div>
                    <div>
                        <span className="p_icon">
                            <i class="fas fa-pencil-alt icon"></i>
                        </span>
                        <span>Edit Profile</span>
                    </div>
                </div>
            </div>
        </main>
    </>
    )
}else return null;
}

export default Profile