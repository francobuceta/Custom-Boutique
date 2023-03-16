import { AiOutlineInstagram } from 'react-icons/ai';

const InstagramCard = ({ src }) => (
  <article className="h-[165.63px] md:h-[327.17px] xl:h-[359px] bg-[#D9D9D9] rounded-[4.30px] col-span-6 xl:col-span-4 relative">
    <AiOutlineInstagram className="absolute text-[20.5px] md:text-[34.65px] xl:text-[38px] bottom-[11.65px] md:bottom-[23.01px] xl:bottom-[25.25px] right-[8.6px] md:right-[16.99px] xl:right-[18.99px]" />
    <img src="https://humanidades.com/wp-content/uploads/2018/08/bosque-1-e1577589217640.jpg" alt="Instagram Post" className="rounded-[4.30px] w-full h-full" />
  </article>
);

export default InstagramCard;
