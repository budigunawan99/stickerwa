import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full py-10">
      <div className="flex flex-col items-center w-full gap-10">
        <div className="flex w-full flex-col items-center lg:items-start lg:flex-row px-[8vw] justify-between">
          <Link href="/" className="cursor-pointer mb-6">
            <Image
              src="/logo_header_dark.svg"
              alt="StickerWA Logo"
              width="250"
              height="50"
            />
          </Link>
          <div className="text-md">
            <h2 className="uppercase mb-6 font-medium">Product</h2>
            <ul className="flex flex-col gap-2 text-base-content">
              <li>
                <Link
                  href="/blog"
                  className="cursor-pointer hover:text-green-300"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="cursor-pointer hover:text-green-300"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full px-[8vw]">
          <p className="text-center text-base-content">
            Copyright © 2024 stickerwa.com. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
