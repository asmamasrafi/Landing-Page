'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-33 relative`}
    style={{ marginTop: '20px' }} // Add this style to make the footer stick to the bottom
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-5`}>
      <div className="flex items-center justify-between flex-wrap gap-4">
       
      </div>

      <div className="flex flex-col">
        <div className="mb-[10px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          
          <h4 className="font-extrabold text-[24px] text-white">
          InventoPlus
          </h4>
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2023 - 2024 . All rights reserved.
          </p>

          <div className="flex gap-4">
            {socials.map((social) => (
              <img
                key={social.name}
                src={social.url}
                alt={social.name}
                className="w-[24px] h-[24px] object-contain cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
