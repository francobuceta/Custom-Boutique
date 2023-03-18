import Carousel from "../components/Carousel";
import Banner from "../components/Banner";
import slide1 from "../assets/carousel/slide1.png";
import slide2 from "../assets/carousel/slide2.png";
import slide3 from "../assets/carousel/slide3.png";
import slide4 from "../assets/carousel/slide4.png";
import logo from "../assets/logo.png";

const Home = () => {

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
        <>

            <section className="grid gap-2 py-10 px-4"
                style={{ gridTemplateColumns: "2fr 1fr 1fr 0fr" }} id="home" > 

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

            <section className="container mx-auto px-4 w-full max-w-[1600px] flex justify-center">
                <Banner />
            </section>

        </>
    )
}

export default Home;