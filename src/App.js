import React, { useEffect, Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { loadExternalScripts } from "./utils/loadScripts";
import { prefetchApartments } from "./utils/apartmentApi";
import "./i18n";

import Main from "./pages/Main";
import Layout from "./pages/Layout";
import Footer from "./pages/Footer";

// Lazy-load sub-routes so they don't bloat the initial homepage bundle
const BlockA = lazy(() => import("./pages/blockInfo/BlockA"));
const BlockB = lazy(() => import("./pages/blockInfo/BlockB"));
const BlockC = lazy(() => import("./pages/blockInfo/BlockC"));

const PlanA = lazy(() => import("./pages/planInfo/PlanA"));
const PlanB = lazy(() => import("./pages/planInfo/PlanB"));
const PlanC = lazy(() => import("./pages/planInfo/PlanC"));

const Apartment = lazy(() => import("./pages/flatInfo/Apartment"));
const Gallery = lazy(() => import("./pages/gallery/Gallery"));

const RouteLoader = () => (
  <div
    style={{
      minHeight: "60vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <div
      style={{
        width: "40px",
        height: "40px",
        border: "3px solid #e0e0e0",
        borderTopColor: "#ff9800",
        borderRadius: "50%",
        animation: "spin 0.8s linear infinite",
      }}
    />
    <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
  </div>
);

const App = () => {
  useEffect(() => {
    loadExternalScripts();
    prefetchApartments();
  }, []);

  return (
    <Router>
      <Layout />

      <Suspense fallback={<RouteLoader />}>
        <Routes>
          <Route path="/" element={<Main />} />

          <Route path="/blocka" element={<BlockA />} />
          <Route path="/blockb" element={<BlockB />} />
          <Route path="/blockc" element={<BlockC />} />

          <Route path="/plana" element={<PlanA />} />
          <Route path="/planb" element={<PlanB />} />
          <Route path="/planc" element={<PlanC />} />

          <Route path="/apartment/:apartmentNumber" element={<Apartment />} />

          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Suspense>

      <Footer />
    </Router>
  );
};

export default App;

