import footerLinks from '../constants/footerLinks';
import FooterLink from '../components/sections/footer/FooterLink';

const Footer = () => (
  <footer className="bg-secondary pt-[56.12px] md:pt-[45px] pb-[28px] md:pb-[47px]">
    <section className="max-w-[312px] md:max-w-[529px] m-auto">
      <h4 className="uppercase text-[#F2F2F2] text-[15px] md:text-[20px] font-bold leading-[18px] md:leading-[24px] text-center">
        Síguenos en nuestras redes sociales
      </h4>
      <div className="flex justify-between mt-[25.87px] md:mt-10">
        {
        footerLinks.map((link) => (
          <FooterLink href={link.href} img={link.img} />
        ))
       }
      </div>
    </section>
  </footer>
);

export default Footer;
