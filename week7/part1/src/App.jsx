import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
const Landing = lazy(() => import("./components/Landing"));
const Dashboard = lazy(() => import("./components/Dashboard"));
// import Dashboard from React.lazy(() => import("./components/Dashboard"));

// import { Dashboard } from "./components/Dashboard";
// import { Landing } from "./components/Landing";

function App() {
  return (
    <div>
      <BrowserRouter>
        <AppBar />
        <Routes>
          {/* <Route path="dashboard" element={<Dashboard />} />
          <Route path="/" element={<Landing />} /> */}
          <Route
            path="dashboard"
            element={
              <Suspense fallback={"loading..."}>
                <Dashboard />
              </Suspense>
            }
          />
          <Route
            path="/"
            element={
              <Suspense fallback={"loading..."}>
                <Landing />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function AppBar() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Landing Page
      </button>

      <button
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        Dashboard
      </button>
    </div>
  );
}

export default App;
