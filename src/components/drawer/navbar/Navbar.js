import Link from "next/link";
import Links from "../links/Links";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-[2]">
      {/* Navbar */}
      <div className="w-full navbar bg-base-300">
        <div className="flex-none lg:hidden">
          <label
            htmlFor="my-drawer-3"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div className="flex-1 px-2 mx-2">
          <Link href="/" className="cursor-pointer">
            <Image
              src="/logo_header_dark.svg"
              alt="StickerWA Logo"
              width="200"
              height="40"
            />
          </Link>
        </div>
        <div className="flex-none hidden lg:block">
          <ul className="menu menu-horizontal">
            {/* Navbar menu content here */}
            <Links />
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
