"use server"

import { validateString } from "@/lib/utils";
import { Resend } from "resend";
import ContactFormEmail from "./email/contact-form-email";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY)



export const sendEmail = async (formData: FormData) => {

    const senderEmail = formData.get("senderEmail");
    const message = formData.get("message");

    if (!validateString(senderEmail, 500)) {
        return {
            error: "Invalid Email"
        }
    }
    if (!validateString(message, 5000)) {
        return {
            error: "Invalid Message"
        }
    }




    try {
        await resend.emails.send({
            from: "onboarding@resend.dev",
            to: "ashutoshdikondwar@gmail.com",
            subject: "first messahe",
            reply_to: senderEmail as string,
            react: React.createElement(ContactFormEmail, { message: message as string, senderEmail: senderEmail as string })

        })
    } catch (err: unknown) {
        return {
            error: err
        }
    }
}