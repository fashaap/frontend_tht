import FooterComponent from "../components/FooterComponent";
import NavbarComponentBgOrange from "../components/NavbarComponentBgOrange";


import { Outlet } from "react-router-dom";

const LayoutB = () => (
  <>
    <NavbarComponentBgOrange />
    <main className="flex flex-col bg-gray-50">
      <Outlet />
    </main>
    <FooterComponent />
  </>
);

export default LayoutB;
