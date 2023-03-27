import { IoLocationSharp } from 'react-icons/io5';
import { AiFillClockCircle } from 'react-icons/ai';

const iconStyle = 'text-[26px] text-primary';

const contactItems = [
  {
    title: 'Local',
    subtitle: 'Yrigoyen 235 - Bahía Blanca',
    icon: <IoLocationSharp className={iconStyle} />,
  },
  {
    title: 'Horarios',
    subtitle: '9.00 a 12.00 - 16.00 a 20.30',
    icon: <AiFillClockCircle className={iconStyle} />,
  },
];

export default contactItems;
