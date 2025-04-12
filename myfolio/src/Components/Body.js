import React from "react";
import "../Styles/Boday.css";
import myImage from "../Assets/Profile.jpeg";
import { motion } from "framer-motion";

const Body: React.FC = () => {

  const handleWhatsAppRedirect = () => {
    window.open("https://wa.me/917045986493?text=Hi%20Deepak%2C%20I%27m%20interested%20in%20hiring%20you!", "_blank");
  };

  return (
    <div className="MainContainer">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="background-video"
      >
        <source src={require("../Assets/VIDO.mp4")} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Left Side - Information */}
      <motion.div
        className="InfoContainer"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1 className="fadeIn" whileHover={{ scale: 1.1 }}>
          Hello, I'm Deepak Yadav
        </motion.h1>
        <motion.h2 className="slideIn" whileHover={{ scale: 1.05 }}>
          MERN STACK DEVELOPER
        </motion.h2>
        <motion.p className="fadeIn" whileHover={{ scale: 1.05 }}>
          Passionate about building mobile applications with smooth UI and great performance.
        </motion.p>
        <motion.button
          className="cta-button slideIn"
          whileHover={{ scale: 1.1, backgroundColor: "#ff9800" }}
          onClick={handleWhatsAppRedirect}
        >
          Hire Me
        </motion.button>
      </motion.div>

      {/* Right Side - Image */}
      <motion.div
        className="ImageContainer"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.img
          src={myImage}
          alt="Deepak Yadav"
          className="profileImage fadeIn"
          whileHover={{ scale: 1.1, rotate: 5 }}
        />
      </motion.div>
    </div>
  );
};

export default Body;
