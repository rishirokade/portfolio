import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Projects } from "./components/Projects";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { MovingStrip } from "./components/MovingStrip";

const App = () => {
    return (
        <Router>
            <Header />
            <MovingStrip />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </Router>
    );
};

export default App;
