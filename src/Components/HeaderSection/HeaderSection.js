import React from 'react'
import './HeaderSection.css'

function HeaderSection({title}) {
    return (
        <div className="header">
            <img src="./images/heading.png" alt="heading Image" className="header__image" />
            <h3 className="header__title">{title}</h3>
        </div>
    )
}

export default HeaderSection;