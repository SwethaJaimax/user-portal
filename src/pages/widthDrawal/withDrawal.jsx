
import React, { useState } from "react";
import TransactionDetails from './withDrawalHistory/withDrawalHistory';

const WithDrawal = () => {
  const [amount, setAmount] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const sampleData = [
    // ... your existing sampleData ...
    {
      sno: 1,
      transactionId: "279RWYX",
      amount: "₹0.00",
      type: "Credit",
      paymentMethod: "Available Balance",
      currency: "INR",
      transactionDate: "29-04-2025 5:25 PM",
      status: "Completed",
      reason: "N/A",

    },
    {
      sno: 1,
      transactionId: "279RWYX",
      amount: "₹0.00",
      type: "Credit",
      paymentMethod: "Available Balance",
      currency: "INR",
      transactionDate: "29-04-2025 5:25 PM",
      status: "Completed",
      reason: "N/A",

    },
    {
      sno: 1,
      transactionId: "279RWYX",
      amount: "₹0.00",
      type: "Credit",
      paymentMethod: "Available Balance",
      currency: "INR",
      transactionDate: "29-04-2025 5:25 PM",
      status: "Completed",
      reason: "N/A",

    },
    {
      sno: 1,
      transactionId: "279RWYX",
      amount: "₹0.00",
      type: "Credit",
      paymentMethod: "Available Balance",
      currency: "INR",
      transactionDate: "29-04-2025 5:25 PM",
      status: "Completed",
      reason: "N/A",

    },
    {
      sno: 1,
      transactionId: "279RWYX",
      amount: "₹0.00",
      type: "Credit",
      paymentMethod: "Available Balance",
      currency: "INR",
      transactionDate: "29-04-2025 5:25 PM",
      status: "Completed",
      reason: "N/A",

    },
    {
      sno: 1,
      transactionId: "279RWYX",
      amount: "₹0.00",
      type: "Credit",
      paymentMethod: "Available Balance",
      currency: "INR",
      transactionDate: "29-04-2025 5:25 PM",
      status: "Completed",
      reason: "N/A",

    },
    {
      sno: 1,
      transactionId: "279RWYX",
      amount: "₹0.00",
      type: "Credit",
      paymentMethod: "Available Balance",
      currency: "INR",
      transactionDate: "29-04-2025 5:25 PM",
      status: "Completed",
      reason: "N/A",

    },
    {
      sno: 1,
      transactionId: "279RWYX",
      amount: "₹0.00",
      type: "Credit",
      paymentMethod: "Available Balance",
      currency: "INR",
      transactionDate: "29-04-2025 5:25 PM",
      status: "Completed",
      reason: "N/A",

    },
    {
      sno: 1,
      transactionId: "279RWYX",
      amount: "₹0.00",
      type: "Credit",
      paymentMethod: "Available Balance",
      currency: "INR",
      transactionDate: "29-04-2025 5:25 PM",
      status: "Completed",
      reason: "N/A",

    },
    {
      sno: 1,
      transactionId: "279RWYX",
      amount: "₹0.00",
      type: "Credit",
      paymentMethod: "Available Balance",
      currency: "INR",
      transactionDate: "29-04-2025 5:25 PM",
      status: "Completed",
      reason: "N/A",

    },
    {
      sno: 1,
      transactionId: "279RWYX",
      amount: "₹0.00",
      type: "Credit",
      paymentMethod: "Available Balance",
      currency: "INR",
      transactionDate: "29-04-2025 5:25 PM",
      status: "Completed",
      reason: "N/A",

    },
  ];

  const validate = () => {
    const newErrors = {};
    if (!amount) {
      newErrors.amount = "Amount is required";
    } else if (isNaN(amount) || Number(amount) <= 0) {
      newErrors.amount = "Enter a valid positive amount";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleConfirm = () => {
    if (validate()) {
      alert(`Withdrawal confirmed for amount ₹${amount}`);
      // Proceed with your logic here
    }
  };

  return (
    <div className="min-h-screen w-full text-white flex flex-col ">
      <div className=" text-white px-4 sm:px-8 py-8 flex-grow bg-[#fff] rounded-md" style={{boxShadow:"0px 0px 4px silver", marginBottom:"15px"}}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 ">
          {/* Left Side */}
          <div className="space-y-6 min-w-0">
            {/* Balance Type Dropdown */}
            <div>
              <label className="block mb-2 text-md text-[#26a69a]">Balance Type</label>
              <select className="w-full text-[gray] border border-[gray]/40 rounded px-4 py-2 focus:outline-none">
                <option className="text-[gray]">Available Balance</option>
              </select>
              <p className="mt-2 text-sm text-[#000] break-words ">
                Total Available Balance : 0.00
              </p>
            </div>

            {/* Currency and Amount Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 text-md text-[#26a69a]">Payment Currency</label>
                <button className="w-[90%] bg-[#c5d82e] text-black font-medium py-2 rounded text-md">
                  INR
                </button>
              </div>
              <div>
                <label className="block mb-2 text-md text-[#000]  ">Amount</label>
                <input
                  type="number"
                  placeholder="Enter Amount ₹"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className={`w-full bg-transparent border rounded px-4 py-2 focus:outline-none text-[#000] text-[14px] placeholder-[gray]/40 focus:outline-none focus:ring-2 focus:ring-[#4ecdc4] transition ${errors.amount ? "border-white-500" : "border-white-500"
                    }`}
                />
                {errors.amount && (
                  <p className="text-red-500 text-xs mt-1">{errors.amount}</p>
                )}
              </div>
            </div>


            {/* Fee Summary */}
            <div className="text-sm text-[#000] space-y-2">
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
              onClick={handleConfirm}
              className="w-full bg-[#26a69a] hover:bg-[#1e857b] text-white font-semibold px-6 py-3 rounded-full hover:from-[#0a5c64] hover:to-[#5dd5cd] transition"
            >
              Confirm Password
            </button>
          </div>

          {/* Center - Bank Details */}
          <div className="border-r border-l border-[#000]/600 pl-6 min-w-0 text-[#000]">
            <h2 className="text-lg font-bold mb-6 text-[#26a69a]">Bank Details</h2>
            <p className="mb-3 truncate">Bank Holder Name</p>
            <p className="mb-3 truncate">Bank Account Number</p>
            <p className="mb-3 truncate">Bank IFSC Code</p>
            <p className="mt-4 truncate">Bank Name</p>
          </div>

          {/* Right - Terms & Conditions */}
          <div className="min-w-0 text-[#000]">
            <h2 className="text-lg font-bold mb-6 text-[#26a69a] ">Terms & Conditions</h2>
            <ul className="list-decimal space-y-3 pl-5 text-sm text-justify">
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
      <div className="flex-grow flex flex-col  pb-8 border">
        <div className="overflow-x-auto">
          <TransactionDetails list={sampleData} />
        </div>
      </div>
    </div>
  );
};

export default WithDrawal;
