"use server";
import { getErrorMessage, validateString } from "@/utils/utils";
import { Resend } from "resend";
import { ContactFormEmail } from "@/emails/contact-form-email";
import React from "react";

const resend = new Resend(process.env.RESEND_SECRET_KEY);

export const sendEmail = async (formData: FormData) => {
  const email = formData.get("email");
  const message = formData.get("message");

  if (!validateString(email, 500)) {
    return {
      error: "Invalid email",
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "matthieutricoire@gmail.com",
      subject: "Contact depuis mon portfolio",
      reply_to: email as string,
      // text: message as string,
      // react: <ContactFormEmail email={email} message={message} />
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        email: email as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return data;
};
