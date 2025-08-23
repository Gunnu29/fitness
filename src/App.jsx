import './App.css';
import About from './components/About';
import Cards from './components/Cards';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import GreenBg from './components/GreenBg';
import Main from './components/Main';
import Tilted from './components/Tilted';
import Navbar from './components/Navbar';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';
import Quote from './components/Quote';
import TextMove from './components/TextMove';

function App() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animation for outer ring
  const springX = useSpring(mouseX, { damping: 25, stiffness: 300 });
  const springY = useSpring(mouseY, { damping: 25, stiffness: 300 });

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX - 10); // offset to center
      mouseY.set(e.clientY - 10);
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <>

      <Navbar />
      <Main />
    
     <Cards/>
       <GreenBg/>
       <Carousel/>
      <Tilted/>
      <Quote/>
      <TextMove/>
       <Footer/>
     

      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 h-[300px] w-[300px] bg-[#95C11E]/35 blur-2xl rounded-full pointer-events-none z-[9999]"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 h-[20px] w-[20px] bg-[#95C11E] rounded-full pointer-events-none z-[9999]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
}

export default App;
