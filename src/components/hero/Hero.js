import Link from "next/link";
import { Spotlight } from "../ui/Spotlight";
import { TextGenerateEffect } from "../ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="darkgrey"
        />
        <Spotlight
          className="top-10 left-[98%] h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight
          className="top-28 left-[16rem] h-[80vh] w-[50vw]"
          fill="aquamarine"
        />
      </div>
      <div
        className="h-screen w-full dark:bg-black bg-white dark:bg-grid-white/[0.06] bg-grid-black/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-12">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h1 className="uppercase tracking-widest text-sm text-center text-blue">
            A Platform to Create Instant Stickers with Custom Text
          </h1>
          <TextGenerateEffect
            words="Easiest Way to Create Your Business Sticker"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            We provide the sticker models with text you can custom
          </p>
          <Link className="btn btn-neutral btn-md md:btn-lg" href="/login">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
