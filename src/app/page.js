import Benefit from "@/components/benefit/Benefit";
import Hero from "@/components/hero/Hero";
import Step from "@/components/step/Step";

const HomePage = () => {
  return (
    <main
      className="relative bg-black flex justify-center items-center 
    flex-col overflow-hidden mx-auto sm:px-10 px-5"
    >
      <div className="max-w-7xl w-full">
        <Hero />
        <Step />
        <Benefit />
      </div>
    </main>
  );
};

export default HomePage;
