import React, {useState} from "react";
import { SliderData } from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const Slider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const size = SliderData.length;

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? size - 1 : current - 1)
    }
    const nextSlide = () => {
        setCurrent(current === size - 1 ? 0 : current + 1)
    }

    return (
        <section className="slider">
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
            {SliderData.map((slide, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && (<a href={slide.url}><img src={slide.image} alt={slide.alt} /></a>)}
                    </div>
                )
            })}
        </section>
    )
}

export default Slider;