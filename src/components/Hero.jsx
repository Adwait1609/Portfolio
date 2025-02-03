// import { motion } from "framer-motion";
// import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";
// import React, { useState, useEffect } from "react";

// // Typing Effect Component
// const TypingEffectStack = ({ texts, typingSpeed = 100, pauseTime = 1000 }) => {
//   const [visibleTexts, setVisibleTexts] = useState([]);
//   const [charIndex, setCharIndex] = useState(0);
//   const [lineIndex, setLineIndex] = useState(0);
//   const [currentLine, setCurrentLine] = useState("");

//   useEffect(() => {
//     let timeout;

//     if (lineIndex < texts.length) {
//       if (charIndex < texts[lineIndex].length) {
//         // Typing characters
//         timeout = setTimeout(() => {
//           setCurrentLine((prev) => prev + texts[lineIndex][charIndex]);
//           setCharIndex((prev) => prev + 1);
//         }, typingSpeed);
//       } else {
//         // Finish typing current line, add to visible texts, and pause
//         timeout = setTimeout(() => {
//           setVisibleTexts((prev) => [...prev, texts[lineIndex]]);
//           setCurrentLine("");
//           setCharIndex(0);
//           setLineIndex((prev) => prev + 1);
//         }, pauseTime);
//       }
//     }

//     return () => clearTimeout(timeout);
//   }, [texts, charIndex, lineIndex, typingSpeed, pauseTime]);

//   return (
//     <div>
//       {visibleTexts.map((line, index) => (
//         <p
//           key={index}
//           className={`${styles.heroSubText} text-white`} // Smaller text style
//         >
//           {line}
//         </p>
//       ))}
//       {currentLine && (
//         <p className={`${styles.heroSubText} text-white`}>
//           {currentLine}
//         </p>
//       )}
//     </div>
//   );
// };

// // Hero Component
// const Hero = () => {
//   return (
//     <section className={`relative w-full h-screen mx-auto`}>
//       <div
//         className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
//       >
//         <div className="flex flex-col justify-center items-center mt-5">
//           <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
//           <div className="w-1 sm:h-80 h-40 violet-gradient" />
//         </div>

//         <div>
//           <TypingEffectStack
//   texts={[
//     <span>Hi, I'm <span className='text-[#915EFF] font-bold'>Adwait</span>.</span>,  // Bold and highlighted Adwait
//     "I love solving problems.",
//     "I'm passionate about technology.",
//     "Always eager to learn and explore new ideas and challenges.",
//   ]}
//   typingSpeed={80} // Faster typing speed
//   pauseTime={1000}  // Reduced pause time between lines
// />

//         </div>
//       </div>

//       <ComputersCanvas />

//       <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
//         <a href="#about">
//           <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
//             <motion.div
//               animate={{
//                 y: [0, 24, 0],
//               }}
//               transition={{
//                 duration: 1.5,
//                 repeat: Infinity,
//                 repeatType: "loop",
//               }}
//               className="w-3 h-3 rounded-full bg-secondary mb-1"
//             />
//           </div>
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Hero;



import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import React, { useState, useEffect } from "react";

// Typing Effect Component
const TypingEffectStack = ({ texts, typingSpeed = 100, pauseTime = 1000 }) => {
  const [visibleTexts, setVisibleTexts] = useState([]);
  const [charIndex, setCharIndex] = useState(0);
  const [lineIndex, setLineIndex] = useState(0);
  const [currentLine, setCurrentLine] = useState("");

  useEffect(() => {
    let timeout;

    if (lineIndex < texts.length) {
      if (charIndex < texts[lineIndex].length) {
        // Typing characters
        timeout = setTimeout(() => {
          setCurrentLine((prev) => prev + texts[lineIndex][charIndex]);
          setCharIndex((prev) => prev + 1);
        }, typingSpeed);
      } else {
        // Finish typing current line, add to visible texts, and pause
        timeout = setTimeout(() => {
          setVisibleTexts((prev) => [...prev, texts[lineIndex]]);
          setCurrentLine("");
          setCharIndex(0);
          setLineIndex((prev) => prev + 1);
        }, pauseTime);
      }
    }

    return () => clearTimeout(timeout);
  }, [texts, charIndex, lineIndex, typingSpeed, pauseTime]);

  return (
    <div>
      {visibleTexts.map((line, index) => (
        <p
          key={index}
          className="text-white text-lg font-medium" // Adjusted text size and font style
        >
          {line}
        </p>
      ))}
      {currentLine && (
        <p className="text-white text-lg font-medium">
          {currentLine}
        </p>
      )}
    </div>
  );
};

// Hero Component
const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="relative">
          {/* Typing Effect */}
          <TypingEffectStack
            texts={[
              "Hi, I'm Adwait.", // Custom text for the typing effect
              "I love solving problems.",
              "I'm passionate about technology.",
              "Always eager to learn and explore new ideas.",
            ]}
            typingSpeed={80} // Adjusted typing speed
            pauseTime={1000}  // Reduced pause time
          />
        </div>
      </div>

      {/* 3D model (ComputersCanvas) */}
      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
