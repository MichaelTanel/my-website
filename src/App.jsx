import { NavLink, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Education from "./components/Education";
import Interests from "./components/Interests";
import Summary from "./components/Summary";
import WorkExperience from "./components/WorkExperience";
import ErrorBoundary from "./ErrorBoundary";

function App() {
    return (
        <ErrorBoundary>
            <Router>
                <div>
                    <nav className="navbar">
                        <ul className="navbar-menu">
                            <li>
                                <NavLink to="/" activeClassName="active">
                                    Summary
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/work-experience" activeClassName="active">
                                    Work Experience
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/education" activeClassName="active">
                                    Education
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/Interests" activeClassName="active">
                                    Interests
                                </NavLink>
                            </li>
                        </ul>
                    </nav>

                    <Routes>
                        <Route path="/" element={<Summary />} />
                        <Route path="/work-experience" element={<WorkExperience />} />
                        <Route path="/education" element={<Education />} />
                        <Route path="/Interests" element={<Interests />} />
                    </Routes>
                </div>
            </Router>
        </ErrorBoundary>
    );
}

export default App;
