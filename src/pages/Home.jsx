import Carousel from "../components/sections/home/Carousel";
import Banner from "../components/sections/home/Banner";
import slide1 from "../assets/carousel/slide1.png";
import slide2 from "../assets/carousel/slide2.png";
import slide3 from "../assets/carousel/slide3.png";
import slide4 from "../assets/carousel/slide4.png";
import logo from "../assets/logo.png";
import useMediaQuery from '../hooks/useMediaQuery';

const Home = () => {

    const isMobile = useMediaQuery('(max-width: 650px)');
    const isTablet = useMediaQuery('(max-width: 900px)');

    const slidesMobile = [
        {
            url: slide1
        },
        {
            url: slide2
        },
        {
            url: slide3
        },
        {
            url: slide4
        }
    ];

    const slides1 = [
        {
            url: slide1
        },
        {
            url: logo
        },
        {
            url: slide1
        },
        {
            url: logo
        }
    ];

    const slides2 = [
        {
            url: slide2
        },
        {
            url: logo
        },
        {
            url: slide2
        },
        {
            url: logo
        }
    ];

    const slides3 = [
        {
            url: slide3
        },
        {
            url: logo
        },
        {
            url: slide3
        },
        {
            url: logo
        }
    ];

    const slides4 = [
        {
            url: slide4
        },
        {
            url: logo
        },
        {
            url: slide4
        },
        {
            url: logo
        }
    ];

    return (

        <main id="home">
            {
                isMobile
                    ? <>
                        <div>
                            <Carousel width="350px" height="296px" array={slidesMobile} />
                        </div>
                    </>

                    :
                    isTablet
                        ? <>
                            <section className="grid gap-2 px-4" style={{ gridTemplateColumns: "2fr 2fr 0fr 0fr" }} >

                                <div className="flex flex-col gap-2">
                                    <Carousel width="317px" height="285px" array={slides2} />
                                    <Carousel width="317px" height="285px" array={slides3} />
                                </div>

                                <div>
                                    <Carousel width="330px" height="576px" array={slides4} />
                                </div>

                            </section>
                        </>

                        : <>

                            <section className="grid gap-2 px-4 xl:px-36 xxl:px-64 tv:px-80" style={{ gridTemplateColumns: "2fr 1fr 1fr 0fr" }} >

                                <div>
                                    <Carousel width="680px" height="576px" array={slides1} />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <Carousel width="317px" height="285px" array={slides2} />
                                    <Carousel width="317px" height="285px" array={slides3} />
                                </div>

                                <div>
                                    <Carousel width="330px" height="576px" array={slides4} />
                                </div>

                            </section>

                        </>
            }

            <section 
                className={isMobile ? "container mx-auto px-4 w-full max-w-[390px] flex justify-center mt-5"
                                    : "container mx-auto px-4 w-full max-w-[1900px] flex justify-center mt-5 xl:px-36 xxl:px-64 tv:px-80"}>
                <Banner />
            </section>

        </main>

    )
}

export default Home;