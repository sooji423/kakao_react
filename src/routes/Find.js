import React from 'react'
import Nav from '../components/Nav';
import './Find.css';


function Find() {
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
                    <span>Find</span>
                </div>
                <div className="h_column">
                </div>
            </div>
        </header>
        <main className="find">
            <section>
                <div className="find_options">
                    <div>
                        <i className="fas fa-address-book"></i>
                        <span>Find</span>
                    </div>
                    <div>
                        <i className="fas fa-qrcode"></i>
                        <span>QR Code</span>
                    </div>
                    <div>
                        <i className="fas fa-mobile-alt"></i>
                        <span>Shake</span>
                    </div>
                    <div>
                        <i className="far fa-envelope"></i>
                        <span>Invite via SMS</span>
                    </div>
                </div>
            </section>
            <section>
                <header>
                    <h6>Recommended Friends</h6>
                </header>
                <div className="recommend_none">
                    <span>You have no recommended friends.</span>
                </div>
            </section>
        </main>
        <Nav />
        </>
    )
}

export default Find