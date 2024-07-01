import './App.css'
import Home from './pages/Home/Home'
import NavBar from './pages/NavBar/NavBar'
import { Routes, Route } from "react-router-dom";
import ProjectDetails from './pages/ProjectPage/ProjectDetails';
import IssueDetails from './pages/IssuePage/IssueDetails';
import Subscription from './pages/Subscription/Subscription';
import Auth from './pages/Auth/Auth';
import TermsAndConditions from './pages/TermsAndConditions/TermsAndConditions';

function App() {

  return (
    <>
      {false ? (
        <>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
            <Route
              path="/project/:projectId/issue/:issueId"
              element={<IssueDetails />}
            />
            <Route path="/upgrade" element={<Subscription />} />
          </Routes>{" "}
        </>
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Auth />} />
            <Route
              path="/terms-and-condition"
              element={<TermsAndConditions />}
            />
          </Routes>
        </>
      )}
    </>
  );
}

export default App
