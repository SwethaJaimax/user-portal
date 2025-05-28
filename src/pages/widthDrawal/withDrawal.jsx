// import React from 'react'
// import TransactionDetails from './withDrawalHistory/withDrawalHistory';
// function WithDrawal() {

  
//   const transactionData = [
//     {
//       sno: 1,
//       transactionId: "279RWYX",
//       amount: "₹0.00",
//       type: "Credit",
//       paymentMethod: "Available Balance",
//       currency: "INR",
//       transactionDate: "29-04-2025 5:25 PM",
//       status: "Completed",
//       reason: "N/A",

//     },
//     {
//       sno: 2,
//       transactionId: "041VDZS",
//       amount: "₹0.00",
//       type: "Credit",
//       paymentMethod: "Available Balance",
//       currency: "INR",
//       transactionDate: "29-04-2025 5:24 PM",
//       status: "Completed",
//       reason: "N/A",
//       updatedBy: "N/A",
//       updatedOn: "29-04-2025 5:24 PM",
//     },
//   ];

//   return (
//       <div className="flex flex-col h-screen">
//   {/* Other sidebar or wallet boxes here */}
//   <TransactionDetails list={transactionData} />
// </div>
//   )
// }

// export default WithDrawal


import React from "react";
import TransactionDetails from './withDrawalHistory/withDrawalHistory';

