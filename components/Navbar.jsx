import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { useMediaQuery } from 'react-responsive';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-26 relative`}
    >
      <div className="flex items-center justify-center">
        <div className="absolute w-[72%] h-[36%] inset-0 gradient-01 ml-11" />
        <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
          <div className="flex items-center text-white mb-1">
            <img
              src="/Brown_Cup_Coffee_Shop_Logo__1_-removebg-preview 1.png"
              alt="logo"
              className={`w-40 h-29 object-contain py-1 pb-1  ${isMobile ? 'mt-34 float-right' : ''}`}>
            </img>
            <h2 className={`font-extrabold text-3xl leading-30.24 -mt-5 -ml-14 ${isMobile ? ' hidden' : ''}`}>
              InventoPlus
            </h2>
          </div>

          <div className={`mr-2 mt-10 ${isMobile ? 'flex flex-col items-center mt-5 justify-center' : ''}`}>
            <div className={`flex items-baseline space-x-5 ${isMobile ? 'flex-col' : ''}`}>
              <Link
                activeClass="Home"
                to="Home"
                smooth={true}
                offset={isMobile ? -150 : 50}
                duration={500}
                className="cursor-pointer font-my-font text-white hover:text-[#5DC7C9] px-5 py-3"
              >
                Home
              </Link>

              <Link
                activeClass="about"
                to="about"
                smooth={true}
                offset={isMobile ? -100 : 50}
                duration={500}
                className="cursor-pointer font-my-font text-white hover:text-[#5DC7C9] px-5 py-4"
              >
                AboutUs
              </Link>

              <Link
                activeClass="Services"
                to="services"
                smooth={true}
                offset={isMobile ? -100 : 50}
                duration={500}
                className="cursor-pointer font-my-font text-white hover:text-[#5DC7C9] px-5 py-4"
              >
                Services
              </Link>

              <Link
                activeClass="FAQs"
                to="FAQs"
                smooth={true}
                offset={isMobile ? -100 : 50}
                duration={500}
                className="cursor-pointer font-my-font text-white hover:text-[#5DC7C9] px-5 py-4"
              >
                FAQs
              </Link>

              <Link
                activeClass="ContactUs"
                to="ContactUs"
                smooth={true}
                offset={isMobile ? -100 : 50}
                duration={500}
                className="cursor-pointer font-my-font text-white hover:text-[#5DC7C9] px-5 py-4"
              >
                ContactUs
              </Link>

              <button
                type="button"
                className={`flex items-center h-fit py-4 px-8 bg-[#1825e1] rounded-[32px] hover:bg-[#5DC7C9] ${ isMobile ? 'hidden' : '' }`}
>
<span className="font-bold text-[15px] text-white whitespace-nowrap">GET STARTED</span>
</button>
</div>
</div>
</div>
</div>
</motion.nav>
);
};

export default Navbar;

