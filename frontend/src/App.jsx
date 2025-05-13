import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import react from "react";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more routes here as needed */}
        </Routes>
      </Router>
    </div>
  );
};
export default App;
