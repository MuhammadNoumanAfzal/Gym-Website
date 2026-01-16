import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { testimonials } from "../mockData/data";

// ⭐ Star Rating Component
const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;

  return (
    <div className="flex justify-center">
      {[...Array(fullStars)].map((_, index) => (
        <FaStar key={index} className="text-yellow-500 text-xl" />
      ))}
      {halfStar && <FaStarHalfAlt className="text-yellow-500 text-xl" />}
      {[...Array(5 - Math.ceil(rating))].map((_, index) => (
        <FaRegStar key={index} className="text-yellow-500 text-xl" />
      ))}
    </div>
  );
};

// ✨ Testimonial Card Component
const TestimonialCard = ({ testimonial, index }) => {
  return (
    <motion.div
      initial={{ rotateY: 180, scale: 0.8 }}
      whileInView={{ rotateY: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
      viewport={{ once: true }}
      className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl text-center w-full md:w-1/3 flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:rotate-3 border border-white/20"
    >
      <FaQuoteLeft className="text-3xl text-primary mb-4" />
      <p className="text-lg text-gray-300 italic">{testimonial.review}</p>

      {/* Star Rating */}
      <div className="mt-4">
        <StarRating rating={testimonial.rating} />
      </div>

      {/* User Info */}
      <div className="mt-4 flex flex-col items-center">
        <motion.img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-16 h-16 rounded-full border-2 border-primary shadow-lg"
          whileHover={{ scale: 1.1, rotate: 10 }}
          transition={{ duration: 0.3 }}
        />
        <h3 className="mt-2 text-xl font-semibold">{testimonial.name}</h3>
      </div>
    </motion.div>
  );
};

// 🔥 Testimonials Component
const Testimonials = () => {
  return (
    <section className="py-10 bg-gray-900 text-white">
      <div className="container mx-auto text-center px-6 cursor-pointer">
        {/* Title Section */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl font-extrabold mb-6 text-primary"
        >
          What Our Clients Say
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-lg text-gray-300 mb-12"
        >
          Hear from people who transformed their fitness journey with us.
        </motion.p>

        {/* Testimonial Cards */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
