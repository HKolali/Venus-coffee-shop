import React from 'react'
import './PopularMenu.css'
import MenuItem from './MenuItem'
import HeaderSection from '../HeaderSection/HeaderSection'

function PopularMenu() {
    let menus = [
        {id: 1, image: "./images/menu/menu-1.png", title: "Mocha Coffee"},
        {id: 2, image: "./images/menu/menu-2.png", title: "Cappuccino"},
        {id: 3, image: "./images/menu/menu-3.png", title: "Love You Coffee"},
        {id: 4, image: "./images/menu/menu-4.png", title: "Black Heart Coffee"},
        {id: 5, image: "./images/menu/menu-5.png", title: "Black Coffee"},
        {id: 6, image: "./images/menu/menu-6.png", title: "Frappuccino"},
    ];

    return (
        <div className="menu">
            <HeaderSection title='Popular Menu' />
            <div className="menu__content">
                {menus.map((menu) => {
                    return <MenuItem key={menu.id} {...menu} />
                })}
            </div>
        </div>
    );
}

export default PopularMenu;

