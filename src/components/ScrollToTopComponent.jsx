import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTopComponent = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTopComponent;
