import SectionTitle from '../components/shared/SectionTitle';
import useMediaQuery from '../hooks/useMediaQuery';
import giftCardMobile from '../assets/images/gift-card-mobile.png';
import giftCardTablet from '../assets/images/gift-card-tablet.png';
import giftCardDesktop from '../assets/images/gift-card-desktop.png';
import curvedArrow from '../assets/images/curved-arrow.png';
import curvedArrowTablet from '../assets/images/curved-arrow-tablet.png'; // and desktop
import promotionsItems from '../constants/promotionsItems';
import PromotionItem from '../components/sections/promotions/PromotionItem';
import storeItemImage from '../assets/images/store-item.png';
import storeItemTabletImage from '../assets/images/store-item-desktop.png'; // and desktop

const Promotions = () => {
  const isDesktop = useMediaQuery('(min-width: 1440px)');
  const isTablet = useMediaQuery('(min-width: 768px)');

  const giftCard = () => {
    if (isDesktop) return giftCardDesktop;
    if (isTablet) return giftCardTablet;
    return giftCardMobile;
  };

  return (
    <section className="mt-[36px] md:mt-[60px] xl:mt-[80px] m-auto max-w-[1440px] px-[27px] md:px-[81px] pb-[40px] md:pb-[65px] xl:pb-20 flex flex-col items-center">
      <SectionTitle title="Promociones" />
      <h4 className="mt-[26px] md:mt-[36px] xl:mt-[56px] font-bold md:text-[25px] xl:text-[33px] md:leading-[30px] xl:leading-[40px] leading-[19px] text-center">¡Recibí beneficios con tus compras! *</h4>
      <div className="flex flex-col items-center md:items-start xl:flex-row flex-wrap xl:mt-[65px] xl:justify-between">
        {/* Custom Boutique gift card */}
        <div className="mt-[28px] md:mt-[45px] xl:mt-0 md:ml-[55px] xl:ml-0 relative flex items-start">
          <img src={giftCard()} alt="Custom Boutique gift card" />
          <img src={isTablet ? curvedArrowTablet : curvedArrow} alt="curved arrow" className="absolute -bottom-[80px] md:-bottom-[45px]  xl:bottom-[105px] -right-[20px] md:-right-[108px] xl:-right-[75px] xl:rotate-[110deg]" />
        </div>
        {/* Promotions items */}
        <div className="flex flex-col gap-[35px] md:gap-[42px] xl:gap-[100px] mt-16 xl:mt-0 md:w-[656px] xl:w-auto">
          {
          promotionsItems.map((item) => (
            <PromotionItem key={item.id} {...item} />
          ))
        }
        </div>
        {/* Store illustration */}
        <div className="w-full xl:ml-[60px] xl:relative">
          <article className="xl:absolute xl:-bottom-[2px] flex items-center justify-center md:justify-start mt-[34px] md:mt-[42px] xl:mt-0 md:ml-[55px] xl:ml-0">
            <p className="max-w-[161px] md:max-w-[250px] xl:max-w-[300px] text-[15px] md:text-[20px] xl:text-[25px] leading-[25px] md:leading-[30px] xl:leading-[34px] md:order-1">
              * Aplica solo para compras en nuestra tienda física.
            </p>
            <img src={isTablet ? storeItemTabletImage : storeItemImage} alt="Illustration" className="md:order-0 md:mr-2" />
          </article>
        </div>
      </div>
    </section>
  );
};

export default Promotions;
