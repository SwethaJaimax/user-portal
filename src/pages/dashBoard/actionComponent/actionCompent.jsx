import { useState } from "react";
import { FaDownload, FaShareAlt } from "react-icons/fa";
import {
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaTelegram,
  FaInstagram,
} from "react-icons/fa";
import assets from "../../../assets/assets";
import { TextField, InputAdornment } from "@mui/material";

const ActionButtons = () => {
  const [copied, setCopied] = useState(false);
  const [showShare, setShowShare] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("JMXA4557jXXN");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareIcons = [
    { icon: <FaFacebook />, label: "Facebook" },
    { icon: <FaTwitter />, label: "Twitter" },
    { icon: <FaWhatsapp />, label: "WhatsApp" },
    { icon: <FaTelegram />, label: "Telegram" },
    { icon: <FaInstagram />, label: "Instagram" },
  ];

  return (
    <>
      {/* Animation Keyframes */}
      <style>
        {`
          @keyframes fadeSlideIn {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fadeSlideIn {
            animation: fadeSlideIn 0.6s ease-out forwards;
          }
        `}
      </style>

      {/* Referral Copied Toast */}
      {copied && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-white text-[#20934a] px-6 py-4 rounded-lg shadow-lg z-50 font-semibold text-sm text-[18px]">
          Referral Code Copied!
        </div>
      )}

      {/* Share Modal */}
      {showShare && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-40"
            onClick={() => setShowShare(false)}
          />
          <div className="fixed top-[25%] left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-md bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="bg-[#26a69a] text-white px-4 py-2 text-lg font-semibold flex justify-center items-center relative">
              <span>Share Your Referral Code</span>
              <span
                className="absolute right-4 cursor-pointer text-white"
                onClick={() => setShowShare(false)}
              >
                ✕
              </span>
            </div>

            <div className="flex justify-center gap-6 py-6 text-black text-[1.7rem]">
              {shareIcons.map(({ icon, label }, idx) => (
                <div
                  key={idx}
                  className="cursor-pointer p-2 rounded-full transition-all duration-300 hover:text-white"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "44px",
                    height: "44px",
                  }}
                  title={label}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#26a69a";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                  }}
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Main Card */}
      <div className="rounded-lg shadow-md z-10 p-4 bg-white w-full max-w-[1040px] mx-auto animate-fadeSlideIn">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 w-full">
          {/* Left */}
          <div className="flex gap-4 items-center">
            <img
              src={assets.welcomeDraw}
              alt="profile"
              className="w-14 h-14 object-cover"
            />
            <div>
              <h2 className="text-xl text-[#084e54] font-semibold">KN</h2>
              <h1 className="text-2xl font-bold text-[#084e54]">
                Welcome to Jaimax
              </h1>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col sm:flex-row items-center sm:items-center gap-3 w-full sm:w-auto lg:justify-end">
            <TextField
              label="Referral Code"
              value="JMXA4557jXXN"
              InputProps={{
                readOnly: true,
                endAdornment: (
                  <InputAdornment position="end">
                    <FaShareAlt
                      style={{ cursor: "pointer", color: "#084e54" }}
                      onClick={() => setShowShare(true)}
                    />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              size="small"
              sx={{
                width: { xs: "100%", sm: "auto" },
                input: { color: "#20934a" },
                label: {
                  color: "#084e54",
                  "&.Mui-focused": {
                    color: "#084e54",
                  },
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#000",
                  },
                  "&:hover fieldset": {
                    borderColor: "#084e54",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#000",
                  },
                },
              }}
            />

            <button
              className="bg-[#26a69a] text-white flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium shadow hover:bg-[#1d8e85]"
              onClick={handleCopy}
            >
              <FaDownload className="mr-2" /> Add New Member
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActionButtons;
