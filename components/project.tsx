"use client"

import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

type ProjectsProps = (typeof projectsData)[number];


export default function Project({ title, description, tags, imageUrl, github, live }: ProjectsProps) {

    const ref = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"]
    })

    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])

    return <motion.div ref={ref} style={{
        scale: scaleProgress,
        opacity: opacityProgress
    }} className="group mb-3 sm:mb-8 last:mb-0">
        <section className=' bg-gray-100 max-w-[42rem] border rounded-lg border-black/5 overflow-hidden sm:pr-8 relative sm:h-[22rem] sm:group-even:pl-8 hover:bg-gray-200 transition dark:bg-white/10 dark:hover:bg-white/20 dark:text-white'>

            <div className='pt-4 pb-8 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]'>
                <h3 className='text-2xl font-semibold'>{title}</h3>
                <p className='mt-2 leading-relaxed text-gray-700 dark:text-white/70'>{description}</p>
                <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
                    {tags.map((tag, i) => (
                        <>
                            <li key={i} className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase text-white rounded-full dark:text-white/70'>{tag}</li>
                        </>

                    )

                    )}

                    <Link target="_blank" href={github} className=" bg-green-800 border-0 rounded-full px-3 py-1
                      uppercase text-[0.7rem] hover:bg-green-900 text-white duration-300 transition-all">Git hub</Link>
                    {
                        live !== '' && (
                            <Link target="_blank" href={live} className=" bg-gray-900 border-0 rounded-full px-3 py-1
                      uppercase text-[0.7rem] hover:bg-gray-950 text-white duration-300 dark:bg-white hover:scale-110 dark:bg-opacity-10  outline-none transition-all dark:hover:bg-black dark:hover:bg-opacity-10 ">Live</Link>
                        )
                    }
                </ul>
            </div>
            <Image src={imageUrl} alt={title} quality={95} className=' hidden sm:block absolute top-8 -right-40 w-[30.25rem] h-[80%] rounded-b-lg rounded-t-lg shadow-2xl group-even:right-[initial] group-even:-left-40 group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 transition group-hover:scale-[1.04] group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2' />
        </section>
    </motion.div>
}
