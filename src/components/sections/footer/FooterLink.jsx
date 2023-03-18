const FooterLink = ({ href, img }) => (
  <a className="flex flex-col md:flex-row items-center gap-[7px] md:gap-[10px] text-white" href={href}>
    <img src={img} alt="instagram logo" className="w-[27px] h-[27px]" />
    <p className="text-[11.25px] md:text-[16px] underline leading-[13px] md:leading-[19px]">custombouti</p>
  </a>
);

export default FooterLink;
