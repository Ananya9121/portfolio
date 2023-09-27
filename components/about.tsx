"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">

        After working in Mechanical sector, accidently I came accross web development and with my interest I joined Fullstack (MERN) web development bootcamp. My journey from a mechanical engineering background to the IT sector has instilled in me a deep sense of adaptability, problem-solving, and a relentless pursuit of excellence, qualities that I believe resonate with today’s competitive world.

        My core stack is <span className="font-medium">React, Node.js, and MongoDB</span>. I am also familiar with <span className="italic">TypeScript, Nestjs, Nextjs</span>. I am always looking to learn new technologies. I am currently looking for a <span className="font-medium italic"> full-time position as a software developer</span>.

        One of my strengths as a developer is my ability to work collaboratively with cross-functional teams. I thrive in an environment where I can communicate with other developers, designers, and product managers to ensure that the software I develop meets the needs of end-users.
      </p>
      <p>
        I also do <span className="italic">painting, watching documenteries</span>. I also enjoy learning new things. I am presently analyzing various materials with the aim of creating something practical from them.
      </p>





    </motion.section>
  );
}
