import React, {useEffect, useState} from 'react'
import './Slider.css'
import BtnSlider from './BtnSlider'
import API from 'variables/tokenURL'

export default function Slider() {

    const [slideIndex, setSlideIndex] = useState(1)
    const [images, setImages] = useState([]);

    const nextSlide = () => {
        if(slideIndex !== images?.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === images?.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(images?.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    useEffect(() => {
        API.get(`/advertisement/list`)
        .then((res) => {
            console.log(res.data)
            setImages(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    },[]);


    return (
        <div className="container-slider">
            {images && images.map((images, index) => {
                return (
                    <div
                    key={images._id}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <img 
                        src={images?.advertisement_Pic} 
                        />
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

            <div className="container-dots">
                {Array.from({length: images?.length}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    )
}
