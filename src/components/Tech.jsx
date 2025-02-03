import React from 'react'
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies
        .filter(technology => technology.icon) // Filter out technologies without an icon
        .map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");