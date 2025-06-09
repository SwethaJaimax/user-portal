// App.js
import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from "./pages/dashBoard/dashBoard";
import Wallet from "./pages/wallet/wallet";
import MyTotalTeam from "./pages/myTotalTeam/myTotalTeam";
import BuyHistory from "./pages/buyHistory/buyHistory";
import Security from "./pages/security/security";
import Profile from "./pages/profile/profile";
import Kyc from "./pages/kyc/kyc";
import WithDrawal from "./pages/widthDrawal/withDrawal";
import Support from "./pages/support/support";
import Sidebar from "./components/sildeBar/Sidebar";
import Header from "./components/header/header";
import LogoutModal from "./pages/logout/logout";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setShowLogoutModal(false);
    navigate("/"); 
  };

  return (

    // <div className="flex gap-1 bg-white ">
    //   <Sidebar className="w-full lg:w-64" 
    //     isOpen={sidebarOpen}
    //     setIsOpen={setSidebarOpen}
    //     onLogoutClick={() => setShowLogoutModal(true)}
    //   />
    //   <main className=" flex flex-col gap-4 p-6 bg-white ">
    //     <Header />
    //     <div className="  p-0 bg-[#f2f2f2] rounded-xl">
    //       <Routes>
    //         <Route path="/" element={<Dashboard />} />
    //         <Route path="/wallet" element={<Wallet />} />
    //         <Route path="/my-team" element={<MyTotalTeam />} />
    //         <Route path="/buy-history" element={<BuyHistory />} />
    //         <Route path="/security" element={<Security />} />
    //         <Route path="/profile" element={<Profile />} />
    //         <Route path="/kyc" element={<Kyc />} /> 
    //         <Route path="/withdrawal" element={<WithDrawal />} />
    //         <Route path="/support" element={<Support />} />
    //       </Routes>
    //     </div>
    //   </main>

    //   {/* Logout Modal */}
    //   {showLogoutModal && (
    //     <LogoutModal
    //       onCancel={() => setShowLogoutModal(false)}
    //       onConfirm={handleLogout}
    //     />
    //   )}
    // </div>
    <div className="relative flex bg-white h-screen">

    <Sidebar
      isOpen={sidebarOpen}
      setIsOpen={setSidebarOpen}
      onLogoutClick={() => setShowLogoutModal(true)}
    />


  {/* Main Content */}
  <div
    className={`transition-all duration-300 ease-in-out flex-1  ${
      sidebarOpen ? "lg:ml-64" : "lg:ml-20"
    }`}
  >
    <Header />
    <div className="p-4 bg-[#f2f2f2] min-h-[calc(100vh-64px)] rounded-xl">
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
      </Routes>
    </div>
  </div>

  {/* Logout Modal */}
  {showLogoutModal && (
    <LogoutModal
      onCancel={() => setShowLogoutModal(false)}
      onConfirm={handleLogout}
    />
  )}
</div>

  );
}

export default App;
