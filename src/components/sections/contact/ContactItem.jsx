const ContactItem = ({ title, subtitle, icon }) => (
  <div className="flex gap-[9.52px] md:gap-[10px] items-start">
    {icon}
    <div className="text-[15px] xl:text-[16px] leading-[18px] xl:leading-[19px] text-secondary">
      <p className="font-bold uppercase mb-[18px]">{title}</p>
      <p className="font-normal">{subtitle}</p>
    </div>
  </div>
);

export default ContactItem;
