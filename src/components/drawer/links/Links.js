import Link from "next/link";

const Links = () => {
  const links = [
    { title: "Home", path: "/" },
    { title: "Blog", path: "/blog" },
  ];

  //temp
  const session = false;

  return (
    <>
      {links.map((link) => (
        <li key={link.title}>
          <Link href={link.path}>{link.title}</Link>
        </li>
      ))}
      <li>
        {session ? (
          <button className="btn btn-neutral btn-sm h-[2.3rem] min-h-[2.3rem] mt-4 lg:mt-0 lg:mx-4">
            Logout
          </button>
        ) : (
          <Link
            className="btn btn-neutral btn-sm h-[2.3rem] min-h-[2.3rem] mt-4 lg:mt-0 lg:mx-4"
            href="/login"
          >
            Login
          </Link>
        )}
      </li>
    </>
  );
};

export default Links;
