import React from "react";

export default function BlogLayout({ children }) {
  return (
    <section id="blog" className="bg-black w-full p-[8vw] pt-[4vw] pb-40">
      <h1 className="text-center text-[2.5rem] font-bold mb-10">Blog</h1>
      {children}
    </section>
  );
}
