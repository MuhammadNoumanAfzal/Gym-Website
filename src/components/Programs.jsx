import React from "react";
import { motion } from "framer-motion";
import { FaDumbbell, FaBicycle, FaHeartbeat, FaRunning } from "react-icons/fa";

const programs = [
  {
    id: 1,
    title: "Strength Training",
    description:
      "Build muscle and improve endurance with our guided strength workouts.",
    icon: FaDumbbell,
    delay: 0.2,
  },
  {
    id: 2,
    title: "Cardio Workouts",
    description:
      "Boost your heart health with our high-energy cardio sessions.",
    icon: FaBicycle,
    delay: 0.4,
  },
  {
    id: 3,
    title: "Heart Health",
    description: "Monitor your fitness progress and stay in top condition.",
    icon: FaHeartbeat,
    delay: 0.6,
  },
  {
    id: 4,
    title: "Endurance Training",
    description:
      "Improve your stamina with expert-designed endurance routines.",
    icon: FaRunning,
    delay: 0.8,
  },
];

const fadeUp = (delay) => ({
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  },
});

const ProgramCard = ({ title, description, Icon, delay }) => (
  <motion.div
    variants={fadeUp(delay)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="p-8 bg-gray-900 rounded-xl shadow-lg flex flex-col items-center space-y-4 border-t-4 border-primary hover:scale-105 transition-transform duration-300"
  >
    <Icon className="text-5xl text-primary" />
    <h3 className="text-2xl font-semibold text-white">{title}</h3>
    <p className="text-white text-center">{description}</p>
  </motion.div>
);

const Programs = () => {
  return (
    <section className="container py-14" id="program">
      <div className="container mx-auto text-center">
        {/* Title Section */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl font-extrabold text-gray-900 mb-6"
        >
          Our Fitness Programs
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-lg text-gray-600 mb-12"
        >
          Choose the perfect program for your fitness goals and start training
          today!
        </motion.p>

        {/* Program Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6 md:px-0 cursor-pointer">
          {programs.map((program) => (
            <ProgramCard
              key={program.id}
              title={program.title}
              description={program.description}
              Icon={program.icon}
              delay={program.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
