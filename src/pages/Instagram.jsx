import { useEffect, useState } from 'react';
import SectionTitle from '../components/shared/SectionTitle';
import InstagramCard from '../components/sections/instagram/InstagramCard';
import useMediaQuery from '../hooks/useMediaQuery';
import fetchInstagramImages from '../utils/instagramFetch';
import customboutiProfile from '../assets/images/custombouti-profile.jpg';

const Instagram = () => {
  const isSmDesktop = useMediaQuery('(min-width: 1024px)');
  const [instagramImages, setInstagramImages] = useState([]);

  useEffect(() => {
    const fetchIgImages = async () => {
      const res = await fetchInstagramImages();
      const images = res.data.filter((item) => item.media_type === 'IMAGE');
      setInstagramImages(images);
    };
    fetchIgImages();
  }, []);

  return (
    <section id="instagram" className="pt-8 md:pt-[57px] xl:pt-20">
      <SectionTitle title="Instagram" />
      <div className="px-[21px] w-full mt-[23.79px]">
        <a href="https://www.instagram.com/custombouti/" className="flex items-center gap-[6px] md:gap-[10px] xl:gap-[11px] max-w-[332.1px] md:max-w-[656px] lg:max-w-[944px] xl:max-w-[1107px] m-auto mb-[9px] md:mb-4 xl:mb-5">
          <img src={customboutiProfile} alt="custombouti instagram profile" className="w-[25px] h-[25px] md:w-10 md:h-10 xl:w-[50px] xl:h-[50px] rounded-full bg-primary border border-primary" />
          <p className="text-[10px] leading-3 md:text-[13px] md:leading-4 xl:text-[15px] xl:leading-[18px]">custombouti</p>
        </a>
        <div className="grid grid-cols-12 gap-[6.8px] md:gap-[13.42px] xl:gap-[15px] max-w-[332px] md:max-w-[656px] lg:max-w-[944px] xl:max-w-[1107px] m-auto ">
          {
            instagramImages.slice(0, isSmDesktop ? 6 : 4).map((image) => (
              <InstagramCard
                key={image.id}
                src={image.media_url}
                link={image.permalink}
              />
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Instagram;
