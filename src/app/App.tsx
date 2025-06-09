import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import CvPage from "./pages/Cvpage/CvPage";
import Profile from "./pages/ProfilePage/ProfilePage";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Navigate to="/profilePage" replace />} />
      <Route path="/profilePage" element={<Profile />} />
      <Route path="/cvWeb" element={<CvPage />} />
    </Routes>
  </Router>
);

export default App;
