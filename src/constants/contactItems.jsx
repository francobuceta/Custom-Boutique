import { IoLocationSharp } from 'react-icons/io5';
import { AiFillClockCircle } from 'react-icons/ai';
import { FaGlobe } from 'react-icons/fa';

const iconStyle = 'text-[30px] text-primary';

const contactItems = [
  {
    title: 'Local',
    subtitle: 'Yrigoyen 235 - Bahía Blanca',
    icon: <IoLocationSharp className={iconStyle} />,
  },
  {
    title: 'Horarios',
    subtitle: '9.30 a 12.30 - 16.00 a 20.30',
    icon: <AiFillClockCircle className={iconStyle} />,
  },
  {
    title: 'Shop online',
    subtitle: 'custom15.mitiendanube.com/productos',
    icon: <FaGlobe className={iconStyle} />,
  },
];

export default contactItems;
