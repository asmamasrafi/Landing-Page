'use client';

import { motion } from 'framer-motion';
import { TitleText, TypingText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`} >
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="Most countries that target our services."   textStyles="text-center text-[#5DC7C9]"  />
      <TitleText
          title={<>Choose the world you want <br className="md:block hidden " />to explore</>}
          textStyles="text-center"
          
        />
      <motion.div
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[49px] p-10 font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <div className="flex justify-center items-center space-x-24  ">
  <div className="flex flex-col items-center  ">
    <img src="/egypt-removebg-preview.png"  className="w-20 h-20 object-contain" />
    <div className='font-sans text-m'>Egypte</div>
  </div>
  <div className="flex flex-col items-center">
  <img src="/Morocco-Flag-Circle.png " className="w-20 h-20 object-contain" />
    <div className='font-sans text-m'>Morocco</div>
  </div>
  <div className="flex flex-col items-center">
  <img src="/vecteezy_circle-flag-of-jordan_11571512_291.png"  className="w-20 h-20 object-contain" />
    <div className=' font-sans text-m'>Jordan</div>
  </div>
  <div className="flex flex-col items-center">
  <img src="/pngjoy.com_bahrain-circle-flag-png_29261661.png" className="w-20 h-20 object-contain" />
    <div className='font-sans text-m'>Bahrain</div>
  </div>
  <div className="flex flex-col items-center">
  <img src="/vecteezy_circle-flag-of-saudi-arabia_11571250_603.png"  className="w-20 h-20 object-contain" />
    <div className='  font-sans text-m'>Saudi arabia</div>
  </div>
  <div className="flex flex-col items-center">
  <img src="/vecteezy_circle-flag-of-qatar_11571358_632.png" className="w-20 h-20 object-contain" />
    <div className='  font-sans text-m'>Qatar</div>
  </div>
  
 
 
</div>




      </motion.div>

    </motion.div>
  </section>
);

export default About;
