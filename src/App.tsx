import "./App.css";
import {
  BrowserRouter as Router,
  Routes, Route
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
import { AuthContextProvider } from "./AuthGaurd/AuthContextProvider";
import ProtectedRoute from "./AuthGaurd/ProtectedRoute";

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<ProtectedRoute> <Layout /> </ProtectedRoute>}>
            <Route path="dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="requirements" element={<ProtectedRoute><Requirements /></ProtectedRoute>} />
            <Route path="interviews" element={<ProtectedRoute><Interviews /></ProtectedRoute>} />
            <Route path="consultants" element={<ProtectedRoute><Consultants /></ProtectedRoute>} />
            <Route path="teams" element={<ProtectedRoute><Teams /></ProtectedRoute>} />
            <Route path="reports" element={<ProtectedRoute><Reports /></ProtectedRoute>} />
            <Route path="profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          </Route>
        </Routes>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
