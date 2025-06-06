// import React, { useState } from "react";
// import styles from "./transactionDetails.module.css";
// import { Search } from "lucide-react";

// const TransactionDetails = ({ list }) => {
//   const [query, setQuery] = useState("");

//   const filteredList = list.filter(
//     (item) =>
//       item.transactionId.toLowerCase().includes(query.toLowerCase()) ||
//       item.updatedBy.toLowerCase().includes(query.toLowerCase())
//   );

//   return (
//     <div className={styles.container}>
//       {/* Header */}
//       <div className={styles.header}>
//         <h2 className={styles.title}>Team Transactions</h2>

//         <div
//           className="flex items-center rounded-xl border border-gray-600 px-4 py-2 w-80"
//           // style={{
//           //   background: "linear-gradient(111deg, #096d6f, #40c9c6)",
//           // }}
//         >
//           <input
//             type="text"
//             placeholder="Search"
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             className="bg-transparent text-white placeholder-gray-400 focus:outline-none flex-grow"
//           />
//           <Search className="text-white" />
//         </div>
//       </div>

//       {filteredList.length > 0 ? (
//         <div className={styles.tableWrapper}>
//           <table className={styles.table}>
//             <thead className={styles.thead}>
//               <tr>
//                 {[
//                   "S.No",
//                   "Transaction ID",
//                   "Amount",
//                   "Type",
//                   "Payment Method",
//                   "Currency",
//                   "Transaction Date",
//                   "Status",
//                   "Reason",
//                   "Updated By",
//                   "Updated On",
//                 ].map((heading, i) => (
//                   <th
//                     key={i}
//                     className={`${styles.th} ${i === 0 ? styles.thFirst : ""}`}
//                     title={heading}
//                   >
//                     {heading}
//                   </th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {filteredList.map((item, idx) => (
//                 <tr
//                   key={idx}
//                   className={idx % 2 === 0 ? styles.trEven : styles.trOdd}
//                 >
//                   <td className={styles.td}>{item.sno}</td>
//                   <td className={styles.td} title={item.transactionId}>
//                     {item.transactionId}
//                   </td>
//                   <td className={styles.td}>{item.amount}</td>
//                   <td className={styles.td}>{item.type}</td>
//                   <td className={styles.td}>{item.paymentMethod}</td>
//                   <td className={styles.td}>{item.currency}</td>
//                   <td className={styles.td}>{item.transactionDate}</td>
//                   <td className={styles.td}>{item.status}</td>
//                   <td className={styles.td} title={item.reason}>
//                     {item.reason}
//                   </td>
//                   <td className={styles.td} title={item.updatedBy}>
//                     {item.updatedBy}
//                   </td>
//                   <td className={styles.td}>{item.updatedOn}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       ) : (
//         <div className={styles.noData}>No data found</div>
//       )}
//     </div>
//   );
// };

// export default TransactionDetails;

// import React, { useState, useEffect } from "react";
// import styles from "./transactionDetails.module.css";
// import { Search } from "lucide-react";

// const ITEMS_PER_PAGE = 10;

// const TransactionDetails = ({ list }) => {
//   const [query, setQuery] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);

//   // Filter the list based on the search query
//   const filteredList = list.filter(
//     (item) =>
//       item.transactionId.toLowerCase().includes(query.toLowerCase()) ||
//       item.updatedBy.toLowerCase().includes(query.toLowerCase())
//   );

//   // Calculate total pages
//   const totalPages = Math.ceil(filteredList.length / ITEMS_PER_PAGE);

//   // Get the items for the current page
//   const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
//   const paginatedList = filteredList.slice(
//     startIndex,
//     startIndex + ITEMS_PER_PAGE
//   );

//   // Handlers for pagination buttons
//   const handlePrevPage = () => {
//     setCurrentPage((prev) => Math.max(prev - 1, 1));
//   };

//   const handleNextPage = () => {
//     setCurrentPage((prev) => Math.min(prev + 1, totalPages));
//   };

//   // Reset to page 1 when search query changes
//   useEffect(() => {
//     setCurrentPage(1);
//   }, [query]);

//   return (
//     <div className={styles.container}>
//       {/* Header */}
//       <div className={styles.header}>
//         <h2 className={styles.title}>Team Transactions</h2>

//         <div
//           className="flex items-center rounded-xl border border-gray-600 px-4 py-2 w-80"
//           // style={{
//           //   background: "linear-gradient(111deg, #096d6f, #40c9c6)",
//           // }}
//         >
//           <input
//             type="text"
//             placeholder="Search"
//             value={query}
//             onChange={(e) => setQuery(e.target.value.trim())}
//             className="bg-transparent text-white placeholder-gray-400 focus:outline-none flex-grow"
//           />
//           <Search className="text-white" />
//         </div>
//       </div>

//       {paginatedList.length > 0 ? (
//         <>
//           <div className={styles.tableWrapper}>
//             <table className={styles.table}>
//               <thead className={styles.thead}>
//                 <tr>
//                   {[
//                     "S.No",
//                     "Transaction ID",
//                     "Amount",
//                     "Type",
//                     "Payment Method",
//                     "Currency",
//                     "Transaction Date",
//                     "Status",
//                     "Reason",
//                     "Updated By",
//                     "Updated On",
//                   ].map((heading, i) => (
//                     <th
//                       key={i}
//                       className={`${styles.th} ${i === 0 ? styles.thFirst : ""}`}
//                       title={heading}
//                     >
//                       {heading}
//                     </th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 {paginatedList.map((item, idx) => (
//                   <tr
//                     key={startIndex + idx}
//                     className={
//                       (startIndex + idx) % 2 === 0 ? styles.trEven : styles.trOdd
//                     }
//                   >
//                     <td className={styles.td}>{item.sno}</td>
//                     <td className={styles.td} title={item.transactionId}>
//                       {item.transactionId}
//                     </td>
//                     <td className={styles.td}>{item.amount}</td>
//                     <td className={styles.td}>{item.type}</td>
//                     <td className={styles.td}>{item.paymentMethod}</td>
//                     <td className={styles.td}>{item.currency}</td>
//                     <td className={styles.td}>{item.transactionDate}</td>
//                     <td className={styles.td}>{item.status}</td>
//                     <td className={styles.td} title={item.reason}>
//                       {item.reason}
//                     </td>
//                     <td className={styles.td} title={item.updatedBy}>
//                       {item.updatedBy}
//                     </td>
//                     <td className={styles.td}>{item.updatedOn}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           {/* Pagination Controls - placed AFTER the table */}
//           <div className="flex justify-center items-center gap-4 mt-4">
//             <button
//               onClick={handlePrevPage}
//               disabled={currentPage === 1}
//               className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
//             >
//               Previous
//             </button>

//             <span>
//               Page {currentPage} of {totalPages}
//             </span>

//             <button
//               onClick={handleNextPage}
//               disabled={currentPage === totalPages}
//               className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
//             >
//               Next
//             </button>
//           </div>
//         </>
//       ) : (
//         <div className={styles.noData}>No data found</div>
//       )}
//     </div>
//   );
// };

// export default TransactionDetails;

// import React from "react";

// const TransactionDetails = () => {
//   const transactions = [
//     {
//       sno: 1,
//       transactionId: "TXN123456",
//       amount: "$120.00",
//       type: "Credit",
//       paymentMethod: "Credit Card",
//       currency: "USD",
//       transactionDate: "2025-05-20",
//       status: "Completed",
//       reason: "Subscription Payment",
//       updatedBy: "Alexandra Deff",
//       updatedOn: "2025-05-21",
//     },
//     {
//       sno: 2,
//       transactionId: "TXN123457",
//       amount: "$85.50",
//       type: "Debit",
//       paymentMethod: "PayPal",
//       currency: "USD",
//       transactionDate: "2025-05-18",
//       status: "In Progress",
//       reason: "Refund Processing",
//       updatedBy: "Edwin Adenike",
//       updatedOn: "2025-05-19",
//     },
//     {
//       sno: 3,
//       transactionId: "TXN123458",
//       amount: "$200.00",
//       type: "Credit",
//       paymentMethod: "Bank Transfer",
//       currency: "USD",
//       transactionDate: "2025-05-17",
//       status: "Pending",
//       reason: "Invoice Payment",
//       updatedBy: "Isaac Oluwatemiloun",
//       updatedOn: "2025-05-18",
//     },
//     // Add more transactions here
//   ];

