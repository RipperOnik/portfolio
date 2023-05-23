import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import { Home, Experience, Projects, ProjectDisplay } from "./pages";
import Navbar from './components/Navbar'
import Footer from "./components/Footer";
import './styles/App.css'


function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDisplay />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </HashRouter>
      <Footer />
    </div>
  );
}

export default App;
