import './MenuItem.css'

function MenuItem({image, title}){
    return(
        <div className="menu-item">
            <img src={image} alt="" className='menu-item-image'/>
            <h3 className="menu-item-title">{title}</h3>
        </div>
    );
}

export default MenuItem;