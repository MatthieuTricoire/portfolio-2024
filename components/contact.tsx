"use client";

import { SectionHeading } from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks/hooks";
import { sendEmail } from "@/actions/sendEmail";
import { SubmitButton } from "./submit-button";
import toast from "react-hot-toast";

export const Contact = () => {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Me contacter</SectionHeading>
      <p className="text-gray-700 -mt-5 dark:text-white/80">
        Pour me contacter, vous pouvez le faire grâce à ce formulaire ou
        directement sur mon email :{" "}
        <a className="underline" href="mailto:matthieutricoire@gmail.com">
          matthieutricoire@gmail.com
        </a>
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { error } = await sendEmail(formData);

          if (error) {
            toast.error("Quelque chose s'est mal passé.");
          }

          toast.success("Message envoyé.");
        }}
      >
        <input
          className="h-14 rounded-lg  borderBlack px-4 dark:bg-white dark:bg-opacity-90 dark:focus:bg-opacity-100 transition-all dark:outline-none "
          name="email"
          type="email"
          required
          maxLength={100}
          placeholder="Votre email"
        />

        <textarea
          name="message"
          className="borderBlack h-52 my-3 rounded-lg p-4 dark:bg-white dark:bg-opacity-90 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          placeholder="Votre message"
          required
          maxLength={500}
        />

        <SubmitButton />
      </form>
    </motion.section>
  );
};
