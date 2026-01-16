import { SlideRight } from "../utility/animation";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section>
      <div
        className="container grid grid-cols-1 md:grid-cols-2 min-h-[700px] relative"
        id="home"
      >
        <div className="py-14 flex flex-col justify-center md:py-0 font-playfair">
          <div className="text-center md:text-left space-y-6">
            <motion.h1
              variants={SlideRight(0.6)}
              initial="hidden"
              animate="visible"
              className="text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-normal"
            >
              Gym Gives you the perfect{" "}
              <span className="text-primary">Health</span>
            </motion.h1>
            <motion.p
              variants={SlideRight(1.2)}
              initial="hidden"
              animate="visible"
              className="text-gray-600 xl:max-w-[500px]"
            >
              It is a long established fact that a reader will be by readable
              content of a page when are the best product.
            </motion.p>
            <motion.button
              variants={SlideRight(1.5)}
              initial="hidden"
              animate="visible"
              className="bg-primary py-2 px-4 rounded-sm font-bold text-2xl hover:bg-secondary cursor-pointer"
            >
              Order Now
            </motion.button>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: -100, rotate: -60 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            src="./dumbell.webp"
            alt="dumbell"
            className="w-[350px] md:w-[550px] lg:w-[700px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
