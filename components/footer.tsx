import React from "react";

export const Footer = () => {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 text-xs block">
        &copy; Matthieu. Tous droits réservés
      </small>
      <p className="text-xs">
        <span>
          Construit avec React et Next.js, Typescript, Framer Motion, React
          Email. Hébergé sur Vercel.
        </span>
      </p>
    </footer>
  );
};
