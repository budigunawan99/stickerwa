import React from "react";

export default function AuthLayout({ children }) {
  return (
    <section id="auth" className="bg-black w-full p-[8vw] pt-[4vw] pb-40">
      <div className="max-w-[1280px] mx-auto">{children}</div>
    </section>
  );
}
