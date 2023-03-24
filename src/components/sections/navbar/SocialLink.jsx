const SocialLink = ({ href, icon }) => (
  <a className="rounded-full bg-black text-white grid place-content-center w-8 h-8 text-[22px]" href={href}>
    {icon}
  </a>
);

export default SocialLink;
