"use client"

import React, { useEffect } from 'react'
import SectionHeading from './sectionHeading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'

export default function About() {

  const {ref}=useSectionInView({sectionName:"About"},0.75)



  return (
    <motion.section className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id='about'
      ref={ref}
    >
      <SectionHeading>About me</SectionHeading>
      <p className='mb-3'>
        After graduating with a Engineering degree
        ,
        I chose to follow my passion for programming. I further honed my skills by completing the <span className='font-medium'>CDAC</span> program in Pune, Diploma in Advanced Computing(DAC) and learned{" "}
        <span className='font-medium'>full-stack web development.</span>{" "}
        <span className='italic'>My favourite part of programming</span> is the problem-solving aspect. Theres <span className='underline'>joy</span> in overcoming the challenges and arriving at a resolution. My primary tech stack revolves around <span className="font-medium">React, Next.js, Node.js, MongoDB and MySQL</span>. These technologies form the foundation of my development toolkit. I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>


    </motion.section>
  )
}
