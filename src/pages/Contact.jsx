import { BsWhatsapp } from 'react-icons/bs';
import SectionTitle from '../components/shared/SectionTitle';
import storeImage from '../assets/images/store.png';
import storeDesktopImage from '../assets/images/store-desktop.png';
import blueStriped from '../assets/images/blue-striped.png';
import contactItems from '../constants/contactItems';
import ContactItem from '../components/sections/contact/ContactItem';
import Argentina from '../assets/images/AR-flag.png';
import blueFlowerImage from '../assets/images/blue-flower.png';
import useMediaQuery from '../hooks/useMediaQuery';

const Contact = () => {
  const isDesktop = useMediaQuery('(min-width: 1440px)');
  return (
    <section className="overflow-hidden relative flex flex-col justify-center pb-[83px] md:pb-[168px] xl:pb-[99px]">
      <SectionTitle title="Contacto" />
      <div className="px-[27px] xl:px-0 m-auto mt-[45px] flex flex-col md:flex-row justify-center md:gap-[23px] xl:gap-[72px]">
        <div className="relative">
          <img src={isDesktop ? storeDesktopImage : storeImage} alt="Custom boutique store" className="z-[50] relative md:w-[318px] xl:w-auto md:h-[258px] xl:h-auto" />
          <img src={blueStriped} alt="Blue striped decoration" className="min-w-[529px] min-h-[256px] absolute top-[55px] md:top-[155px] left-[77px] md:-left-[18px] xl:hidden" />
        </div>
        <div className="mt-[45px] md:mt-0 flex flex-col gap-7 relative">
          {
          contactItems.map((item, index) => (
            <ContactItem key={`contact-item-${index}`} {...item} />
          ))
        }
          <div className="flex gap-[9.52px] items-start">
            <div className="rounded-full p-1 bg-primary text-white w-[30px] h-[30px] grid place-content-center">
              <BsWhatsapp />
            </div>
            <div className="text-[15px] leading-[18px] text-secondary">
              <p className="font-bold uppercase mb-[18px]">
                WHATSAPP
                {' '}
                <span className="font-normal">(información y ventas)</span>
              </p>
              <p className="font-normal">+54 9 2915 66-1652</p>
            </div>
          </div>
          <div className="flex items-center gap-[9.52px]">
            <img src={Argentina} alt="FIFA World Champion flag" className="xl:w-[24px] xl:h-[24px]" />
            <p className="uppercase text-[15px] leading-[18px] italic font-bold">Envíos a todo el páis</p>
          </div>
        </div>
      </div>
      <img src={blueFlowerImage} alt="Blue flower decoration" className="flex md:hidden xl:flex absolute opacity-80 -bottom-[93px] -right-[135px] xl:-right-[60px] xl:bottom-[5px] rotate-[-26.5deg] xl:rotate-[2.94deg]" />
    </section>
  );
};

export default Contact;
