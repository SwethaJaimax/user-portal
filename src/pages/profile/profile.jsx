import React, { useState } from "react";

const Profile = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    city: "",
    state: "",
    country: "India",
    profilePicture: null,
    currentPassword: "",
    otp: "",
    newpassword: "",
  });

  const [errors, setErrors] = useState({});
  const [passwordErrors, setPasswordErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "profilePicture") {
      setFormData({ ...formData, profilePicture: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const validateProfile = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email address.";

    if (!formData.mobile.trim())
      newErrors.mobile = "Mobile number is required.";
    else if (!/^\d{10}$/.test(formData.mobile))
      newErrors.mobile = "Mobile number must be 10 digits.";

    if (!formData.address.trim()) newErrors.address = "Address is required.";
    if (!formData.city.trim()) newErrors.city = "City is required.";
    if (!formData.state.trim()) newErrors.state = "State is required.";
    if (!formData.country.trim()) newErrors.country = "Country is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateVerifyOTP = () => {
    const newPasswordErrors = {};
    if (!formData.currentPassword.trim())
      newPasswordErrors.currentPassword = "Current password is required.";
    if (!formData.otp.trim()) newPasswordErrors.otp = "OTP is required.";
    setPasswordErrors(newPasswordErrors);
    return Object.keys(newPasswordErrors).length === 0;
  };

  const handleVerifyOTP = () => {
    if (validateVerifyOTP()) {
      setStatus(true);
      console.log("OTP verified");
    }
  };

  const GetOtp = () => {
    alert("otp sent to mail");
  };

  const validateNewPassword = () => {
    const newPasswordErrors = {};
    if (!formData.currentPassword.trim())
      newPasswordErrors.currentPassword = "Current password is required.";
    if (!formData.newpassword.trim())
      newPasswordErrors.newpassword = "New password is required.";
    else if (formData.newpassword.length < 6)
      newPasswordErrors.newpassword =
        "New password must be at least 6 characters.";
    setPasswordErrors(newPasswordErrors);
    return Object.keys(newPasswordErrors).length === 0;
  };

  const handleConfirmPassword = () => {
    if (validateNewPassword()) {
      console.log("Password change confirmed:", formData.newpassword);
      // Proceed with password change logic here
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateProfile()) {
      console.log("Profile form submitted:", formData);
      // Proceed with profile update logic here
    }
  };

  return (
    <div className="min-h-screen text-white p-2 sm:p-4 flex flex-col items-center">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-4 sm:gap-8">
        {/* Profile Details Form */}
        <div className="lg:w-2/3 w-full">
          <div className="rounded-lg p-3 sm:p-6 space-y-4 sm:space-y-6 bg-[#fff]">
            <h2 className="text-xl sm:text-2xl font-semibold px-2 text-[#084e54]">
              Profile Details
            </h2>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-12">
              <div className="w-24 sm:w-32 flex-shrink-0">
                <label
                  htmlFor="profilePicture"
                  className="block text-xs sm:text-sm font-medium mb-2 text-center text-[#000]"
                >
                  Profile Picture *
                </label>
                <div className="border border-[#26a69a] rounded-full bg-white/10 flex flex-col items-center justify-center cursor-pointer hover:border-[#4ecdc4] transition w-24 h-24 sm:w-32 sm:h-32 mx-auto">
                  <input
                    id="profilePicture"
                    type="file"
                    name="profilePicture"
                    onChange={handleInputChange}
                    className="hidden"
                  />
                  <label
                    htmlFor="profilePicture"
                    className="flex flex-col items-center justify-center text-white/60 cursor-pointer select-none"
                  >
                    <span className="text-3xl sm:text-5xl mb-1">👤</span>
                    <span className="text-xs text-[#000]">Upload</span>
                  </label>
                </div>
              </div>

              {/* Info section - hidden on mobile (below md breakpoint) */}
              <div className="hidden md:block text-center sm:text-left p-4 sm:p-6 mt-4 border-l-4 border-[#4ecdc4] bg-white/10 rounded-lg shadow-md backdrop-blur-sm flex-1">
                <p className="text-sm text-[#000]">
                  Please provide accurate and up-to-date profile information.
                </p>
                <p className="text-sm text-[#000] mt-1">
                  This helps us communicate with you effectively and ensures
                  smooth access to our services.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
              {[
                "name",
                "email",
                "mobile",
                "address",
                "city",
                "state",
                "country",
              ].map((field) => (
                <div key={field} className={field === "address" ? "sm:col-span-2" : ""}>
                  <label
                    htmlFor={field}
                    className="block text-xs sm:text-sm font-medium mb-1 capitalize text-[#26a69a]"
                  >
                    {field.replace(/([A-Z])/g, " $1")} *
                  </label>
                  <input
                    id={field}
                    name={field}
                    type="text"
                    value={formData[field]}
                    onChange={handleInputChange}
                    placeholder={`Enter your ${field}`}
                    className={`w-full px-2 sm:px-3 py-2 text-sm rounded border border-[black]/20 bg-white/10 text-[#000] placeholder-[gray]/40 focus:outline-none focus:ring-2
                      ${
                        errors[field]
                          ? "border-red-500 ring-red-500"
                          : "border-white/20 ring-[#4ecdc4]"
                      }`}
                  />
                  {errors[field] && (
                    <p className="mt-1 text-xs text-red-400">{errors[field]}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="flex justify-center pt-2">
              <button
                onClick={handleSubmit}
                className="bg-[#26a69a] hover:bg-[#1e857b] text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-full transition w-full max-w-xs cursor-pointer"
              >
                Update Profile
              </button>
            </div>
          </div>
        </div>

        {/* Change Password Form */}
        <div className="lg:w-1/3 w-full">
          <div className="rounded-lg p-3 sm:p-6 space-y-4 sm:space-y-6 border border-white/20 bg-[#fff] border-2 border-[#26a69a]">
            <h2 className="text-xl sm:text-2xl font-semibold px-2 text-[#084e54]">
              Change Password
            </h2>
            <p className="text-xs sm:text-sm text-white/70 mb-4 text-[#000]">
              Enter your current password and OTP to change your password
              securely.
            </p>

            <div>
              <label
                htmlFor="currentPassword"
                className="block text-xs sm:text-sm font-medium mb-1 text-[#26a69a]"
              >
                Current Password *
              </label>
              <div className="relative">
                <input
                  id="currentPassword"
                  name="currentPassword"
                  type={showPassword ? "text" : "password"}
                  value={formData.currentPassword}
                  onChange={handleInputChange}
                  placeholder="Enter current password"
                  className={`w-full px-2 sm:px-3 py-2 text-sm rounded border border-[black]/20 bg-white/10 text-[#000] placeholder-[gray]/40 pr-10 focus:outline-none focus:ring-2
                    ${
                      passwordErrors.currentPassword
                        ? "border-red-500 ring-red-500"
                        : "border-white/20 ring-[#4ecdc4]"
                    }`}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-2 sm:right-3 top-2.5 text-white hover:text-[#4ecdc4]"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>
              {passwordErrors.currentPassword && (
                <p className="mt-1 text-xs text-red-400">
                  {passwordErrors.currentPassword}
                </p>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 items-start sm:items-center">
              <div className="flex-grow w-full">
                <label htmlFor="otp" className="block text-xs sm:text-sm font-medium mb-1 text-[#26a69a]">
                  OTP *
                </label>
                <input
                  id="otp"
                  name="otp"
                  type="text"
                  value={formData.otp}
                  onChange={handleInputChange}
                  placeholder="Enter OTP"
                  className={`w-full px-2 sm:px-3 py-2 text-sm rounded border border-[black]/20 bg-white/10 text-[#000] placeholder-[gray]/40 focus:outline-none focus:ring-2
                    ${
                      passwordErrors.otp
                        ? "border-red-500 ring-red-500"
                        : "border-white/20 ring-[#4ecdc4]"
                    }`}
                />
                {passwordErrors.otp && (
                  <p className="mt-1 text-xs text-red-400">
                    {passwordErrors.otp}
                  </p>
                )}
              </div>
              <button
                type="button"
                onClick={GetOtp}
                className="h-8 sm:h-10 mt-0 sm:mt-5 px-3 sm:px-5 bg-[#26a69a] text-white rounded-full font-semibold hover:bg-[#1e857b] whitespace-nowrap text-xs sm:text-sm w-full sm:w-auto"
              >
                Get OTP
              </button>
            </div>

            <button
              type="button"
              onClick={handleVerifyOTP}
              className="w-full mt-4 bg-[#26a69a] text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-full hover:bg-[#1e857b]"
            >
              Verify OTP
            </button>

            {status && (
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="newpassword"
                    className="block text-xs sm:text-sm font-medium mb-1 text-[#26a69a]"
                  >
                    New Password *
                  </label>
                  <input
                    id="newpassword"
                    name="newpassword"
                    type="password"
                    value={formData.newpassword}
                    onChange={handleInputChange}
                    placeholder="Enter new password"
                    className={`w-full px-2 sm:px-3 py-2 text-sm rounded border bg-white/10 text-[#000] placeholder-[gray]/40 focus:outline-none focus:ring-2
                      ${
                        passwordErrors.newpassword
                          ? "border-red-500 ring-red-500"
                          : "border-white/20 ring-[#4ecdc4]"
                      }`}
                  />
                  {passwordErrors.newpassword && (
                    <p className="mt-1 text-xs text-red-400">
                      {passwordErrors.newpassword}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="confirmpassword"
                    className="block text-xs sm:text-sm font-medium mb-1 text-[#26a69a]"
                  >
                    Confirm Password *
                  </label>
                  <input
                    id="confirmpassword"
                    name="confirmpassword"
                    type="password"
                    value={formData.newpassword}
                    onChange={handleInputChange}
                    placeholder="Confirm new password"
                    className={`w-full px-2 sm:px-3 py-2 text-sm rounded border bg-white/10 text-[#000] placeholder-[gray]/40 focus:outline-none focus:ring-2
                      ${
                        passwordErrors.newpassword
                          ? "border-red-500 ring-red-500"
                          : "border-white/20 ring-[#4ecdc4]"
                      }`}
                  />
                </div>

                <button
                  type="button"
                  onClick={handleConfirmPassword}
                  className="w-full mt-4 bg-gradient-to-r from-[#094e54] to-[#4ecdc4] text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-full hover:from-[#0a5c64] hover:to-[#5dd5cd] transition"
                >
                  Confirm Password
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;