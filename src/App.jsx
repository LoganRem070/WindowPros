import React from "react";
import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <a href="#top" className="text-lg font-bold">Window Pros</a>
          <div className="space-x-4">
            <a href="#services" className="text-gray-700 hover:text-blue-500">Services</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-500">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="top"
        className="relative h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('./src/bg.jpg')" }}
      >
        <motion.div
          className="text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-bold">Window Pros</h1>
          <p className="text-xl mt-4">
            Your Windows<br />Our Passion
          </p>
        </motion.div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="relative py-16 bg-white"
        style={{
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
          <p className="text-gray-700 text-lg text-center">
            We offer top-notch window cleaning services for residential and commercial properties. Our
            experienced team ensures your windows are spotless, letting the sunshine in and enhancing
            your view. Contact us to learn more about how we can keep your windows sparkling clean!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
          <p className="text-gray-700 text-center mb-4">Phone: (123) 456-7890</p>
          <p className="text-gray-700 text-center mb-4">Email: info@windowpros.com</p>
          <p className="text-gray-700 text-center">Address: 123 Window Lane, Clean City, ST 45678</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 bg-gray-200">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()} Window Pros. All rights reserved.</p>
          <p className="text-sm text-gray-600">Developed by LoganRem070</p>
        </div>
      </footer>
    </div>
  );
}
