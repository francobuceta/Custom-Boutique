/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Link } from 'react-scroll';
import mobileLogo from '../assets/images/mobile_logo.png';
import desktopLogo from '../assets/images/desktopLogo.png';
import MobileMenu from '../components/sections/navbar/MobileMenu';
import useMediaQuery from '../hooks/useMediaQuery';

const navLinks = [
  { name: 'INICIO', href: 'home' },
  { name: 'INSTAGRAM', href: 'instagram' },
  { name: 'PROMOCIONES', href: 'promotions' },
  { name: 'CONTACTO', href: 'contact' },
];

const activeLinkClass = 'lg:text-[24px] leading-6 xl:leading-[29px] after:absolute after:-bottom-2 lg:after:-bottom-3 text-[20px] relative after:content-[""] after:bg-primary after:w-[25px] lg:after:w-[50px] after:left-[calc(50%-12.5px)] lg:after:left-[calc(50%-25px)] after:h-[3.5px] lg:after:h-[7px] after:transition-[width] after:duration-300 after:ease-in after';

const Navbar = () => {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const isBigScreen = useMediaQuery('(min-width: 1600px)');

  return (
    <nav className="flex justify-center md:justify-between items-center pt-6 pb-6 lg:pt-0 lg:pb-0 pl-[32px] md:pl-0 m-auto mb-[7px] fixed top-0 w-screen bg-navbar z-[400] drop-shadow-sm">
      <div className="flex items-center justify-around xl:justify-start md:w-full md:pr-[58px] m-auto max-w-[1440px]">
        <img
          src={isDesktop ? desktopLogo : mobileLogo}
          alt="Custom Bouti Logo"
        />
        <MobileMenu navLinks={navLinks} />
        <div className="hidden md:flex xl:ml-[116px]">
          <ul className="flex items-center gap-[35px] lg:gap-[100px] xl:gap-[120px] text-[14px] lg:text-[20px] leading-[17px] xl:leading-6 font-bold">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-black after:w-[0px] duration-300 transition-all ease-in-out"
                  activeClass={activeLinkClass}
                  aria-current={link.current ? 'page' : undefined}
                  spy
                  duration={650}
                  delay={0}
                  to={link.href}
                  offset={isBigScreen ? -350 : isDesktop ? -200 : -130}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
