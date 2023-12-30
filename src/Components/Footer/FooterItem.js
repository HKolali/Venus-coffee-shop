import './FooterItem.css'

function FooterItem({image, title, description}){

    return(
        <div className="footer-item">
            <img src={image} alt="" className='footer-item__image'/>
            <h3 className="footer-item__title">{title}</h3>
            <p className="footer-item__description">{description}</p>
        </div>
    );
}

export default FooterItem;