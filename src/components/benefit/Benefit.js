import Image from "next/image";

const Benefit = () => {
  return (
    <div className="px-[8vw] lg:px-[5vw] pb-40">
      <div className="w-full mt-12 lg:grid lg:place-items-center ">
        <div className="relative z-0 max-w-[89vw] md:max-w-2xl lg:max-w-[80rem] gap-[4rem] flex flex-col lg:flex-row items-center content-center">
          <Image
            src="/hero_sub_1.svg"
            className="lg:w-[448px] rounded-lg shadow-2xl"
            width="336"
            height="223"
            alt="Benefit Image"
          />
          <div>
            <h2 className="text-4xl font-bold text-center lg:text-left">
              Business Transaction Becomes Easier with {" "}
              <span className="text-green-300">StickerWA</span>
            </h2>
            <p className="py-6">
              Create a sticker from the available template here and custom the
              text with your information like account number or name. Now, just
              send a sticker everytime someone asks for your bank account
              number.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefit;
