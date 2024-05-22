'use client';

import Image from "next/image";
import SearchSection from "./_components/SearchSection";
import GlobalApi from "./_services/GlobalApi";
import React, { useState, useEffect } from 'react';
import BusinessList from "./_components/BusinessList";
import { motion } from 'framer-motion';


export default function Home() {

  const [businessList,setBusinessList]=useState([]);
  useEffect(()=>{
    getAllBusinessList();
  },[])

/**
   * Used to get All Business List
   */
const getAllBusinessList=()=>{
  GlobalApi.getAllBusinessList().then(resp=>{
    setBusinessList(resp.businessLists)
    //console.log(resp);
  })
}

  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    transition={{duration:0.5}}
    >
      <SearchSection/>
      <BusinessList businessList={businessList}
      title={'Select your barber'} />
    </motion.div>
  );
}
