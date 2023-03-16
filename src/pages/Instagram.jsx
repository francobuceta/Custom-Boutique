import SectionTitle from '../components/shared/SectionTitle';
import InstagramCard from '../components/sections/instagram/InstagramCard';
import useMediaQuery from '../hooks/useMediaQuery';

// Fake data
const igImages = [
  {
    id: 1,
    src: 'https://instagram.fros2-2.fna.fbcdn.net/v/t51.2885-15/334200434_1430510064443178_2620943001446157267_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=instagram.fros2-2.fna.fbcdn.net&_nc_cat=106&_nc_ohc=M6FW9IDDIcIAX_zVdFg&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AfDIqnCr6gyrQvMFBT57-tzuMLu_1SiNok8fqp_2HY-1Mg&oe=6418F0DB&_nc_sid=4f375e',
  },
  {
    id: 2,
    src: 'https://instagram.fros2-2.fna.fbcdn.net/v/t51.2885-15/334200434_1430510064443178_2620943001446157267_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=instagram.fros2-2.fna.fbcdn.net&_nc_cat=106&_nc_ohc=M6FW9IDDIcIAX_zVdFg&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AfDIqnCr6gyrQvMFBT57-tzuMLu_1SiNok8fqp_2HY-1Mg&oe=6418F0DB&_nc_sid=4f375e',
  },
  {
    id: 3,
    src: 'https://instagram.fros2-2.fna.fbcdn.net/v/t51.2885-15/334200434_1430510064443178_2620943001446157267_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=instagram.fros2-2.fna.fbcdn.net&_nc_cat=106&_nc_ohc=M6FW9IDDIcIAX_zVdFg&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AfDIqnCr6gyrQvMFBT57-tzuMLu_1SiNok8fqp_2HY-1Mg&oe=6418F0DB&_nc_sid=4f375e',
  },
  {
    id: 4,
    src: 'https://instagram.fros2-2.fna.fbcdn.net/v/t51.2885-15/334200434_1430510064443178_2620943001446157267_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=instagram.fros2-2.fna.fbcdn.net&_nc_cat=106&_nc_ohc=M6FW9IDDIcIAX_zVdFg&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AfDIqnCr6gyrQvMFBT57-tzuMLu_1SiNok8fqp_2HY-1Mg&oe=6418F0DB&_nc_sid=4f375e',
  },
  {
    id: 5,
    src: 'https://instagram.fros2-2.fna.fbcdn.net/v/t51.2885-15/334200434_1430510064443178_2620943001446157267_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=instagram.fros2-2.fna.fbcdn.net&_nc_cat=106&_nc_ohc=M6FW9IDDIcIAX_zVdFg&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AfDIqnCr6gyrQvMFBT57-tzuMLu_1SiNok8fqp_2HY-1Mg&oe=6418F0DB&_nc_sid=4f375e',
  },
  {
    id: 6,
    src: 'https://instagram.fros2-2.fna.fbcdn.net/v/t51.2885-15/334200434_1430510064443178_2620943001446157267_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=instagram.fros2-2.fna.fbcdn.net&_nc_cat=106&_nc_ohc=M6FW9IDDIcIAX_zVdFg&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AfDIqnCr6gyrQvMFBT57-tzuMLu_1SiNok8fqp_2HY-1Mg&oe=6418F0DB&_nc_sid=4f375e',
  },
];

function Instagram() {
  const isDesktop = useMediaQuery('(min-width: 1440px)');
  return (
    <section>
      <SectionTitle title="Instagram" />
      <div className="px-[21px] w-full mt-[23.79px]">
        {/* Show only on desktop */}
        <div className="hidden xl:flex items-center gap-[13px] max-w-[1107px] m-auto mb-[23px]">
          {/* Replace this span with an img */}
          <span src="" alt="" className="w-[50px] h-[50px] rounded-full bg-primary" />
          <p className="text-[13px]">custombouti</p>
        </div>
        <div className="grid grid-cols-12 gap-[6.8px] md:gap-[13.42px] xl:gap-[15px] max-w-[332px] md:max-w-[656px] xl:max-w-[1107px] m-auto ">
          {
            igImages.map((image, index) => (
              !isDesktop && index < 4 ? <InstagramCard key={image.id} src={image.src} />
                : isDesktop && <InstagramCard key={image.id} src={image.src} />
            ))
          }
        </div>
      </div>
    </section>
  );
}

export default Instagram;