//   return (
//     <>
//       <style>{`
//         /* Hide scrollbar but keep scroll */
//         .hide-scrollbar {
//           scrollbar-width: none; /* Firefox */
//           -ms-overflow-style: none; /* IE and Edge */
//         }
//         .hide-scrollbar::-webkit-scrollbar {
//           display: none; /* Chrome, Safari, Opera */
//         }
//       `}</style>
//       <div
//         className="min-h-screen bg-white p-6 rounded-xl shadow-md md:col-span-2 mx-auto w-full max-w-7xl"
//         style={{
//           background: "linear-gradient(111deg, #096d6f, #40c9c6)",
//         }}
//       >
//         <div className="flex justify-between items-center mb-6 flex-wrap gap-2">
//           <div className="font-semibold text-xl text-white">Transaction Details</div>
//           <button className="px-4 py-2 text-sm border border-white text-white rounded-full whitespace-nowrap">
//             + Add Transaction
//           </button>
//         </div>

//         <div className="overflow-x-auto max-h-[38rem] hide-scrollbar rounded-lg shadow-inner bg-white">
//           <table className="min-w-full text-sm text-left text-gray-800">
//             <thead className="bg-gray-100 sticky top-0">
//               <tr>
//                 <th className="px-4 py-3 border border-gray-300">#</th>
//                 <th className="px-4 py-3 border border-gray-300">Transaction ID</th>
//                 <th className="px-4 py-3 border border-gray-300">Amount</th>
//                 <th className="px-4 py-3 border border-gray-300">Type</th>
//                 <th className="px-4 py-3 border border-gray-300">Payment Method</th>
//                 <th className="px-4 py-3 border border-gray-300">Currency</th>
//                 <th className="px-4 py-3 border border-gray-300">Date</th>
//                 <th className="px-4 py-3 border border-gray-300">Status</th>
//                 <th className="px-4 py-3 border border-gray-300">Reason</th>
//                 <th className="px-4 py-3 border border-gray-300">Updated By</th>
//                 <th className="px-4 py-3 border border-gray-300">Updated On</th>
//               </tr>
//             </thead>
//             <tbody className="overflow-y-auto max-h-[38rem]">
//               {transactions.map((txn) => (
//                 <tr
//                   key={txn.sno}
//                   className={txn.sno % 2 === 0 ? "bg-gray-50" : "bg-white"}
//                 >
//                   <td className="border border-gray-300 px-4 py-2">{txn.sno}</td>
//                   <td className="border border-gray-300 px-4 py-2">{txn.transactionId}</td>
//                   <td className="border border-gray-300 px-4 py-2">{txn.amount}</td>
//                   <td className="border border-gray-300 px-4 py-2">{txn.type}</td>
//                   <td className="border border-gray-300 px-4 py-2">{txn.paymentMethod}</td>
//                   <td className="border border-gray-300 px-4 py-2">{txn.currency}</td>
//                   <td className="border border-gray-300 px-4 py-2">{txn.transactionDate}</td>
//                   <td className="border border-gray-300 px-4 py-2">
//                     <span
//                       className={`px-3 py-1 rounded-full text-xs font-semibold
//                       ${
//                         txn.status === "Completed"
//                           ? "bg-green-100 text-green-700"
//                           : txn.status === "In Progress"
//                           ? "bg-yellow-100 text-yellow-700"
//                           : "bg-red-100 text-red-700"
//                       }`}
//                     >
//                       {txn.status}
//                     </span>
//                   </td>
//                   <td className="border border-gray-300 px-4 py-2 max-w-xs break-words">{txn.reason}</td>
//                   <td className="border border-gray-300 px-4 py-2">{txn.updatedBy}</td>
//                   <td className="border border-gray-300 px-4 py-2">{txn.updatedOn}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// };

// export default TransactionDetails;

// import React from "react";

// const sampleTransactions = [
//   {
//     sno: 1,
//     transactionId: "TXN123456",
//     amount: "$1500",
//     type: "Credit",
//     paymentMethod: "Credit Card",
//     currency: "USD",
//     transactionDate: "2025-05-25",
//     status: "Completed",
//     reason: "Invoice Payment",
//     updatedBy: "John Doe",
//     updatedOn: "2025-05-26",
//   },
//   {
//     sno: 2,
//     transactionId: "TXN123457",
//     amount: "$750",
//     type: "Debit",
//     paymentMethod: "Bank Transfer",
//     currency: "USD",
//     transactionDate: "2025-05-24",
//     status: "In Progress",
//     reason: "Refund Process",
//     updatedBy: "Jane Smith",
//     updatedOn: "2025-05-25",
//   },
//   {
//     sno: 3,
//     transactionId: "TXN123458",
//     amount: "$300",
//     type: "Credit",
//     paymentMethod: "PayPal",
//     currency: "USD",
//     transactionDate: "2025-05-23",
//     status: "Pending",
//     reason: "Subscription",
//     updatedBy: "Alex Johnson",
//     updatedOn: "2025-05-24",
//   },
//   {
//     sno: 4,
//     transactionId: "TXN123459",
//     amount: "$1200",
//     type: "Credit",
//     paymentMethod: "Credit Card",
//     currency: "USD",
//     transactionDate: "2025-05-22",
//     status: "Completed",
//     reason: "Project Milestone",
//     updatedBy: "Emily Davis",
//     updatedOn: "2025-05-23",
//   },
//   {
//     sno: 5,
//     transactionId: "TXN123460",
//     amount: "$450",
//     type: "Debit",
//     paymentMethod: "Bank Transfer",
//     currency: "USD",
//     transactionDate: "2025-05-21",
//     status: "Completed",
//     reason: "Purchase Refund",
//     updatedBy: "Michael Lee",
//     updatedOn: "2025-05-22",
//   },
// ];

// const TransactionDetails = ({ transactions }) => {
//   return (
//     <>
//       <style>{`
//         /* Hide scrollbar but keep scroll */
//         .hide-scrollbar {
//           scrollbar-width: none; /* Firefox */
//           -ms-overflow-style: none; /* IE and Edge */
//         }
//         .hide-scrollbar::-webkit-scrollbar {
//           display: none; /* Chrome, Safari, Opera */
//         }
//       `}</style>

//       <div
//         className="min-h-screen w-full rounded-xl shadow-md max-w-7xl"
//         style={{
//           background: "linear-gradient(111deg, #096d6f, #40c9c6)",
//         }}
//       >
//         <div className="flex justify-between items-center mb-6 flex-wrap gap-2">
//           <div className="font-semibold text-xl text-white">Team Transactions</div>
//           <button className="px-4 py-2 text-sm border border-white text-white rounded-full whitespace-nowrap hover:bg-white hover:text-teal-700 transition">
//             + Add Transaction
//           </button>
//         </div>

//         {/* Responsive horizontal scroll container */}
//         <div className="overflow-x-auto hide-scrollbar rounded-lg border border-white/30">
//           <ul className="space-y-3 max-h-[38rem] overflow-y-auto hide-scrollbar min-w-[1024px]">
//             {/* Header Row */}
//             <li
//               className="flex text-white font-semibold text-sm uppercase tracking-wide w-full bg-white/10 sticky top-0 z-10"
//               style={{ borderBottom: "2px solid rgba(255,255,255,0.3)" }}
//             >
//               <div className="w-10 flex-shrink-0 px-2 py-3">#</div>
//               <div className="flex-grow px-2 py-3">Txn ID</div>
//               <div className="w-28 flex-shrink-0 px-2 py-3 text-right">Amount</div>
//               <div className="w-24 flex-shrink-0 px-2 py-3 text-center">Type</div>
//               <div className="flex-grow px-2 py-3">Pay Method</div>
//               <div className="w-20 flex-shrink-0 px-2 py-3 text-center">Curr</div>
//               <div className="w-28 flex-shrink-0 px-2 py-3 text-center">Txn Date</div>
//               <div className="w-28 flex-shrink-0 px-2 py-3 text-center">Status</div>
//               <div className="flex-grow px-2 py-3">Reason</div>
//               <div className="flex-grow px-2 py-3">Updated By</div>
//               <div className="w-32 flex-shrink-0 px-2 py-3 text-center">Updated On</div>
//             </li>

//             {/* Data Rows */}
//             {sampleTransactions && sampleTransactions .length > 0 ? (
//               sampleTransactions.map((txn, idx) => (
//                 <li
//                   key={txn.sno || idx}
//                   className={`flex items-center justify-between gap-4 w-full rounded-lg px-2 py-3 ${
//                     idx % 2 === 0 ? "bg-white/20" : "bg-white/10"
//                   }`}
//                 >
//                   <div className="w-10 flex-shrink-0 text-white font-medium text-center">{txn.sno}</div>
//                   <div className="flex-grow text-white truncate px-2">{txn.transactionId}</div>
//                   <div className="w-28 flex-shrink-0 text-white text-right px-2">{txn.amount}</div>
//                   <div className="w-24 flex-shrink-0 text-white text-center px-2">{txn.type}</div>
//                   <div className="flex-grow text-white truncate px-2">{txn.paymentMethod}</div>
//                   <div className="w-20 flex-shrink-0 text-white text-center px-2">{txn.currency}</div>
//                   <div className="w-28 flex-shrink-0 text-white text-center px-2">{txn.transactionDate}</div>
//                   <div className="w-28 flex-shrink-0 flex justify-center px-2">
//                     <span
//                       className={`text-sm px-4 py-1.5 rounded-full font-semibold whitespace-nowrap
//                         ${
//                           txn.status === "Completed"
//                             ? "bg-green-100 text-green-700"
//                             : txn.status === "In Progress"
//                             ? "bg-yellow-100 text-yellow-700"
//                             : "bg-red-100 text-red-700"
//                         }
//                       `}
//                     >
//                       {txn.status}
//                     </span>
//                   </div>
//                   <div className="flex-grow text-white truncate px-2">{txn.reason}</div>
//                   <div className="flex-grow text-white truncate px-2">{txn.updatedBy}</div>
//                   <div className="w-32 flex-shrink-0 text-white text-center px-2">{txn.updatedOn}</div>
//                 </li>
//               ))
//             ) : (
//               <li className="text-white p-4 text-center">No data found</li>
//             )}
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// };

// export default TransactionDetails;

import React, { useState, useEffect } from "react";
import styles from "./transactionDetails.module.css";
import { Search } from "lucide-react";

const ITEMS_PER_PAGE = 10;

const TransactionDetails = ({ list }) => {
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredList = list.filter(
    (item) =>
      item.transactionId.toLowerCase().includes(query.toLowerCase()) ||
      item.updatedBy.toLowerCase().includes(query.toLowerCase())
  );

  const totalPages = Math.ceil(filteredList.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedList = filteredList.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [query]);

  // Shortened column headings for compactness
  const headings = [
    "No",
    "Txn ID",
    "Amt",
    "Type",
    "Pay Method",
    "Curr",
    "Txn Date",
    "Status",
    "Reason",
    "Updated By",
    "Updated On",
  ];

  return (
    <div
      className={styles.container}
      style={{
        width: "98%",
        fontSize: "0.85rem",
        background:
          "radial-gradient(circle at 50% 30%, #20934a 0%,rgb(65, 187, 174) 70%)",
      }}
    >
      {/* Header */}
      <div className={styles.header} style={{ marginBottom: "12px" }}>
        <h2
          className={styles.title}
          style={{ fontSize: "1.1rem", color: "#084e54" }}
        >
          Team Transactions
        </h2>

        <div className="flex items-center rounded-xl border border-white px-3 py-1.5 w-72 focus-within:border-2 focus-within:border-[#f2f2f2] transition-all duration-200">
          <input
            type="text"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="bg-transparent text-white placeholder-white focus:outline-none flex-grow"
            style={{ fontSize: "0.85rem", padding: "4px 8px", color: "white" }}
          />
          <Search className="text-white" size={16} />
        </div>
      </div>

      {paginatedList.length > 0 ? (
        <>
          <div
            className={styles.tableWrapper}
            style={{
              overflowX: "auto",
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <style>
              {`
                .${styles.tableWrapper}::-webkit-scrollbar {
                  display: none;
                }
              `}
            </style>

            <table
              className={styles.table}
              style={{
                width: "100%",
                borderCollapse: "collapse",
                minWidth: "850px",
                tableLayout: "fixed",
                fontSize: "0.85rem",
              }}
            >
              <thead className={styles.thead}>
                <tr>
                  {headings.map((heading, i) => (
                    <th
                      key={i}
                      className={`${styles.th} ${
                        i === 0 ? styles.thFirst : ""
                      }`}
                      title={heading}
                      style={{
                        backgroundColor: "#f3f4f6",
                        opacity: 1,
                        padding: "8px 10px",
                        border: "1px solid #ddd",
                        textAlign: "left",
                        whiteSpace: "nowrap",
                        fontWeight: "600",
                        color: "#111",
                        fontSize: "0.85rem",
                      }}
                    >
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {paginatedList.map((item, idx) => (
                  <tr
                    key={startIndex + idx}
                    style={{
                      backgroundColor:
                        idx % 2 === 0
                          ? "rgba(243, 244, 246, 0.7)"
                          : "rgba(255, 255, 255, 1)",
                      verticalAlign: "top",
                    }}
                  >
                    {[
                      item.sno,
                      item.transactionId,
                      item.amount,
                      item.type,
                      item.paymentMethod,
                      item.currency,
                      item.transactionDate,
                      item.status,
                      item.reason,
                      item.updatedBy,
                      item.updatedOn,
                    ].map((val, i) => (
                      <td
                        key={i}
                        title={typeof val === "string" ? val : undefined}
                        style={{
                          padding: "8px 10px",
                          border: "1px solid #ddd",
                          color: "#333",
                          whiteSpace: "normal",
                          wordWrap: "break-word",
                          wordBreak: "break-word",
                          textAlign: "left",
                          maxWidth: i === 8 || i === 9 ? "180px" : "auto",
                          fontSize: "0.85rem",
                        }}
                      >
                        {val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center items-center gap-4 mt-3">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded font-medium transition-all duration-200
      ${
        currentPage === 1
          ? "bg-[#a5d6a7] text-white cursor-not-allowed"
          : "bg-[#20934a] text-white hover:bg-[#1c7f3e]"
      }
    `}
              style={{ fontSize: "0.85rem" }}
            >
              Previous
            </button>

            <span
              style={{ fontSize: "0.85rem" }}
              className="text-[#084e54] font-medium"
            >
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded font-medium transition-all duration-200
      ${
        currentPage === totalPages
          ? "bg-[#a5d6a7] text-white cursor-not-allowed"
          : "bg-[#20934a] text-white hover:bg-[#1c7f3e]"
      }
    `}
              style={{ fontSize: "0.85rem" }}
            >
              Next
            </button>
          </div>
        </>
      ) : (
        <div
          className={styles.noData}
          style={{ fontSize: "0.9rem", padding: "16px" }}
        >
          No data found
        </div>
      )}
    </div>
  );
};

export default TransactionDetails;
