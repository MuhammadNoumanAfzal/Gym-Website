import React from "react";
import { motion } from "framer-motion";

const fadeUp = (delay) => ({
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  },
});

const Banner = ({ imageSrc, title, description, buttonText }) => {
  return (
    <section className=" py-14 px-8 font-playfair bg-[#f9f9f9]" id="blog">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 items-center gap-12"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Banner Image */}
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -100, rotate: -10 },
            show: {
              opacity: 1,
              x: 0,
              rotate: 0,
              transition: { duration: 1, ease: "easeOut" },
            },
          }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src={imageSrc}
            alt="Banner"
            className="w-[450px] sm:w-[320px] md:w-[580px] lg:w-[650px] xl:w-[700px] object-contain"
            loading="lazy"
          />
        </motion.div>

        {/* Banner Text */}
        <section>
          <div className="flex flex-col justify-center space-y-5 text-center md:text-left">
            <motion.h1
              variants={fadeUp(0.5)}
              className="text-3xl sm:text-4xl md:text-5xl font-poppins font-extrabold leading-tight text-gray-900"
            >
              {title}
            </motion.h1>

            <motion.p
              variants={fadeUp(0.7)}
              className="text-gray-700 text-lg sm:text-xl"
            >
              {description}
            </motion.p>

            <motion.button
              variants={fadeUp(1.1)}
              className="bg-primary text-white text-lg font-semibold py-3 px-6 rounded-full hover:bg-secondary transition duration-300 cursor-pointer w-40 mx-auto md:mx-0"
            >
              {buttonText}
            </motion.button>
          </div>
        </section>
      </motion.div>
    </section>
  );
};

export default React.memo(Banner);
