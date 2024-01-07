import React, { FC } from "react";

const Section: FC<{
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}> = ({ title, description, className, children }) => {
  return (
    <section className={`${className} flex flex-col justify-start text-white`}>
      <p className="text-2xl font-semibold capitalize">{title}</p>
      {description ? (
        <p className="text-l capitalize leading-9 lg:mb-14 mb-10  ">
          {description}
        </p>
      ) : null}
      {children}
    </section>
  );
};

export default Section;
