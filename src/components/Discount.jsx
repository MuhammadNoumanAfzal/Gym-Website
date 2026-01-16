import React from "react";
import { motion } from "framer-motion";
import { SlideLeft } from "../utility/animation";

const Button = ({ text, primary }) => (
  <button
    className={`py-4 px-8 rounded-md font-semibold text-xl transition duration-300 ${
      primary
        ? "bg-primary text-white hover:bg-secondary"
        : "bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white"
    }`}
  >
    {text}
  </button>
);

const Discount = () => {
  return (
    <section className="container py-16 px-4" id="offer">
      <div className="bg-gray-100 py-16 md:py-24 flex justify-center items-center text-center">
        <motion.div
          className="max-w-3xl space-y-8 px-6"
          variants={SlideLeft(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h1 className="text-3xl md:text-5xl font-bold uppercase leading-tight">
            Get <span className="text-primary">20% Discount</span> On Your First
            Order!
          </h1>
          <p className="text-lg text-gray-600">
            We ensure you get the best quality workout products tailored to your
            fitness needs. Shop now and take your workouts to the next level!
          </p>
          <div className="flex justify-center flex-wrap gap-6">
            <Button text="Learn More" primary />
            <Button text="Order Now" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Discount;
