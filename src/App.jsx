import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Equipments from "./components/Equipments";
import Banner from "./components/Banner";
import Banner2 from "./components/Banner2";
import Discount from "./components/Discount";
import Programs from "./components/Programs";
import Testimonials from "./components/Testimonial";
import Footer from "./components/Footer";
import bgImg from "./assets/bg.webp";

const App = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <NavBar />
        <Hero />
      </div>
      <Equipments />
      <Banner
        imageSrc="./2.webp"
        title="Transform Your Body & Mind With Perfect Fitness"
        description="Achieve your fitness goals with expert guidance and premium equipment. Build strength, endurance, and confidence."
        buttonText="Explore More"
      />
      <Programs />
      <Banner2 />
      <Testimonials />
      <Discount />
      <Footer />
    </div>
  );
};

export default App;
