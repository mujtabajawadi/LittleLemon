import Header from "../UI/Header";
import Footer_Section from "../UI/Footer_Section";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "../UI/ScrollToTop";

const AppLayout = () => {
  return (
    <>
      <main>
        <ScrollToTop/>
        <Header />
        <Outlet />
        <Footer_Section />
      </main>
      <ToastContainer autoClose='6000' />
    </>
  );
};

export default AppLayout;
