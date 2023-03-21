import { useEffect, useState } from 'react';
import SectionTitle from '../components/shared/SectionTitle';
import InstagramCard from '../components/sections/instagram/InstagramCard';
import useMediaQuery from '../hooks/useMediaQuery';
import fetchInstagramImages from '../utils/instagramFetch';
import customboutiProfile from '../assets/images/custombouti-profile.jpg';

function Instagram() {
  const isDesktop = useMediaQuery('(min-width: 1440px)');
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
        {/* Show only on desktop */}
        <a href="https://www.instagram.com/custombouti/" className="hidden xl:flex items-center gap-[13px] max-w-[1107px] m-auto mb-[23px]">
          <img src={customboutiProfile} alt="custombouti instagram profile" className="w-[50px] h-[50px] rounded-full bg-primary border border-primary" />
          <p className="text-[13px]">custombouti</p>
        </a>
        <div className="grid grid-cols-12 gap-[6.8px] md:gap-[13.42px] xl:gap-[15px] max-w-[332px] md:max-w-[656px] xl:max-w-[1107px] m-auto ">
          {
            instagramImages.slice(0, isDesktop ? 6 : 4).map((image) => (
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
}

export default Instagram;
