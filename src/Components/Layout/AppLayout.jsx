import Header from "../UI/Header";
import Footer_Section from "../UI/Footer_Section";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
          <Header />
          <Outlet/>
          <Footer_Section/>
    </>
  );
};

export default AppLayout;
