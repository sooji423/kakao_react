import React from 'react'
import {Link, NavLink} from 'react-router-dom';
import './Nav.css';

function Navi() {
    return (
        <nav class="tab_bar">
            <NavLink to="/" exact={true} activeClassName="choice">
                <i class="fas fa-user"></i>
                <span class="tab_tit">Friends</span>
            </NavLink>
            <NavLink to="/chats" activeClassName="choice">
                <i class="fas fa-comment"></i>
                <span class="tab_tit">Chats</span>
            </NavLink>
            <NavLink to="/find" activeClassName="choice">
                <i class="fas fa-search"></i>
                <span class="tab_tit">Find</span>
            </NavLink>
            <NavLink to="/more" activeClassName="choice">
                <i class="fas fa-ellipsis-h"></i>
                <span class="tab_tit">More</span>
            </NavLink>
        </nav>
    )
}

export default Navi
