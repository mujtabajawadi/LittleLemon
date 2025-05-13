import Header from "../UI/Header";
import Footer_Section from "../UI/Footer_Section";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const AppLayout = () => {
  return (
    <>
      <main>
        <Header />
        <Outlet />
        <Footer_Section />
      </main>
      <ToastContainer autoClose='6000' />
    </>
  );
};

export default AppLayout;
