import { useState, useEffect } from "react";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";

const Carousel = ({ width, height, array }) => {

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

    useEffect(() => {
        // Precargar todas las imágenes del array de los carruseles
        array.forEach((slide) => {
            const img = new Image();
            img.src = slide.url;
        });
    }, [array]);

    return (
        <>
            <div style={{ maxWidth: width, height: height }}
                className="w-full m-auto relative">

                <div style={{ backgroundImage: `url(${array[currentIndex].url})` }}
                    className="w-full h-full rounded-xl bg-top bg-cover">
                </div>

                {/* Left Arrow */}

                <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 
                    text-2xl p-2 text-stone-500 rounded-full bg-black/20 cursor-pointer"
                    onClick={prevSlide}>
                    <HiOutlineArrowLeft size={30} color={"#ffffff"} />
                </div>

                {/* Right Arrow */}

                <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 
                    text-2xl p-2 text-stone-500 rounded-full bg-black/20 cursor-pointer"
                    onClick={nextSlide}>
                    <HiOutlineArrowRight size={30} color={"#ffffff"} />
                </div>

            </div>
        </>
    )
}

export default Carousel;