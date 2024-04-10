"use client"

import React from 'react'
import SectionHeading from './sectionHeading'
import { FaPaperPlane } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'
import { sendEmail } from '@/actions/sendEmail'
import { useFormStatus } from 'react-dom'
import SubmitBtn from './submit-btn'
import toast from 'react-hot-toast'

export default function Contact() {

    const { ref } = useSectionInView({ sectionName: "Contact" })



    return (
        <motion.section ref={ref} id='contact' className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>

            <SectionHeading>Contact me</SectionHeading>
            <p className='text-gray-700 -mt-4 dark:text-white/80'>Please contact me directly at <a className='underline' href="mailto:ashutoshdikondwar@gmail.com">ashutoshdikondwar@gmail.com</a> </p>

            <form className='mt-10 flex flex-col dark:text-black' action={async (formData) => { await sendEmail(formData);  toast.success("Email sent successfully");  }}>

                <input name='senderEmail' type="email" className='h-14 px-4 rounded-lg border border-black/10 p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none' placeholder='Enter Your Email' required maxLength={500} />

                <textarea name='message' required maxLength={5000} placeholder='Your Message' className='h-52 my-3 rounded-lg border border-black/10 p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none' />

                <SubmitBtn />
            </form>

        </motion.section>
    )
}
