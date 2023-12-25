import './FacilityItem.css'

function FacilityItem({image, title, description}){
    return(
        <div className="facility-item">
            <img src={image} alt="" className='facility-item-image'/>
            <h3 className="facility-item-title">{title}</h3>
            <p className="facility-item-description">{description}</p>
        </div>
    );
}

export default FacilityItem;