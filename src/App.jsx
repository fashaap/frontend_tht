import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";

import ContactPage from "./pages/ContactPage/ContactPage";

import ArticlesPage from "./pages/ArticlesPage/ArticlesPage";
import MapsPage from "./pages/MapsPage/MapsPage";
import CalenderPage from "./pages/CalenderPage/CalenderPage";
import LayoutA from "./layouts/LayoutA";
import LayoutB from "./layouts/LayoutB";
import NotFound from "./pages/NotFound";

import ScrollToTopComponent from "./components/ScrollToTopComponent";
import ArticlesHomePage from "./pages/ArticlesPage/ArticlesHomePage";
import DocumentationPage from "./pages/DocumentationPage/DocumentationPage";
import MaintenancePage from "./pages/MaintenancePage";
import DocumentationDetailPage from "./pages/DocumentationPage/DocumentationDetailPage";

const App = () => {
  const maintenance = false;

  return (
    <Router>
      <ScrollToTopComponent />
      {maintenance ? (
        <Routes>
          <Route path="/" element={<MaintenancePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      ) : (
        <Routes>
          <Route element={<LayoutA />}>
            <Route path="/" element={<HomePage />} />
          </Route>

          <Route element={<LayoutB />}>
            <Route path="/maps" element={<MapsPage />} />
            <Route path="/calender" element={<CalenderPage />} />
            <Route path="/contact" element={<ContactPage />} />

            <Route path="/documentation" element={<DocumentationPage />} />
            <Route
              path="/documentation/:id"
              element={<DocumentationDetailPage />}
            />
            <Route
              path="/documentation/:id/:params"
              element={<DocumentationDetailPage />}
            />

            <Route path="/article" element={<ArticlesHomePage />} />
            <Route path="/article/:id" element={<ArticlesPage />} />
            <Route path="/article/:id/:params" element={<ArticlesPage />} />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      )}
    </Router>
  );
};

export default App;
