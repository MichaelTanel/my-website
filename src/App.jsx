import { NavLink, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Education from "./components/Education";
import Extracurriculars from "./components/Extracurriculars";
import Projects from "./components/Projects";
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
                                <NavLink to="/summary" activeClassName="active">
                                    Summary
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/work-experience" activeClassName="active">
                                    Work Experience
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/projects" activeClassName="active">
                                    Projects
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/education" activeClassName="active">
                                    Education
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/extracurriculars" activeClassName="active">
                                    Extracurriculars
                                </NavLink>
                            </li>
                        </ul>
                    </nav>

                    <Routes>
                        <Route path="/summary" element={<Summary />} />
                        <Route path="/work-experience" element={<WorkExperience />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/education" element={<Education />} />
                        <Route path="/extracurriculars" element={<Extracurriculars />} />
                    </Routes>
                </div>
            </Router>
        </ErrorBoundary>
    );
}

export default App;
