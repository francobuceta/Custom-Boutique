import instagram from "../assets/banner-icons/instagram.png";
import wp from "../assets/banner-icons/wp.png";
import mobileInsta from "../assets/banner-icons/mobile_instagram.png";
import mobileWp from "../assets/banner-icons/mobile_wp.png";
import useMediaQuery from '../hooks/useMediaQuery';

const Banner = () => {

    const isMobile = useMediaQuery('(max-width: 720px)');
    const isTablet = useMediaQuery('(max-width: 1068px)');

    return (
        <>
            <div className={isMobile
                ? "flex flex-col items-center justify-evenly md:justify-around w-full h-[180px] rounded-xl bg-secondary"
                : "flex items-center justify-around w-full h-[158px] rounded-xl bg-secondary"}>

                <div>
                    <p className="font-bold text-alternative md:text-[1.8rem] sm:text-[1.3rem] text-[1.1rem]">
                        <span className="md:text-[2.8rem] sm:text-[2rem] text-[1.5rem] font-bold text-alternative">3 </span>
                        {isMobile ? "OPCIONES PARA COMPRAR" : <>OPCIONES <br />PARA COMPRAR</>}
                    </p>
                </div>

                <div className="flex items-center justify-around grow-[0.3] md:gap-14 sm:gap-8 gap-3">
                    <div>
                        <a href='https://www.instagram.com/custombouti/' className="banner_iconContainer" target="_blank">
                            <img src={isMobile ? mobileInsta : instagram} alt="icono instagram" className="banner_icon" />
                            <p className="text-alternative text-center md:text-xl sm:text-lg">
                                {isTablet ? "Instagram" : <>Clickeá tu look fav de IG <br />y escribinos por DM</>}
                            </p>
                        </a>
                    </div>

                    <div className={isTablet ? "hidden" : "banner_separator"}></div>

                    <div>
                        <a href='https://www.custom15.mitiendanube.com/productos/' className="banner_iconContainer" target="_blank">
                            <img src={isMobile ? mobileWp : wp} alt="icono tienda nube" className="banner_icon" />
                            <p className="text-alternative text-center md:text-xl sm:text-lg">
                                {isTablet ? "Tienda Nube" : <>Visitá nuestra<br />Tienda Nube</>}
                            </p>
                        </a>
                    </div>

                    <div className={isTablet ? "hidden" : "banner_separator"}></div>

                    <div >
                        <a href='https://api.whatsapp.com/send/?phone=5492915661652&text=Hola%21+Estoy+interesada+en+las+prendas+que+tienes+publicadas&type=phone_number&app_absent=0' 
                            className="banner_iconContainer" target="_blank">
                            <img src={isMobile ? mobileWp : wp} alt="icono whatssap" className="banner_icon" />
                            <p className="text-alternative text-center md:text-xl sm:text-lg">
                                {isTablet ? "WhatsApp" : <>Escribinos al WhatsApp <br />para info y ventas</>}
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner;