import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Profile from "./components/ProfilePage/ProfilePage";
import CvPage from "./components/Cvpage/CvPage";

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
