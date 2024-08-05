import DrawerSide from "./drawer-side/DrawerSide";

const Drawer = ({ children }) => {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">{children}</div>
      <DrawerSide />
    </div>
  );
};

export default Drawer;
