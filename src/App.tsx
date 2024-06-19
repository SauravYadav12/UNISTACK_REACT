import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Layout from "./components/layout/Layout";
import Requirements from "./pages/Marketing/Requirements/Requirements";
import Interviews from "./pages/Marketing/Interviews/Interviews";
import Consultants from "./pages/Marketing/Consultants/Consultants";
import Teams from "./pages/Marketing/Teams/Teams";
import Profile from "./pages/Marketing/Profile/Profile";
import Reports from "./pages/Marketing/Reports/Reports";
import SignUp from "./pages/Auth/Signup";

function App() {
  const token = localStorage.getItem("token");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="requirements" element={<Requirements />} />
          <Route path="interviews" element={<Interviews />} />
          <Route path="consultants" element={<Consultants />} />
          <Route path="teams" element={<Teams />} />
          <Route path="reports" element={<Reports />} />
          <Route path="profile" element={<Profile />} />
          {/* Add other routes here */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
