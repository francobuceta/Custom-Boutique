import { useState } from "react";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";

const Carousel = ({ width, height, array } ) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? array.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === array.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    return (
        <>
            <div style={{ maxWidth: width, height: height }}
                className=" w-full m-auto relative">
                
                <div style={{ backgroundImage: `url(${array[currentIndex].url})` }}
                    className="w-full h-full rounded-xl bg-center bg-cover duration-500"> 
                </div>

                {/* Left Arrow */}

                <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl p-2 text-stone-500 cursor-pointer">
                    <HiOutlineArrowLeft size={30} onClick={prevSlide} />
                </div>

                {/* Right Arrow */}

                <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl p-2 text-stone-500 cursor-pointer">
                    <HiOutlineArrowRight size={30} onClick={nextSlide} />
                </div>

            </div>
        </>
    )
}

export default Carousel;