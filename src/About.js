import React from 'react'
import HeroSection from './components/HeroSection';
import { useProductContext } from './context/productContext';

const About = () => {
  // eslint-disable-next-line
  const MyName = useProductContext();

  const data = {
    name: "E Digital",
    line: "You need it, we deliver it.",
  };

  return (
    <>
      <HeroSection myData={data} />
    </>
  )
}

export default About