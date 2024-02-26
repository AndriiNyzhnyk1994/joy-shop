import React, { useState } from 'react';
import s from './ImageSlider.module.css'

type PropsType = {
    images: string[]
}

const ImagesSlider: React.FC<PropsType> = ({ images }) => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const handleThumbnailClick = (index: number) => {
        setSelectedImageIndex(index);
    };

    return (
        <div className={s.slideWrapper} >
            <div className={s.sliderInner} >
                <div className={s.mainImageBlock}>
                    <img 
                        className={s.mainImage}
                        src={images[selectedImageIndex]}
                        alt={`Slide ${selectedImageIndex}`}
                    />
                </div>
                <div className={s.otherImagesBlock} >
                    {images.map((imageUrl, index) => (
                        <img
                            className={`${s.otherImage} ${index===selectedImageIndex ? s.active : ''}`}
                            key={index}
                            src={imageUrl}
                            alt={`Thumbnail ${index}`}
                            onClick={() => handleThumbnailClick(index)}
                        />
                    ))}
                </div>
            </div>            
        </div>
    );
};

export default ImagesSlider;
