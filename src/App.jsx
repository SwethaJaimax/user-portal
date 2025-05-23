import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import Calender from "./pages/Calender";
import Analytics from "./pages/Analytics";
import Team from "./pages/Team";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex" style={{display:"flex"}}>
        <Sidebar />
       <main className="flex-1 p-6 min-h-screen border-4 border-blue-500" style={{ marginLeft: '256px', border:"1px solid black" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/calendar" element={<Calender />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
