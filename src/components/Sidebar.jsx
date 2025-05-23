import { Link, useLocation } from "react-router-dom";
import { HiOutlineViewGrid, HiOutlineClipboardList, HiOutlineCalendar, HiOutlineChartBar, HiOutlineUserGroup, HiOutlineCog, HiOutlineQuestionMarkCircle, HiOutlineLogout } from "react-icons/hi";

const navItems = [
  { name: "Dashboard", path: "/dashboard", icon: <HiOutlineViewGrid /> },
  { name: "Tasks", path: "/tasks", icon: <HiOutlineClipboardList /> },
  { name: "Calendar", path: "/calendar", icon: <HiOutlineCalendar /> },
  { name: "Analytics", path: "/analytics", icon: <HiOutlineChartBar /> },
  { name: "Team", path: "/team", icon: <HiOutlineUserGroup /> },
];

const generalItems = [
  { name: "Settings", icon: <HiOutlineCog /> },
  { name: "Help", icon: <HiOutlineQuestionMarkCircle /> },
  { name: "Logout", icon: <HiOutlineLogout /> },
];

function Sidebar() {
  const location = useLocation();

  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-white border-r border-gray-200 flex flex-col z-10" style={{border:"1px solid black"}}>
      <div className="p-4 flex-1">
        {/* Logo */}
        <div className="mb-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <h1 className="text-xl font-bold text-gray-900">Donezo</h1>
          </div>
        </div>

        {/* Menu */}
        <nav className="space-y-1">
          <p className="text-xs text-gray-500 uppercase font-semibold px-3 mb-3">Menu</p>
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === item.path
                  ? "bg-green-50 text-green-700 border-r-2 border-green-600"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
              style={{display:"flex"}}
            >
              <span className="text-lg">{item.icon}</span>
              {item.name}
            </Link>
          ))}
        </nav>

        {/* General */}
        <nav className="mt-8 space-y-1">
          <p className="text-xs text-gray-500 uppercase font-semibold px-3 mb-3">General</p>
          {generalItems.map((item) => (
            <div
              key={item.name}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors cursor-pointer"
            >
              <span className="text-lg">{item.icon}</span>
              {item.name}
            </div>
          ))}
        </nav>
      </div>

      {/* Download section */}
      <div className="p-4">
        <div className="bg-gradient-to-br from-green-900 to-green-600 text-white rounded-xl p-4 relative overflow-hidden">
          <div className="relative z-10">
            <p className="text-sm font-semibold mb-1">Download our Mobile App</p>
            <p className="text-xs text-green-100 mb-3">Get easy in another way</p>
            <button className="bg-white text-green-700 rounded-lg px-4 py-2 text-xs font-medium hover:bg-green-50 transition-colors">
              Download
            </button>
          </div>
          {/* Background decoration */}
          <div className="absolute -right-4 -top-4 w-16 h-16 bg-green-400 opacity-20 rounded-full"></div>
          <div className="absolute -left-2 -bottom-2 w-12 h-12 bg-green-400 opacity-20 rounded-full"></div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;