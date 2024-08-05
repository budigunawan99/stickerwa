import Image from "next/image";

const Step = () => {
  return (
    <div className="px-[8vw] lg:px-[5vw] pb-20">
      <div className="w-full mt-12">
        <div className="relative z-0 max-w-[89vw] md:max-w-2xl lg:max-w-[80rem] gap-[2rem] flex flex-col items-center content-center">
          <h2 className="text-4xl font-bold text-center">
            How it <span className="text-green-300">works</span>
          </h2>
          <div className="flex w-full gap-20 flex-col items-center lg:flex-row lg:justify-around ">
            <div className="flex flex-col gap-5 items-center flex-1">
              <Image
                src="/ilustrasi1.svg"
                className="min-h-[200px]"
                width="200"
                height="200"
                alt="ilustrasi 1"
              />
              <p className="md:text-lg">1</p>
              <p className="md:text-lg text-center">Choose any sticker template provided</p>
            </div>
            <div className="flex flex-col gap-5 items-center flex-1">
              <Image
                src="/ilustrasi2.svg"
                className="min-h-[200px]"
                width="200"
                height="200"
                alt="ilustrasi 1"
              />
              <p className="md:text-lg">2</p>
              <p className="md:text-lg text-center">
                Custom the text on the template as desired
              </p>
            </div>
            <div className="flex flex-col gap-5 items-center flex-1">
              <Image
                src="/ilustrasi3.svg"
                className="min-h-[200px]"
                width="200"
                height="200"
                alt="ilustrasi 3"
              />
              <p className="md:text-lg">3</p>
              <p className="md:text-lg text-center">Download and share the customized sticker</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step;
