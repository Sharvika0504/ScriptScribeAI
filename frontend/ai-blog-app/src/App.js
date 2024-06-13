import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ArchivedVideo from "./components/archivedVideos/archivedVideo";
import BlogList from "./components/blogsList/blogList";
import Dashboard from "./components/dashboard/dashboard";
import Login from "./components/login/login";


function App() {
  return (
    <div className="h-full w-full">
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/blogList" element={<BlogList />} />
            <Route path="/archivedVideos" element={<ArchivedVideo />} />
          </Routes>
        </Router>
      </div>
  );
}

export default App;
