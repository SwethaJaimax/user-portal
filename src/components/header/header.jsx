  import { useLocation } from "react-router-dom";

  const routeTitles = {
    "/": "Dashboard",
    "/wallet": "Wallet",
    "/my-team": "My Total Team",
    "/buy-history": "Buy History",
    "/security": "Security",
    "/profile" : "Profile",
    "/kyc" : "Kyc",
     "/withdrawal" : "With Drawal",
     "/support" : "Support",
     "/logout" : "Logout"
  };

  function Header() {
    const location = useLocation();
    const title = routeTitles[location.pathname] || "Page";

    return (
  <header className="mb-6 border-b border-white-100 pb-3 m-2 px-9 sm:px-6 lg:px-8 w-full">

    <h1 className="text-2xl pl-5 sm:text-3xl md:text-4xl font-extrabold 	text-white">
      {title}
    </h1>
  </header>

    );
  }

  export default Header;
