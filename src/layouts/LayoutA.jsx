import FooterComponent from "../components/FooterComponent";
import NavbarComponent from "../components/NavbarComponent";

import { Outlet } from "react-router-dom";

const LayoutA = () => (
  <>
    <NavbarComponent />
    <main className="flex flex-col bg-gray-50">
      <Outlet />
    </main>
    <FooterComponent />
  </>
);

export default LayoutA;
