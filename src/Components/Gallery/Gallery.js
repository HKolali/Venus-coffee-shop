import React from 'react'
import './Gallery.css'
import GalleryItem from './GalleryItem'
import HeaderSection from '../HeaderSection/HeaderSection'

function Gallery() {
    let images = [
        {id: 1, image: "./images/gallery/gallery-1.webp"},
        {id: 2, image: "./images/gallery/gallery-2.webp"},
        {id: 3, image: "./images/gallery/gallery-3.webp"},
        {id: 4, image: "./images/gallery/gallery-4.webp"},
        {id: 5, image: "./images/gallery/gallery-5.webp"},
        {id: 6, image: "./images/gallery/gallery-6.webp"}
    ];

    return (
        <div className="gallery">
            <HeaderSection title='Our Gallery' />
            <div className="gallery__content">
                {images.map((image) => {
                    return <GalleryItem key={image.id} {...image} />
                })}
            </div>
        </div>
    );
}

export default Gallery;

