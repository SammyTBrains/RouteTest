import { Outlet } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";

const RootLayout = () => {
  return (
    //Another way to type fragment?
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
