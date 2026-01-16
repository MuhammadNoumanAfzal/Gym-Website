import React from "react";
import { EquipmentData } from "../mockData/data";
import { FaDumbbell, FaBicycle, FaRunning, FaHeartbeat } from "react-icons/fa";
import { motion } from "framer-motion";
import { SlideLeft, SlideRight } from "../utility/animation";

const iconsMap = {
  FaDumbbell,
  FaBicycle,
  FaRunning,
  FaHeartbeat,
};

const Equipment = () => {
  return (
    <section className="container py-14" id="products">
      <motion.h1
        variants={SlideRight(0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-5xl font-bold text-center mb-16 font-playfair"
      >
        What We Offer For You
      </motion.h1>

      <motion.div
        variants={SlideLeft(0.9)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
      >
        {EquipmentData.map(
          ({ id, icon, name, description, longDescription }) => {
            const IconComponent = iconsMap[icon];

            return (
              <div
                key={id}
                className="p-8 bg-gray-900 text-white cursor-pointer rounded-lg text-center transition-all duration-300 hover:bg-white hover:text-black transform hover:scale-105 shadow-lg hover:shadow-2xl flex flex-col items-center justify-center h-full"
              >
                <IconComponent className="text-5xl mb-6" />
                <h3 className="text-xl font-bold mb-4">{name}</h3>
                <p className="text-sm">{description}</p>
                {longDescription && (
                  <p className="text-sm mt-2">{longDescription}</p>
                )}
              </div>
            );
          }
        )}
      </motion.div>
    </section>
  );
};

export default Equipment;
