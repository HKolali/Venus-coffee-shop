import './GalleryItem.css'

function GalleryItem({image}){
    return(
        <div className="gallery-item">
            <img src={image} alt="" className='gallery-item-image'/>
        </div>
    );
}

export default GalleryItem;