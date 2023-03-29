import Carousel from '../components/sections/home/Carousel';
import Banner from '../components/sections/home/Banner';
import slide1 from '../assets/carousel/slide1.png';
import slide2 from '../assets/carousel/slide2.png';
import slide3 from '../assets/carousel/slide3.jpg';
import slide4 from '../assets/carousel/slide4.jpg';
import slide5 from '../assets/carousel/slide5.jpg';
import slide6 from '../assets/carousel/slide6.jpg';
import slide7 from '../assets/carousel/slide7.jpg';
import slide8 from '../assets/carousel/slide8.jpg';
import useMediaQuery from '../hooks/useMediaQuery';

const Home = () => {
  const isMobile = useMediaQuery('(max-width: 650px)');
  const isTablet = useMediaQuery('(max-width: 900px)');

  const slidesMobile = [
    {
      url: slide1,
    },
    {
      url: slide2,
    },
    {
      url: slide3,
    },
    {
      url: slide4,
    },
    {
      url: slide5,
    },
    {
      url: slide6,
    },
    {
      url: slide7,
    },
    {
      url: slide8,
    },
  ];

  const slides1 = [
    {
      url: slide1,
    },
    {
      url: slide5,
    },
  ];

  const slides2 = [
    {
      url: slide2,
    },
    {
      url: slide6,
    },
  ];

  const slides3 = [
    {
      url: slide3,
    },
    {
      url: slide7,
    },
  ];

  const slides4 = [
    {
      url: slide4,
    },
    {
      url: slide8,
    },
  ];

  return (
    <main id="home" className="pt-[160px] lg:pt-[170px]">
      {isMobile ? (
        <div>
          <Carousel width="350px" height="350px" array={slidesMobile} />
        </div>
      ) : isTablet ? (
        <section
          className="grid gap-2 px-4"
          style={{ gridTemplateColumns: '2fr 2fr 0fr 0fr' }}
        >
          <div className="flex flex-col gap-2">
            <Carousel width="317px" height="285px" array={slides2} />
            <Carousel width="317px" height="285px" array={slides3} />
          </div>

          <div>
            <Carousel width="330px" height="576px" array={slides4} />
          </div>
        </section>
      ) : (
        <section
          className="grid gap-2 px-4 xl:px-36 xxl:px-64 tv:px-80"
          style={{ gridTemplateColumns: '2fr 1fr 1fr 0fr' }}
        >
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
      )}

      <section
        className={
          isMobile
            ? 'container mx-auto px-4 w-full max-w-[390px] flex justify-center mt-5'
            : 'container mx-auto px-4 w-full max-w-[1900px] flex justify-center mt-5 xl:px-36 xxl:px-64 tv:px-80'
        }
      >
        <Banner />
      </section>
    </main>
  );
};

export default Home;
