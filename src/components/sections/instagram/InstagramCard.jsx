import { AiOutlineInstagram } from 'react-icons/ai';

const InstagramCard = ({ src, link }) => (
  <a href={link} target="_blank" className="cursor-pointer h-[165.63px] md:h-[327.17px] xl:h-[359px] bg-[#D9D9D9] rounded-[4.30px] col-span-6 xl:col-span-4 relative" rel="noreferrer">
    <div className="absolute bottom-[9.18px] md:bottom-[19px] xl:bottom-[22px] right-[6.1px] md:right-[13px] xl:right-4 rounded-full bg-[rgba(0,0,0,0.5)] p-1 z-[50]">
      <AiOutlineInstagram className="text-[20.5px] md:text-[34.65px] xl:text-[38px] text-white" />
    </div>
    <img
      src={src}
      alt="Instagram Post"
      className="rounded-[4.30px] w-full h-full"
    />
  </a>
);

export default InstagramCard;