const WithDrawal = () => {
  

const sampleData = [
  {
    sno: 1,
    transactionId: "TXN1001",
    currencyType: "USD",
    withdrawal: "$500.00",
    adminCharges: "$5.00",
    dateTime: "2025-05-27 10:15",
    status: "Completed",
    reason: "Monthly withdrawal",
    note: "Processed successfully",
  },
  {
    sno: 2,
    transactionId: "TXN1002",
    currencyType: "EUR",
    withdrawal: "€300.00",
    adminCharges: "€3.00",
    dateTime: "2025-05-26 14:30",
    status: "Pending",
    reason: "Emergency funds",
    note: "Awaiting approval",
  },
  {
    sno: 3,
    transactionId: "TXN1003",
    currencyType: "INR",
    withdrawal: "₹15000.00",
    adminCharges: "₹150.00",
    dateTime: "2025-05-25 09:45",
    status: "Failed",
    reason: "Incorrect account",
    note: "Please retry",
  },
  {
    sno: 4,
    transactionId: "TXN1004",
    currencyType: "USD",
    withdrawal: "$250.00",
    adminCharges: "$2.50",
    dateTime: "2025-05-24 17:20",
    status: "Completed",
    reason: "Personal expenses",
    note: "Done on time",
  },
  {
    sno: 5,
    transactionId: "TXN1005",
    currencyType: "GBP",
    withdrawal: "£400.00",
    adminCharges: "£4.00",
    dateTime: "2025-05-23 11:05",
    status: "Completed",
    reason: "Travel",
    note: "Processed",
  },
  {
    sno: 6,
    transactionId: "TXN1006",
    currencyType: "USD",
    withdrawal: "$1200.00",
    adminCharges: "$12.00",
    dateTime: "2025-05-22 15:10",
    status: "Pending",
    reason: "Business expenses",
    note: "In queue",
  },
  {
    sno: 7,
    transactionId: "TXN1007",
    currencyType: "EUR",
    withdrawal: "€700.00",
    adminCharges: "€7.00",
    dateTime: "2025-05-21 08:40",
    status: "Completed",
    reason: "Invoice payment",
    note: "Successful",
  },
  {
    sno: 8,
    transactionId: "TXN1008",
    currencyType: "INR",
    withdrawal: "₹8000.00",
    adminCharges: "₹80.00",
    dateTime: "2025-05-20 13:25",
    status: "Failed",
    reason: "Invalid details",
    note: "Retry needed",
  },
  {
    sno: 9,
    transactionId: "TXN1009",
    currencyType: "USD",
    withdrawal: "$600.00",
    adminCharges: "$6.00",
    dateTime: "2025-05-19 16:55",
    status: "Completed",
    reason: "Savings withdrawal",
    note: "Completed",
  },
  {
    sno: 10,
    transactionId: "TXN1010",
    currencyType: "GBP",
    withdrawal: "£500.00",
    adminCharges: "£5.00",
    dateTime: "2025-05-18 12:00",
    status: "Completed",
    reason: "Gift",
    note: "Done",
  },
  {
    sno: 11,
    transactionId: "TXN1011",
    currencyType: "USD",
    withdrawal: "$750.00",
    adminCharges: "$7.50",
    dateTime: "2025-05-17 14:30",
    status: "Pending",
    reason: "Office supplies",
    note: "Processing",
  },
  {
    sno: 12,
    transactionId: "TXN1012",
    currencyType: "EUR",
    withdrawal: "€350.00",
    adminCharges: "€3.50",
    dateTime: "2025-05-16 10:15",
    status: "Completed",
    reason: "Utility bills",
    note: "Paid",
  },
  {
    sno: 13,
    transactionId: "TXN1013",
    currencyType: "INR",
    withdrawal: "₹10000.00",
    adminCharges: "₹100.00",
    dateTime: "2025-05-15 09:00",
    status: "Completed",
    reason: "Rent",
    note: "Done",
  },
  {
    sno: 14,
    transactionId: "TXN1014",
    currencyType: "USD",
    withdrawal: "$400.00",
    adminCharges: "$4.00",
    dateTime: "2025-05-14 18:45",
    status: "Failed",
    reason: "Bank error",
    note: "Contact bank",
  },
  {
    sno: 15,
    transactionId: "TXN1015",
    currencyType: "GBP",
    withdrawal: "£550.00",
    adminCharges: "£5.50",
    dateTime: "2025-05-13 11:35",
    status: "Completed",
    reason: "Bonus",
    note: "Credited",
  },
];



  return (
     <div className="min-h-screen w-full bg-[#084e54] text-white flex flex-col">
  <div className="bg-[#084e54] text-white px-4 sm:px-8 py-8 flex-grow">
    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Responsive Left Side */}
      <div className="space-y-6 min-w-0">
        {/* Balance Type Dropdown */}
        <div>
          <label className="block mb-2 text-sm">Balance Type</label>
          <select className="w-full bg-transparent border border-gray-500 rounded px-4 py-2 focus:outline-none">
            <option>Available Balance</option>
          </select>
          <p className="mt-2 text-sm text-gray-400 break-words">
            Total Available Balance : 0.00
          </p>
        </div>

        {/* Currency and Amount Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 text-sm">Payment Currency</label>
            <button className="w-full bg-[#4ecdc4] text-black font-medium py-2 rounded">
              INR
            </button>
          </div>
          <div>
            <label className="block mb-2 text-sm">Amount</label>
            <input
              type="number"
              placeholder="Enter Amount ₹"
              className="w-full bg-transparent border border-gray-500 rounded px-4 py-2 focus:outline-none text-white"
            />
          </div>
        </div>

        {/* Fee Summary */}
        <div className="text-sm text-gray-300 space-y-2">
          <div className="flex justify-between py-2 border-b border-gray-600">
            <span>Fees</span>
            <span>0</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-600">
            <span>Will Get</span>
            <span>0</span>
          </div>
        </div>

        <button
          type="button"
          className="w-full bg-gradient-to-r from-[#094e54] to-[#4ecdc4] text-white font-semibold px-6 py-3 rounded-full hover:from-[#0a5c64] hover:to-[#5dd5cd] transition"
        >
          Confirm Password
        </button>
      </div>

      {/* Center - Bank Details */}
      <div className="border border-gray-600 rounded p-6 min-w-0">
        <h2 className="text-lg font-bold mb-6">Bank Details</h2>
        <p className="mb-3 truncate">Bank Holder Name</p>
        <p className="mb-3 truncate">Bank Account Number</p>
        <p className="mb-3 truncate">Bank IFSC Code</p>
        <p className="mt-4 truncate">Bank Name</p>
      </div>

      {/* Right - Terms & Conditions */}
      <div className="min-w-0">
        <h2 className="text-lg font-bold mb-6">Terms & Conditions</h2>
        <ul className="list-decimal space-y-3 pl-5 text-sm text-gray-300">
          <li>
            You have to complete the KYC and get approved status; then you can start the withdrawal process.
          </li>
          <li>
            The withdrawal department works only during banking hours (10 AM to 4 PM) from Monday to Friday.
          </li>
          <li>
            When you initiate the withdrawal process, the funds will be credited to your account within 24 hours.
          </li>
          <li>
            We are not responsible if you provide the wrong bank details. Please check them carefully before initiating the withdrawal process.
          </li>
        </ul>
      </div>
    </div>
  </div>

  {/* Responsive Transaction Table */}
  {/* <div className="flex-grow flex flex-col px-4 sm:px-8 pb-8">
    <div className="overflow-x-auto">
      <TransactionDetails list={sampleData} />
    </div>
  </div> */}
</div>

  );
};

export default WithDrawal;
