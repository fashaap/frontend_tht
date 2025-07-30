import { Toaster } from "react-hot-toast";
import FooterComponent from "../components/FooterComponent";
import NavbarComponentBgOrange from "../components/NavbarComponentBgOrange";

import { Outlet } from "react-router-dom";

const LayoutB = () => (
  <>
    <Toaster position="top-center" reverseOrder={false} />
    <NavbarComponentBgOrange />
    <main className="flex flex-col bg-gray-50">
      <Outlet />
    </main>
    <FooterComponent />
  </>
);

export default LayoutB;
