import './Navbar.css'

function Navbar(){
    return(
        <div className="navbar">
            <div className="navbar__content">
                <div className="navbar__content-right">
                    <ul className="navbar__content-right-menu">
                        <li className="item-menu"><a href="" className="item-menu-link">Home</a></li>
                        <li className="item-menu"><a href="" className="item-menu-link">About</a></li>
                        <li className="item-menu"><a href="" className="item-menu-link">Menu</a></li>
                        <li className="item-menu"><a href="" className="item-menu-link">Gallery</a></li>
                        <li className="item-menu"><a href="" className="item-menu-link">Team</a></li>
                        <li className="item-menu"><a href="" className="item-menu-link">Contact</a></li>
                    </ul>
                </div>
                <div className="navbar__content-left">
                    <img src="images/logo.png" alt="" className="navbar__content-left-logo" />
                </div>
            </div>
        </div>
    );
}

export default Navbar;