import Image from "next/image";

const Loading = () => {
  return (
    <div className="fixed h-full w-full bg-black bg-opacity-60 z-10">
      <div className="fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-10 animate-pulse">
        <Image
          height="100"
          width="100"
          alt="Loading..."
          src="/stickerwa.svg"
          priority
          className="w-auto h-auto"
        />
      </div>
    </div>
  );
};

export default Loading;
