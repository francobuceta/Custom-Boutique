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
                ? "flex flex-col items-center justify-around w-full h-[180px] rounded-xl bg-secondary"
                : "flex items-center justify-around w-full h-[158px] rounded-xl bg-secondary"}>

                <div>
                    <p className="font-bold text-alternative text-[1.8rem]">
                        <span className="text-[2.8rem] font-bold text-alternative">3 </span>
                        {isMobile ? "OPCIONES PARA COMPRAR" : <>OPCIONES <br />PARA COMPRAR</>}
                    </p>
                </div>

                <div className="flex items-center justify-around grow-[0.3] gap-14">
                    <div className="banner_iconContainer">
                        <img src={isMobile ? mobileInsta : instagram} alt="icono instagram" className="banner_icon" />
                        <p className="text-alternative text-center text-xl">
                            {isTablet ? "Instagram" : <>Clickeá tu look fav de IG <br />y escribinos por DM</>}
                        </p>
                    </div>

                    <div className={isTablet ? "hidden" : "banner_separator"}></div>

                    <div className="banner_iconContainer">
                        <img src={isMobile ? mobileWp : wp} alt="icono tienda nube" className="banner_icon" />
                        <p className="text-alternative text-center text-xl">
                            {isTablet ? "Tienda Nube" : <>Visitá nuestra<br />Tienda Nube</>}
                        </p>
                    </div>

                    <div className={isTablet ? "hidden" : "banner_separator"}></div>

                    <div className="banner_iconContainer">
                        <img src={isMobile ? mobileWp : wp} alt="icono whatssap" className="banner_icon" />
                        <p className="text-alternative text-center text-xl">
                            {isTablet ? "WhatsApp" : <>Escribinos al WhatsApp <br />para info y ventas</>}
                        </p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Banner;