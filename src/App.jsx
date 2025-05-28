// App.js
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashBoard/dashBoard";
import Wallet from "./pages/wallet/wallet";
import MyTotalTeam from "./pages/myTotalTeam/myTotalTeam";
import BuyHistory from "./pages/buyHistory/buyHistory";
import Security from "./pages/security/security";
import Profile from "./pages/profile/profile";
import Kyc from "./pages/kyc/kyc";
import WithDrawal from "./pages/widthDrawal/withDrawal";
import Support from "./pages/support/support";
import Logout from "./pages/logout/logout";
import Sidebar from "./components/sildeBar/Sidebar";
import Header from "./components/header/header";

function App() {
  // To pass sidebar state for responsiveness (optional)
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="h-screen bg-gray-50 flex">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      <main
        className="flex-1 bg-[#084e54] flex flex-col p-2"
        
      >
        <Header />
        <div className="flex-1 overflow-auto hide-scrollbar">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/my-team" element={<MyTotalTeam />} />
            <Route path="/buy-history" element={<BuyHistory />} />
            <Route path="/security" element={<Security />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/kyc" element={<Kyc />} />
            <Route path="/withdrawal" element={<WithDrawal />} />
            <Route path="/support" element={<Support />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;


