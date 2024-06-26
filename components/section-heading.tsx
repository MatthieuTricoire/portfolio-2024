import { PropsWithChildren } from "react";

export const SectionHeading = ({ children }: PropsWithChildren) => {
  return <h2 className="text-3xl font-medium  mb-8 text-center">{children}</h2>;
};
