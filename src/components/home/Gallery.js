import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slideToScroll: 1
}

const showGallery = ({ latestGallery }) => {
    if (latestGallery) {
        return (
            <Slider {...settings}>
                {latestGallery.map((gallery) => {
                    return (
                        <Link
                            to={`/galleries/${gallery.id}`}
                            key={gallery.id}
                            className="slider-item">
                            <div
                                className="image"
                                style={{ background: `url(/images/galleries/${gallery.images[0].img})` }}>
                                <h3>{gallery.artist}</h3>
                            </div>
                        </Link>
                    )
                })}    
            </Slider>
        )
    }
}

const Gallery = (props) => {
    return (
        <div className="home-gallery">
            <h2>Awesome Gallery</h2>   
            {showGallery(props)}
        </div>
    )
}

export default Gallery