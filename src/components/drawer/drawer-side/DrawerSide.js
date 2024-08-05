import Links from "../links/Links";

const DrawerSide = () => {
  return (
    <div className="drawer-side z-[2]">
      <label
        htmlFor="my-drawer-3"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu p-4 w-80 min-h-full bg-base-200">
        {/* Sidebar content here */}
        <Links />
      </ul>
    </div>
  );
};

export default DrawerSide;
