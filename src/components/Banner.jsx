import insta from "../assets/banner-icons/instagram.png";
import wp from "../assets/banner-icons/wp.png";

const Banner = () => {
    return (
        <>
            <div className="flex items-center justify-around w-full h-[158px] rounded-xl bg-secondary">

                <div className="">
                    <p className="font-bold text-alternative text-[1.8rem]">
                        <span className="text-[2.8rem] font-bold text-alternative">3 </span>
                        OPCIONES <br />PARA COMPRAR
                    </p>
                </div>

                <div className="banner_iconContainer">
                    <img src={insta} alt="icono instagram" className="banner_icon" />
                    <p className="text-alternative text-center text-xl">Clickeá tu look fav de IG <br/>y escribinos por DM</p>
                </div>

                <div className="banner_separator"></div>

                <div className="banner_iconContainer">
                    <img src={wp} alt="icono tienda nube" className="banner_icon" />
                    <p className="text-alternative text-center text-xl">Visitá nuestra<br/>Tienda Nube</p>
                </div>

                <div className="banner_separator"></div>

                <div className="banner_iconContainer">
                    <img src={wp} alt="icono whatssap" className="banner_icon" />
                    <p className="text-alternative text-center text-xl">Escribinos al WhatsApp <br/>para info y ventas</p>
                </div>
            </div>
        </>
    )
}

export default Banner;