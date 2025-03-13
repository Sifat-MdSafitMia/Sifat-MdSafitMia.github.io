"use client";
import { Typewriter } from "react-simple-typewriter";

const TypewriterEffect = () => {
  return (
    <h1 className="text-3xl font-bold">
      {" "}
      <span className="text-gray-800">
        <Typewriter
          words={[
            "a Cybersecurity Specialist",
            "a Jr. Pentester",
            "a CTF Player",
            "an Web Developer",
            "an Ethical Hacker",
          ]}
          loop={0} // Infinite loop
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </span>
    </h1>
  );
};

export default TypewriterEffect;
