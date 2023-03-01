import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    //Another way to type fragment?
    <>
      <h1>Root Layout</h1>
      <Outlet />
    </>
  );
};

export default RootLayout;
