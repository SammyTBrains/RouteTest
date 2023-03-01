import { Outlet } from "react-router-dom";

import classes from "./RootLayout.module.css";
import MainNavigation from "../components/MainNavigation";

const RootLayout = () => {
  return (
    //Another way to type fragment?
    <>
      <MainNavigation />
      <main className={classes.content}>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
