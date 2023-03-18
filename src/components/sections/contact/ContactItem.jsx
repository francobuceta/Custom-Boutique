const ContactItem = ({ title, subtitle, icon }) => (
  <div className="flex flex-col text-[16px] leading-[19px]">
    <div className="flex items-center gap-[9.52px] md:gap-[10px]">
      {icon}
      <p className="font-bold uppercase text-secondary">
        {title}
      </p>
    </div>
    <p className="font-normal pl-[39.52px] md:pl-[40px] mt-4">{subtitle}</p>
  </div>
);

export default ContactItem;
