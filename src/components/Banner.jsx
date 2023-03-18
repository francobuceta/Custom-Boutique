//import {AiOutlineInstagram, BsWhatsapp, }
import insta from "../assets/banner-icons/instagram.png";
import wp from "../assets/banner-icons/wp.png";

const Banner = () => {
    return (
        <>
            <div className="flex items-center justify-center w-full h-[158px] rounded-xl bg-secondary m-8">

                <div className="">
                    <p className="font-bold text-xl text-white">
                        <span className="text-3xl font-bold text-white">3 </span>
                        OPCIONES <br />PARA COMPRAR
                    </p>
                </div>

                <div className="flex flex-col items-center gap-3">
                    <img src={insta} alt="icono instagram" />
                    <p className="text-alternative">Clickeá tu look fav de IG y escribinos por DM</p>
                </div>

                <div>
                    <img src={wp} alt="icono tienda nube" />
                    <p className="text-alternative">Visitá nuestra Tienda Nube</p>
                </div>

                <div>
                    <img src={wp} alt="icono whatssap" />
                    <p className="text-alternative">Escribinos al WhatsApp para info y ventas</p>
                </div>
            </div>
        </>
    )
}

export default Banner;