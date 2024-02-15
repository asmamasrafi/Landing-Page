'use client';

import { motion } from 'framer-motion';

import { fadeIn } from '../utils/motion';

const InsightCard = ({ imgUrl, title, subtitle, index }) => (
  <div className="flex flex-col md:flex-row gap-4">
  <div className="flex md:w-1/">
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.5, 1)}
    className="flex md:flex-row flex-col gap-4"
  >
    <img
      src={imgUrl}
      alt="planet-01"
      className="md:w-[120px] w-100 h-[80px]  object-cover"
    />
    <div className="w-full flex justify-between items-center">
      <div className="flex-1 md:ml-[62px] flex flex-col max-w-[800px]">
        <h2 className="font-normal lg:text-[33px] text-[10px] text-white">
          {title}
        </h2>
        <p className="mt-[10px]  font-normal lg:text-[15px] text-[14px] text-secondary-white">
          {subtitle}
        </p>
      </div>

      <div
        className="lg:flex hidden items-center justify-center w-[70px] h-[70px] rounded-full bg-transparent border-[1px] border-white"
      >
        <img
          src="/arrow.svg"
          alt="arrow"
          className="w-[40%] h-[40%] object-contain"
        />
      </div>
    </div>
  </motion.div>
  </div>
  </div>
);

export default InsightCard;
