"use client";
import React from "react";
import Image from "next/image";
import barberShop from "../../img/barber.png";
import { motion } from "framer-motion";

function MyBooking() {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    transition={{duration:0.5}}
    >
    <div className="my-10 mx-5 md:mx-36">
      <h2 className="font-bold text-[20px] mb-6">About Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Image
            src={barberShop}
            alt="Barber Shop"
            width={800}
            height={600}
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Our Story</h3>
          <p className="text-gray-600 mb-4">
            At The Barber Shop, we are passionate about providing
            exceptional grooming services in a welcoming and relaxing
            environment. Our team of skilled barbers is dedicated to delivering
            the highest quality haircuts, shaves, and beard trims, ensuring that
            every client leaves our shop feeling confident and looking their
            best.
          </p>
          <p className="text-gray-600 mb-4">
            With years of experience and a commitment to staying up-to-date with
            the latest trends and techniques, we pride ourselves on our ability
            to create personalized styles that suit each individual's unique
            look and lifestyle.
          </p>
          <h3 className="text-xl font-semibold mb-4">Our Approach</h3>
          <p className="text-gray-600">
            We believe that a great haircut or shave is more than just a
            service; it's an experience. That's why we strive to create a
            welcoming and relaxing atmosphere where our clients can unwind and
            enjoy the time they spend in our shop. From the moment you walk
            through our doors, you'll be greeted with a warm smile and a
            commitment to making your visit truly enjoyable.
          </p>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Find Us</h3>
        <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2371.9061496487807!2d-2.1717838237066864!3d53.52373296143662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb1dffffb7d55%3A0x7028a25c8b3c86!2sThe%20Blackwood%20Barber%20Co.!5e0!3m2!1sen!2suk!4v1715893245247!5m2!1sen!2suk"
  width="100%"
  height="600"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  className="w-full rounded-lg" // Removed h-auto
></iframe>
      </div>
    </div>
    </motion.div>
  );
}

export default MyBooking;