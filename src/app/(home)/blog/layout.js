import React from "react";

export default function BlogLayout({ children }) {
  return (
    <section id="blog" className="bg-black w-full p-[8vw] pt-[4vw] pb-40">
      {children}
    </section>
  );
}
