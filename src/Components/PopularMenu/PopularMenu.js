import React from 'react'
import './PopularMenu.css'
import MenuItem from './MenuItem'
import HeaderSection from '../HeaderSection/HeaderSection'

function PopularMenu() {
    let menus = [
        {image: "./images/menu/menu-1.png", title: "Mocha Coffee"},
        {image: "./images/menu/menu-2.png", title: "Cappuccino"},
        {image: "./images/menu/menu-3.png", title: "Love You Coffee"},
        {image: "./images/menu/menu-4.png", title: "Black Heart Coffee"},
        {image: "./images/menu/menu-5.png", title: "Black Coffee"},
        {image: "./images/menu/menu-6.png", title: "Frappuccino"},
    ];

    return (
        <div className="menu">
            <HeaderSection title='Popular Menu' />
            <div className="menu__content">
                <MenuItem {...menus[0]} />
                <MenuItem {...menus[1]} />
                <MenuItem {...menus[2]} />
            </div>
            <div className="menu__content">
                <MenuItem {...menus[3]} />
                <MenuItem {...menus[4]} />
                <MenuItem {...menus[5]} />
            </div>
        </div>
    );
}

export default PopularMenu;

