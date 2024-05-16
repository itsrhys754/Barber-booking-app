"use client";
import React from "react";
import Image from "next/image";
import haircut from "../../img/haircut.png";
import shave from "../../img/shave.png";
import beard from "../../img/beard.png";



function MyBooking() {
  return (
    <div className="my-10 mx-5 md:mx-36">
      <h2 className="font-bold text-[20px] mb-6">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <Image
            src={haircut}
            alt="Haircut"
            width={500}
            height={300}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Haircut</h3>
            <p className="text-gray-600">
              Get a fresh and stylish haircut from our skilled barbers. We offer
              a variety of styles to suit your preferences.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <Image
            src={shave}
            alt="Shave"
            width={500}
            height={300}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Shave</h3>
            <p className="text-gray-600">
              Enjoy a relaxing and close shave with our expert barbers. We use
              high-quality shaving products for a comfortable experience.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <Image
            src={beard}
            alt="Beard Trim"
            width={500}
            height={300}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Beard Trim</h3>
            <p className="text-gray-600">
              Keep your beard looking sharp and well-groomed with our precise
              beard trimming services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyBooking;