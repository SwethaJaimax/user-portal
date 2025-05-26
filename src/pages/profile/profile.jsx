// import React, { useState } from 'react';

// const Profile = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     mobile: '',
//     address: '',
//     city: '',
//     state: '',
//     country: 'India',
//     profilePicture: null,
//     currentPassword: '',
//     otp: '',
//   });

//   const [showPassword, setShowPassword] = useState(false);

//   const handleInputChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === 'profilePicture') {
//       setFormData({ ...formData, profilePicture: files[0] });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const togglePasswordVisibility = () => setShowPassword(!showPassword);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//   };

//   return (
//     <div className="min-h-screen bg-[#084e54] text-white p-8">
//       {/* Small Profile title at the top */}
//       <h2 className="text-lg font-semibold mb-4 text-[#4ecdc4]">Profile</h2>

//       <form onSubmit={handleSubmit} className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
//         {/* ... rest of your code unchanged ... */}
//         {/* Profile Details */}
//         <fieldset className="md:col-span-2 bg-white/10 rounded-lg p-6 space-y-6 border border-white/20">
//           <legend className="text-2xl font-semibold px-2">Profile Details</legend>
//           <p className="text-sm text-white/70 mb-4 px-2">Please fill up your information</p>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium mb-1">Name *</label>
//               <input
//                 id="name"
//                 name="name"
//                 type="text"
//                 value={formData.name}
//                 onChange={handleInputChange}
//                 placeholder="Enter your name"
//                 required
//                 className="w-full px-3 py-2 rounded border border-white/20 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#4ecdc4]"
//               />
//             </div>

//             <div>
//               <label htmlFor="email" className="block text-sm font-medium mb-1">Email *</label>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 placeholder="Enter your email"
//                 required
//                 className="w-full px-3 py-2 rounded border border-white/20 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#4ecdc4]"
//               />
//             </div>

//             <div>
//               <label htmlFor="mobile" className="block text-sm font-medium mb-1">Mobile Number *</label>
//               <input
//                 id="mobile"
//                 name="mobile"
//                 type="text"
//                 value={formData.mobile}
//                 onChange={handleInputChange}
//                 placeholder="Enter your mobile number"
//                 required
//                 className="w-full px-3 py-2 rounded border border-white/20 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#4ecdc4]"
//               />
//             </div>

//             <div>
//               <label htmlFor="address" className="block text-sm font-medium mb-1">Address *</label>
//               <input
//                 id="address"
//                 name="address"
//                 type="text"
//                 value={formData.address}
//                 onChange={handleInputChange}
//                 placeholder="Enter your address"
//                 required
//                 className="w-full px-3 py-2 rounded border border-white/20 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#4ecdc4]"
//               />
//             </div>

//             <div>
//               <label htmlFor="city" className="block text-sm font-medium mb-1">City *</label>
//               <input
//                 id="city"
//                 name="city"
//                 type="text"
//                 value={formData.city}
//                 onChange={handleInputChange}
//                 placeholder="Enter your city"
//                 required
//                 className="w-full px-3 py-2 rounded border border-white/20 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#4ecdc4]"
//               />
//             </div>

//             <div>
//               <label htmlFor="state" className="block text-sm font-medium mb-1">State *</label>
//               <input
//                 id="state"
//                 name="state"
//                 type="text"
//                 value={formData.state}
//                 onChange={handleInputChange}
//                 placeholder="Enter your state"
//                 required
//                 className="w-full px-3 py-2 rounded border border-white/20 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#4ecdc4]"
//               />
//             </div>

//             <div>
//               <label htmlFor="country" className="block text-sm font-medium mb-1">Country *</label>
//               <input
//                 id="country"
//                 name="country"
//                 type="text"
//                 value={formData.country}
//                 onChange={handleInputChange}
//                 placeholder="Enter your country"
//                 required
//                 className="w-full px-3 py-2 rounded border border-white/20 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#4ecdc4]"
//               />
//             </div>
//           </div>

//           <div>
//             <label htmlFor="profilePicture" className="block text-sm font-medium mb-1">Profile Picture *</label>
//             <div className="border border-white/20 rounded-lg bg-white/10 flex items-center justify-center h-40 cursor-pointer hover:border-[#4ecdc4] transition">
//               <input
//                 id="profilePicture"
//                 type="file"
//                 name="profilePicture"
//                 onChange={handleInputChange}
//                 className="hidden"
//               />
//               <label htmlFor="profilePicture" className="flex flex-col items-center justify-center text-white/60">
//                 <span className="text-5xl mb-2">👤</span>
//                 Upload Profile Picture
//               </label>
//             </div>
//           </div>

//           <button
//             type="submit"
//             className="mt-6 bg-gradient-to-r from-[#094e54] to-[#4ecdc4] text-white font-semibold px-6 py-3 rounded-full hover:from-[#0a5c64] hover:to-[#5dd5cd] transition w-full max-w-xs"
//           >
//             Update Profile
//           </button>
//         </fieldset>

//         {/* Change Password */}
//         <fieldset className="bg-white/10 rounded-lg p-6 space-y-6 border border-white/20">
//           <legend className="text-2xl font-semibold px-2">Change Password</legend>
//           <p className="text-sm text-white/70 mb-4 px-2">Enter current password to change your password</p>

//           <div>
//             <label htmlFor="currentPassword" className="block text-sm font-medium mb-1">Current Password *</label>
//             <div className="relative">
//               <input
//                 id="currentPassword"
//                 name="currentPassword"
//                 type={showPassword ? 'text' : 'password'}
//                 value={formData.currentPassword}
//                 onChange={handleInputChange}
//                 placeholder="Enter current password"
//                 required
//                 className="w-full px-3 py-2 rounded border border-white/20 bg-white/10 text-white placeholder-white/60 pr-10 focus:outline-none focus:ring-2 focus:ring-[#4ecdc4]"
//               />
//               <button
//                 type="button"
//                 onClick={togglePasswordVisibility}
//                 className="absolute right-3 top-2.5 text-white/60 hover:text-[#4ecdc4]"
//                 aria-label={showPassword ? 'Hide password' : 'Show password'}
//               >
//                 {showPassword ? '🙈' : '👁️'}
//               </button>
//             </div>
//           </div>

//           <div className="flex gap-3 items-end">
//             <div className="flex-grow">
//               <label htmlFor="otp" className="block text-sm font-medium mb-1">OTP *</label>
//               <input
//                 id="otp"
//                 name="otp"
//                 type="text"
//                 value={formData.otp}
//                 onChange={handleInputChange}
//                 placeholder="Enter OTP"
//                 required
//                 className="w-full px-3 py-2 rounded border border-white/20 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#4ecdc4]"
//               />
//             </div>
//             <button
//               type="button"
//               className="h-10 px-5 bg-gradient-to-r from-[#094e54] to-[#4ecdc4] text-white rounded-full font-semibold hover:from-[#0a5c64] hover:to-[#5dd5cd] transition whitespace-nowrap"
//             >
//               Get OTP
//             </button>
//           </div>

//           <button
//             type="button"
//             className="w-full mt-4 bg-gradient-to-r from-[#094e54] to-[#4ecdc4] text-white font-semibold px-6 py-3 rounded-full hover:from-[#0a5c64] hover:to-[#5dd5cd] transition"
//           >
//             Verify OTP
//           </button>
//         </fieldset>
//       </form>
//     </div>
//   );
// };

// export default Profile;

import React, { useState } from 'react';

const Profile = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    address: '',
    city: '',
    state: '',
    country: 'India',
    profilePicture: null,
    currentPassword: '',
    otp: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'profilePicture') {
      setFormData({ ...formData, profilePicture: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-[#084e54] text-white p-8">
      <form onSubmit={handleSubmit} className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Profile Details */}
        <fieldset className="md:col-span-2 bg-white/10 rounded-lg p-6 space-y-6 border border-white/20">
          <legend className="text-2xl font-semibold px-2">Profile Details</legend>
          <p className="text-sm text-white/70 mb-4 px-2">Please fill up your information</p>

          {/* Container for upload + fields side by side */}
          <div className="flex flex-col sm:flex-row gap-6">

            {/* Upload photo small round box */}
            <div className="flex-shrink-0 w-32 h-32">
              <label htmlFor="profilePicture" className="block text-sm font-medium mb-2">Profile Picture *</label>
              <div className="border border-white/20 rounded-full bg-white/10 flex flex-col items-center justify-center cursor-pointer hover:border-[#4ecdc4] transition w-22 h-32 mx-auto">
                <input
                  id="profilePicture"
                  type="file"
                  name="profilePicture"
                  onChange={handleInputChange}
                  className="hidden"
                />
                <label htmlFor="profilePicture" className="flex flex-col items-center justify-center text-white/60 cursor-pointer select-none">
                  <span className="text-5xl mb-1">👤</span>
                  <span className="text-xs">Upload</span>
                </label>
              </div>
            </div>

            {/* Form fields occupy remaining space */}
            <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 gap-6">

              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name *</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  required
                  className="w-full px-3 py-2 rounded border border-white/20 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#4ecdc4]"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  required
                  className="w-full px-3 py-2 rounded border border-white/20 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#4ecdc4]"
                />
              </div>

              <div>
                <label htmlFor="mobile" className="block text-sm font-medium mb-1">Mobile Number *</label>
                <input
                  id="mobile"
                  name="mobile"
                  type="text"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  placeholder="Enter your mobile number"
                  required
                  className="w-full px-3 py-2 rounded border border-white/20 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#4ecdc4]"
                />
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium mb-1">Address *</label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Enter your address"
                  required
                  className="w-full px-3 py-2 rounded border border-white/20 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#4ecdc4]"
                />
              </div>

              <div>
                <label htmlFor="city" className="block text-sm font-medium mb-1">City *</label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="Enter your city"
                  required
                  className="w-full px-3 py-2 rounded border border-white/20 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#4ecdc4]"
                />
              </div>

              <div>
                <label htmlFor="state" className="block text-sm font-medium mb-1">State *</label>
                <input
                  id="state"
                  name="state"
                  type="text"
                  value={formData.state}
                  onChange={handleInputChange}
                  placeholder="Enter your state"
                  required
                  className="w-full px-3 py-2 rounded border border-white/20 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#4ecdc4]"
                />
              </div>

              <div>
                <label htmlFor="country" className="block text-sm font-medium mb-1">Country *</label>
                <input
                  id="country"
                  name="country"
                  type="text"
                  value={formData.country}
                  onChange={handleInputChange}
                  placeholder="Enter your country"
                  required
                  className="w-full px-3 py-2 rounded border border-white/20 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#4ecdc4]"
                />

                <input
                  type="submit"
                  value="Update Profile"
                  className="mt-6 bg-gradient-to-r from-[#094e54] to-[#4ecdc4] text-white font-semibold px-6 py-3 rounded-full hover:from-[#0a5c64] hover:to-[#5dd5cd] transition w-full max-w-xs mx-auto cursor-pointer"
                />
              </div>
            </div>
          </div>

        </fieldset>

        {/* Change Password */}
        <fieldset className="bg-white/10 rounded-lg p-6 space-y-6 border border-white/20">
          <legend className="text-2xl font-semibold px-2">Change Password</legend>
          <p className="text-sm text-white/70 mb-4 px-2">Enter current password to change your password</p>

          <div>
            <label htmlFor="currentPassword" className="block text-sm font-medium mb-1">Current Password *</label>
            <div className="relative">
              <input
                id="currentPassword"
                name="currentPassword"
                type={showPassword ? 'text' : 'password'}
                value={formData.currentPassword}
                onChange={handleInputChange}
                placeholder="Enter current password"
                required
                className="w-full px-3 py-2 rounded border border-white/20 bg-white/10 text-white placeholder-white/60 pr-10 focus:outline-none focus:ring-2 focus:ring-[#4ecdc4]"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-2.5 text-white/60 hover:text-[#4ecdc4]"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>
          </div>

          <div className="flex gap-3 items-end">
            <div className="flex-grow">
              <label htmlFor="otp" className="block text-sm font-medium mb-1">OTP *</label>
              <input
                id="otp"
                name="otp"
                type="text"
                value={formData.otp}
                onChange={handleInputChange}
                placeholder="Enter OTP"
                required
                className="w-full px-3 py-2 rounded border border-white/20 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#4ecdc4]"
              />
            </div>
            <button
              type="button"
              className="h-10 px-5 bg-gradient-to-r from-[#094e54] to-[#4ecdc4] text-white rounded-full font-semibold hover:from-[#0a5c64] hover:to-[#5dd5cd] transition whitespace-nowrap"
            >
              Get OTP
            </button>
          </div>

          <button
            type="button"
            className="w-full mt-4 bg-gradient-to-r from-[#094e54] to-[#4ecdc4] text-white font-semibold px-6 py-3 rounded-full hover:from-[#0a5c64] hover:to-[#5dd5cd] transition"
          >
            Verify OTP
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default Profile;
