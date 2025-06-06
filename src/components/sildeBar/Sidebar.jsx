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
        <Hamburger
          toggled={isOpen}
          toggle={setIsOpen}
          size={22}
          color="#16A34A"
        />
      </div>
    );
  }

  return (
    <>
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 "
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`
    fixed top-0 left-0 bg-[#f7f7f7] flex flex-col z-40
    transition-all duration-300 ease-in-out 
    ${isOpen ? "w-86" : "w-20"}
    md:relative md:translate-x-0 md:w-auto mt-3 ml-3
  `}
        style={{
          minWidth: isOpen ? "19rem" : "5rem",
          // border:"1px solid black",
          borderRadius: "10px",
          maxHeight:"95vh"
        }}
      >
        <div
          className={`flex items-center justify-between p-3 rounded-0 md:rounded-md  border-gray-200 ${
            isOpen ? "" : "flex-start"
          }`}
        >
          <div
            className={`flex items-center gap-1 ${
              isOpen ? "" : "justify-center w-full"
            }`}
          >
            {isOpen && (
              <h1 className="text-3xl font-bold text-[#20934a] select-none">
                JAIMAX
              </h1>
            )}
          </div>

          <div className="p-4 text-white">
            <Hamburger
              toggled={isOpen}
              toggle={setIsOpen}
              size={24}
              color="black"
              label="Toggle sidebar"
            />
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto hide-scrollbar space-y-1 p-2">
          <p
            className={`text-xs text-black uppercase font-semibold px-3 mb-4 select-none ${
              isOpen ? "" : "hidden"
            }`}
          >
            Menu
          </p>

          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={handleNavClick}
              className={`relative flex items-center px-4 py-2 font-semibold transition-colors
      ${isOpen ? "justify-start gap-5" : "justify-center"}
      ${location.pathname === item.path ? "text-black" : "text-gray-500"}`}
              title={!isOpen ? item.name : undefined}
            >
              {/* Rounded left indicator */}
              {location.pathname === item.path && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1.5 bg-[#20934a] rounded-r-full"></span>
              )}

              <span
                className={`text-2xl ${
                  location.pathname === item.path
                    ? "text-[#20934a]"
                    : "text-gray-400"
                }`}
              >
                {item.icon}
              </span>

              <span className={`${isOpen ? "block" : "hidden"} text-base`}>
                {item.name}
              </span>
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;
