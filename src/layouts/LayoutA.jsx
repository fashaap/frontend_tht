import { Toaster } from "react-hot-toast";
import FooterComponent from "../components/FooterComponent";
import NavbarComponent from "../components/NavbarComponent";

import { Outlet } from "react-router-dom";

const LayoutA = () => (
  <>
    <Toaster position="top-center" reverseOrder={false} />
    <NavbarComponent />
    <main className="flex flex-col bg-gray-50">
      <Outlet />
    </main>
    <FooterComponent />
  </>
);

export default LayoutA;
