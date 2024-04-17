"use client";

import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

export const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="self-center w-1/2 h-[3rem]  bg-gray-900 text-white group rounded-full outline-none transition-all flex items-center justify-center gap-2 buttonBehaviorPrimary disabled:scale-100 disabled:opacity-65 dark:bg-white dark:bg-opacity-10"
      disabled={pending}
    >
      {pending ? (
        <div className="size-5 animate-spin rounded-full border-b-2 border-white" />
      ) : (
        <div className="flex items-center justify-center gap-2">
          Envoyer
          <FaPaperPlane className="text-xs opacity-70 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      )}
    </button>
  );
};
