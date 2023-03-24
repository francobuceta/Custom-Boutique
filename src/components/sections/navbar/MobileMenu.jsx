/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import { Link } from 'react-scroll';
import { IoMdClose } from 'react-icons/io';
import { MdOutlineMenu } from 'react-icons/md';
import mobileLogo from '../../../assets/images/mobile_logo.png';
import socialLinks from '../../../constants/socialLinks';
import SocialLink from './SocialLink';

const activeLinkClass = 'text-primary text-[20px] leading-6';

const MobileMenu = ({ navLinks }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggleMenu = () => {
    setIsOpenMenu((prev) => !prev);
  };

  return (
    <>
      <div
        className="rounded-full z-[500] absolute top-[42px] left-[32px] text-[32px] text-secondary cursor-pointer md:hidden"
        onClick={toggleMenu}
      >
        <div className={`${isOpenMenu ? 'rotate-180' : '-rotate-180'} transition-transform duration-300 ease-in-out`}>
          {isOpenMenu ? <IoMdClose /> : <MdOutlineMenu />}
        </div>
      </div>
      <div
        className={`fixed left-0 top-0 flex flex-col w-[70%] h-screen z-[400] drop-shadow-md bg-navbar border-l-2 border-l-secondary-500 lg:hidden ${
          isOpenMenu ? 'translate-x-0' : '-translate-x-[100%]'
        } ease-in-out duration-300`}
      >
        <div className="relative h-full">
          <div className="pb-[50px] mt-[100px] px-[29px]">
            <ul className="px-[3px] flex flex-col gap-[35px] leading-[19px] font-bold uppercase">
              {
                navLinks.map((link) => (
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
                      offset={-155}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))
              }
            </ul>
            <div className="mt-[78.5px]  flex gap-[21px] items-center pt-[26px] border-t-2 border-t-black justify-center">
              {
                socialLinks.map((link) => (
                  <SocialLink key={link.id} {...link} />
                ))
              }
            </div>
          </div>

          <div className="flex flex-col justify-center items-center text-center absolute bottom-[100px] w-full">
            <img src={mobileLogo} alt="custombouti logo" className="w-[194px] h-[88px]" />
            <p className="text-[13px] leading-[19px]">Yrigoyen 235 - Bahía Blanca</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
