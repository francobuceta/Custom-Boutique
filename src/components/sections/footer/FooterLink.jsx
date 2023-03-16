const FooterLink = ({ href, img }) => (
  <a className="flex flex-col md:flex-row items-center gap-[7px] text-white hover:text-primary transition-colors duration-300" href={href}>
    <img src={img} alt="instagram logo" className="w-[27px] h-[27px]" />
    <p className="text-[11.25px] md:text-[15px] leading-[13px] md:leading-[18px]">custombouti</p>
  </a>
);

export default FooterLink;
