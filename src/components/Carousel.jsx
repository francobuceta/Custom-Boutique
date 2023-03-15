import { useState } from "react";
import slide from "../assets/carousel/slide1.png";
import logo from "../assets/logo.png";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";

const Carousel = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        {
            url: slide
        },
        {
            url: logo
        },
        {
            url: slide
        },
        {
            url: logo
        }
    ];

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    return (
        <>
            <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative">
                
                <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                    className="w-full h-full rounded-2xl bg-center bg-cover duration-500"> 
                </div>

                {/* Left Arrow */}

                <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                    <HiOutlineArrowLeft size={30} onClick={prevSlide} />
                </div>

                {/* Right Arrow */}

                <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                    <HiOutlineArrowRight size={30} onClick={nextSlide} />
                </div>

            </div>
        </>
    )
}

export default Carousel;