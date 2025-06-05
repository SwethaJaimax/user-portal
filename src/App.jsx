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



// import React from 'react'
// import KYCDetails from './components/RTQ_queries/rtqqueries'

// export default function App() {
//   return (
//     <div>
//       <KYCDetails />
//     </div>
//   )
// }


// import React, { useState } from 'react';
// import Tesseract from 'tesseract.js';

// const App = () => {
//   const [image, setImage] = useState(null);
//   const [parsedData, setParsedData] = useState(null);
//   const [rawText, setRawText] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleImageChange = async (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImage(URL.createObjectURL(file));
//       setLoading(true);

//       Tesseract.recognize(file, 'eng', {
//         logger: m => console.log(m)
//       })
//         .then(({ data: { text } }) => {
//           setRawText(text);
//           const structured = parseOCRText(text);
//           setParsedData(structured);
//           setLoading(false);
//         })
//         .catch(err => {
//           console.error('OCR error:', err);
//           setLoading(false);
//         });
//     }
//   };

//   const parseOCRText = (rawText) => {
//     const lines = rawText.split('\n').map(line => line.trim()).filter(line => line !== '');

//     const result = {
//       name: lines[0] || '',
//       dob: '',
//       gender: '',
//       address: lines[2] || '',
//       aadhaarNumber: '',
//       extraInfo: lines[4] || ''
//     };

//     // Line 2: e.g. "DOB: 01/01/1980 MALE"
//     if (lines[1]) {
//       const dobMatch = lines[1].match(/DOB:\s*(\d{2}\/\d{2}\/\d{4})/i);
//       const genderMatch = lines[1].match(/\b(MALE|FEMALE|OTHER)\b/i);
//       result.dob = dobMatch ? dobMatch[1] : '';
//       result.gender = genderMatch ? genderMatch[1] : '';
//     }

//     // Aadhaar number line
//     if (lines[3]) {
//       const aadhaarMatch = lines[3].match(/(\d{4}\s\d{4}\s\d{4})/);
//       result.aadhaarNumber = aadhaarMatch ? aadhaarMatch[1] : '';
//     }

//     return result;
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h2>OCR Aadhaar Parser</h2>
//       <input type="file" accept="image/*" onChange={handleImageChange} />
//       {loading && <p>Extracting text...</p>}
//       {image && <img src={image} alt="Selected" style={{ width: '300px', marginTop: '10px' }} />}
//       {rawText && (
//         <>
//           <h3>Raw OCR Text:</h3>
//           <pre style={{ background: '#f4f4f4', padding: '10px' }}>{rawText}</pre>
//         </>
//       )}
//       {parsedData && (
//         <>
//           <h3>Parsed Structured Object:</h3>
//           <pre style={{ background: '#e9f7ef', padding: '10px' }}>
//             {JSON.stringify(parsedData, null, 2)}
//           </pre>
//         </>
//       )}
//     </div>
//   );
// };

// export default App;
