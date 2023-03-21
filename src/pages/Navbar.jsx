import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from "react-scroll";
import logo from "../assets/logo.png";
import facebook from "../assets/images/mobile_face.png";
import instagram from "../assets/images/mobile_insta.png";
import tiktok from "../assets/images/mobile_tiktok.png";
import mobile_logo from "../assets/images/mobile_logo.png";

const Navbar = () => {

    const navigation = [
        { name: 'INICIO', href: 'home' },
        { name: 'INSTAGRAM', href: 'instagram' },
        { name: 'PROMOCIONES', href: 'promotions' },
        { name: 'CONTACTO', href: 'contact' },
    ]

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <Disclosure as="nav" className="bg-navbar sticky top-0 z-50">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 md:px-6 lg:px-8">
                        <div className="relative flex lg:h-48 md:h-28 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center md:justify-around">
                                <div className="flex flex-shrink-0 items-center">
                                    <img
                                        className="block h-28 w-auto lg:hidden"
                                        src={logo}
                                        alt="Logo Custom Boutique"
                                    />
                                    <img
                                        className="hidden w-auto lg:block"
                                        src={logo}
                                        alt="Logo Custom Boutique"
                                    />
                                </div>
                                <div className="hidden md:ml-6 md:block">
                                    <div className="flex lg:gap-4">
                                        {navigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className={classNames('navbar_text')}
                                                aria-current={item.current ? 'page' : undefined}
                                                activeClass="navbar_textCurrent" smooth spy to={item.href} 
                                                offset= {-200}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="md:hidden">
                        <div className="space-y-1 px-2 pt-2 pb-3">
                            {navigation.map((item) => (
                                <Link
                                    
                                    key={item.name}
                                    href={item.href}
                                    className={classNames('navbar_text')}
                                    aria-current={item.current ? 'page' : undefined}
                                    activeClass="navbar_textCurrent" smooth spy to={item.href} 
                                    offset= {-250}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>

                        <div className='navbar_separator'></div>

                        <div className='flex justify-center gap-4 mt-8'>
                            <img src={instagram} alt="instagram icon" />
                            <img src={facebook} alt="facebook icon" />
                            <img src={tiktok} alt="tiktok icon" />
                        </div>

                        <div className='flex flex-col justify-center'>
                            <img src={mobile_logo} className="w-48 h-20" alt="Logo Custom Boutique" />
                            <p>Yrigoyen 235 - Bahía Blanca</p>
                        </div>

                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

export default Navbar;