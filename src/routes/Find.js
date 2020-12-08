import React from 'react'
import Nav from '../components/Nav';
import './Find.css';


function Find() {
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
                    <span>Find</span>
                </div>
                <div class="h_column">
                </div>
            </div>
        </header>
        <main class="find">
            <section>
                <div class="find_options">
                    <div>
                        <i class="fas fa-address-book"></i>
                        <span>Find</span>
                    </div>
                    <div>
                        <i class="fas fa-qrcode"></i>
                        <span>QR Code</span>
                    </div>
                    <div>
                        <i class="fas fa-mobile-alt"></i>
                        <span>Shake</span>
                    </div>
                    <div>
                        <i class="far fa-envelope"></i>
                        <span>Invite via SMS</span>
                    </div>
                </div>
            </section>
            <section>
                <header>
                    <h6>Recommended Friends</h6>
                </header>
                <div class="recommend_none">
                    <span>You have no recommended friends.</span>
                </div>
            </section>
        </main>
        <Nav />
        </>
    )
}

export default Find