"use client"
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const FadeInImageOnScroll = ({ imageUrl }) => {
  return (
    <motion.div
      id="image-container"
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: {
            duration: 2.5,
        },
    }}
      style={{
        width: '100%',
        height: '100vh',
        backgroundImage: `url('${imageUrl}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    />
  );
};

export default FadeInImageOnScroll;
