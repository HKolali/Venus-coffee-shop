import React from 'react'
import './Gallery.css'
import GalleryItem from './GalleryItem'
import HeaderSection from '../HeaderSection/HeaderSection'

function Gallery() {
    let images = [
        {image: "./images/gallery/gallery-1.webp"},
        {image: "./images/gallery/gallery-2.webp"},
        {image: "./images/gallery/gallery-3.webp"},
        {image: "./images/gallery/gallery-4.webp"},
        {image: "./images/gallery/gallery-5.webp"},
        {image: "./images/gallery/gallery-6.webp"}
    ];

    return (
        <div className="gallery">
            <HeaderSection title='Our Gallery' />
            <div className="gallery__content">
                <GalleryItem {...images[0]} />
                <GalleryItem {...images[1]} />
                <GalleryItem {...images[2]} />
            </div>
            <div className="gallery__content">
                <GalleryItem {...images[3]} />
                <GalleryItem {...images[4]} />
                <GalleryItem {...images[5]} />
            </div>
        </div>
    );
}

export default Gallery;

