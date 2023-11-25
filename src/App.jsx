import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AllTasks from "./pages/AllTasks";
import NewTask from "./pages/NewTask";
import EditTask from "./pages/EditTask";
import Navbar1 from "./components/Navbar1";
import { Toaster } from "react-hot-toast";

function App() {
  // const baseURL = "http://localhost:3000";
  const baseURL = "https://task-duty223.onrender.com";

  return (
    <>
      <Router>
        <Toaster position="top-right" />
        <Navbar1 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<AllTasks baseURL={baseURL} />} />
          <Route path="/new" element={<NewTask baseURL={baseURL} />} />
          <Route path="/edit/:id" element={<EditTask baseURL={baseURL} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
