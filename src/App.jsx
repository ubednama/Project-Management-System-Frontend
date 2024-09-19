import Home from './pages/Home/Home'
import NavBar from './pages/NavBar/NavBar'
import { Routes, Route } from "react-router-dom";
import ProjectDetails from './pages/ProjectPage/ProjectDetails';
import IssueDetails from './pages/IssuePage/IssueDetails';
import Subscription from './pages/Subscription/Subscription';
import Auth from './pages/Auth/Auth';
import TermsAndConditions from './pages/TermsAndConditions/TermsAndConditions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUser } from './redux/Auth/Action';
import { fetchProjects } from './redux/Project/Action';

function App() {
  const dispatch = useDispatch()
  const {auth} = useSelector((store) => store)

  useEffect(() => {
    dispatch(getUser())
    dispatch(fetchProjects({}))
  }, [auth.jwt])

  return (
    <>
      {auth.user ? (
        <div className=''>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
            <Route path="/api/issues/:issueId" element={<IssueDetails />}/>
            <Route path="/upgrade" element={<Subscription />} />
          </Routes>{" "}
        </div>
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
