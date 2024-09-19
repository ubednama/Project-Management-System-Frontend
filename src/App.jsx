import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import NavBar from "./pages/NavBar/NavBar";
import ProjectDetails from "./pages/ProjectPage/ProjectDetails";
import IssueDetails from "./pages/IssuePage/IssueDetails";
import Subscription from "./pages/Subscription/Subscription";
import Auth from "./pages/Auth/Auth";
import TermsAndConditions from "./pages/TermsAndConditions/TermsAndConditions";
import { getUser } from "./redux/Auth/Action";
import * as actionTypes from "./redux/Auth/ActionTypes";
import ClipLoader from "react-spinners/ClipLoader";
import { fetchProjects } from "./redux/Project/Action";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((store) => store.auth);

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt && !auth.isAuthChecked) {
      dispatch(getUser());
    } else if (!jwt && !auth.isAuthChecked) {
      dispatch({ type: actionTypes.GET_USER_FAILURE, payload: "No JWT found" });
    }
  }, [auth.isAuthChecked]);

  if (!auth.isAuthChecked) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <ClipLoader
          color="white"
          size={120}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }

  return (
    <>
      {auth.user ? (
        <div className="">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
            <Route path="/api/issues/:issueId" element={<IssueDetails />} />
            <Route path="/upgrade" element={<Subscription />} />
          </Routes>
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

export default App;
