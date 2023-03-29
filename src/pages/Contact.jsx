import { BsWhatsapp } from 'react-icons/bs';
import { FaGlobe } from 'react-icons/fa';
import SectionTitle from '../components/shared/SectionTitle';
import storeImage from '../assets/images/store.png';
import storeDesktopImage from '../assets/images/store-desktop.png'; // Desktop and tablet
import contactItems from '../constants/contactItems';
import ContactItem from '../components/sections/contact/ContactItem';
import Argentina from '../assets/images/AR-flag.png';
import blueFlowerMobile from '../assets/images/blue-flower-mobile.png';
import blueFlowerTablet from '../assets/images/blue-flower-tablet.png';
import blueFlowerDesktop from '../assets/images/blue-flower-desktop.png';
import useMediaQuery from '../hooks/useMediaQuery';

const Contact = () => {
  const isDesktop = useMediaQuery('(min-width: 1440px)');
  const isTablet = useMediaQuery('(min-width: 768px)');

  const flower = () => {
    if (isDesktop) return blueFlowerDesktop;
    if (isTablet) return blueFlowerTablet;
    return blueFlowerMobile;
  };

  return (
    <section className="overflow-hidden relative flex flex-col justify-center pb-[81px] md:pb-[79px] xl:pb-[99px]" id="contact">
      <SectionTitle title="Contacto" />
      <div className="px-[27px] xl:px-0 m-auto mt-[26px] md:mt-[36px] xl:mt-[56px] flex flex-col xl:flex-row xl:items-center justify-center gap-[30px] md:gap-[37px] xl:gap-[72px]">
        <div className="relative">
          <img src={isTablet ? storeDesktopImage : storeImage} alt="Custom boutique store" className="z-[40] relative w-auto h-auto" />
        </div>
        <div>
          <div className="flex flex-col md:flex-wrap xl:flex-nowrap md:max-h-[170px] xl:max-h-none gap-7 md:gap-[42px] xl:gap-[43px] relative">
            {
          contactItems.map((item, index) => (
            <ContactItem key={`contact-item-${index}`} {...item} />
          ))
          }
            <a className="flex flex-col text-[16px] leading-[19px]" href="https://custom15.mitiendanube.com/productos/">
              <div className="flex items-center gap-[9.52px] md:gap-[10px]">
                <FaGlobe className="text-[26px] text-primary" />
                <p className="font-bold uppercase text-secondary">
                  Tienda nube
                </p>
              </div>
              <p className="font-normal pl-[39.52px] md:pl-[40px] mt-4 underline">custom15.mitiendanube.com/productos</p>
            </a>

            <a
              className="flex gap-[9.52px] items-center"
              href={import.meta.env.VITE_WHATSAPP_MESSAGE}
            >
              <div className="rounded-full p-1 bg-primary text-white w-[26px] h-[26px] grid place-content-center">
                <BsWhatsapp />
              </div>
              <p className="font-bold uppercase text-[16px] leading-[19px] text-secondary">
                WHATSAPP
                {' '}
                <span className="font-normal normal-case mt-4">(información y ventas)</span>
              </p>
            </a>
          </div>
          <div className="flex items-center gap-[9.52px] mt-[27px] md:mt-[36px] xl:mt-[38px] pl-[2px]">
            <img src={Argentina} alt="FIFA World Champion flag" className="xl:w-[24px] xl:h-[24px]" />
            <p className="uppercase text-[15px] leading-[18px] italic font-bold">Envíos a todo el país</p>
          </div>
        </div>
      </div>
      <img src={flower()} alt="Blue flower decoration" className="flex absolute -bottom-5 md:-bottom-8 xl:-bottom-12 right-0" />
    </section>
  );
};

export default Contact;
