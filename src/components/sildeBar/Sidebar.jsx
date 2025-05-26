import { useLocation, Link } from "react-router-dom";
import { Sling as Hamburger } from "hamburger-react";
import {
  HiOutlineViewGrid,
  HiOutlineClipboardList,
  HiOutlineCalendar,
  HiOutlineChartBar,
  HiOutlineShieldCheck,
  HiOutlineUser,
  HiOutlineIdentification,
  HiOutlineCash,
  HiOutlineChatAlt2,
  HiOutlineLogout,
} from "react-icons/hi";
import { useState, useEffect } from "react";

const navItems = [
  { name: "Dashboard", path: "/", icon: <HiOutlineViewGrid /> },
  { name: "Wallet", path: "/wallet", icon: <HiOutlineClipboardList /> },
  { name: "My Total Team", path: "/my-team", icon: <HiOutlineCalendar /> },
  { name: "Buy History", path: "/buy-history", icon: <HiOutlineChartBar /> },
  { name: "Security", path: "/security", icon: <HiOutlineShieldCheck /> },
  { name: "Profile", path: "/profile", icon: <HiOutlineUser /> },
  { name: "KYC", path: "/kyc", icon: <HiOutlineIdentification /> },
  { name: "Withdrawal", path: "/withdrawal", icon: <HiOutlineCash /> },
  { name: "Support", path: "/support", icon: <HiOutlineChatAlt2 /> },
  { name: "Logout", path: "/logout", icon: <HiOutlineLogout /> },
];

function Sidebar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);

      if (window.innerWidth >= 768) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close sidebar on nav click if mobile
  const handleNavClick = () => {
    if (isMobile) {
      setIsOpen(false);
    }
  };


  if (isMobile && !isOpen) {
    return (
      <div className="fixed top-4 left-4 z-50">
        <Hamburger toggled={isOpen} toggle={setIsOpen} size={22} color="#16A34A" />
      </div>
    );
  }


  return (
    <>

      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`
    fixed top-0 left-0 h-screen  bg-[#084e54]  border-r border-gray-200 flex flex-col z-40
    transition-all duration-300 ease-in-out
    ${isOpen ? "w-86" : "w-20"}
    md:relative md:translate-x-0 md:w-auto 
  `}
        style={{ minWidth: isOpen ? "19rem" : "5rem" }}
      >


        <div
          className={`flex items-center justify-between p-3  border-gray-200 ${isOpen ? "" : "flex-start"
            }`}
        >
          <div
            className={`flex items-center gap-1 ${isOpen ? "" : "justify-center w-full"
              }`}
          >
            {isOpen && (
              <h1 className="text-2xl font-bold text-white select-none">JAIMAX</h1>
            )}
          </div>

          <div className="p-4 bg-[#084e54] text-white">
            <Hamburger
              toggled={isOpen}
              toggle={setIsOpen}
              size={28}
              color="white"
              label="Toggle sidebar"
            />
          </div>
        </div>


        <nav className="flex-1 overflow-y-auto hide-scrollbar space-y-1 p-2">
          <p
            className={`text-xs text-white uppercase font-semibold px-3 mb-4 select-none ${isOpen ? "" : "hidden"
              }`}
          >
            Menu
          </p>

          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={handleNavClick}
              className={`flex items-center gap-5 px-4 py-2 rounded-lg font-semibold transition-colors `}
              title={!isOpen ? item.name : undefined}
            >
              <span className={`text-2xl px-4 py-1 rounded-lg   ${location.pathname === item.path
                ? "bg-green-50 text-white-700 px-4 py-3 rounded-lg  border-l-4 border-green-600 pl-3"
                : "text-white "
                } `}>{item.icon}</span>
              <span className={`text-white ${isOpen ? "block" : "hidden"} text-base`}>{item.name}</span>
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;
