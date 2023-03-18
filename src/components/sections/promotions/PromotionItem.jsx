import useMediaQuery from '../../../hooks/useMediaQuery';

const PromotionItem = ({
  id, description, boldText, image, imageOrder,
}) => {
  const isTablet = useMediaQuery('(min-width: 768px)');

  const positionOnTablet = () => {
    if (id === 1 || id === 3) return 'md:justify-end';
    if (id === 2) return 'md:justify-start';
    return '';
  };

  return (
    <article className={`w-full flex ${positionOnTablet()} xl:justify-start`}>
      <div className="flex items-center max-w-[320px] md:max-w-[470px] xl:max-w-[535px]">
        <span className="order-0 text-[30px] md:text-[50px] leading-9 md:leading-[60px] text-primary font-bold mr-4 md:mr-5">
          {id}
          .
        </span>
        <p className="order-2 text-[15px] md:text-[20px] xl:text-[25px] leading-[25px] md:leading-[30px] xl:leading-[34px]">
          {description}
          {' '}
          <span className="font-bold">{boldText}</span>
        </p>
        <img src={isTablet ? image.tablet : image.mobile} alt="Illustration" className={`${imageOrder} mr-[14px] md:mr-6 ${id === 1 ? 'md:ml-[10px]' : ''}`} />
      </div>
    </article>
  );
};

export default PromotionItem;
