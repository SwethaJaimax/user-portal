import React, { useState } from 'react';

const Kyc = () => {
  const [formData, setFormData] = useState({
    applicantName: '',
    dob: '',
    mobile: '',
    address: '',
    aadharFront: null,
    aadharBack: null,
    panFile: null,
    panNumber: '',
    upi: '',
    accountNumber: '',
    bankName: '',
    ifsc: '',
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Data:', formData);
  };

  const inputStyle =
    'w-full px-4 py-2 rounded-md border border-white/20 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#4ecdc4] text-sm transition';

  return (
    <div className="bg-[#084e54] text-white px-4 sm:px-6 lg:px-10 py-6 min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-[#084e54] w-full rounded-xl grid grid-cols-1 md:grid-cols-3 gap-8 p-6 md:p-10"
      >
        {/* Header */}
        <div className="col-span-1 md:col-span-3 flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3 sm:gap-0">
          <div>
            <h2 className="text-2xl font-bold mb-1">
              KYC Information{' '}
              <span className="text-base font-normal text-white/80">
                (Fill up information and verify your KYC)
              </span>
            </h2>
            <p className="text-sm mt-1">
              KYC status: <span className="text-red-400 font-semibold">n/a</span>
            </p>
          </div>
        </div>

        {/* Applicant Info */}
        <div className="space-y-4">
          <h3 className="font-semibold text-base mb-2 border-b border-white/30 pb-1">
            Applicant Info
          </h3>
          <div>
            <label className="text-xs text-white mb-1 block">Name of the Applicant *</label>
            <input
              name="applicantName"
              value={formData.applicantName}
              onChange={handleInputChange}
              placeholder="Enter name"
              className={inputStyle}
              required
            />
          </div>
          <div>
            <label className="text-xs text-white mb-1 block">Date of Birth *</label>
            <input
              name="dob"
              type="date"
              value={formData.dob}
              onChange={handleInputChange}
              className={inputStyle}
              required
            />
          </div>
          <div>
            <label className="text-xs text-white mb-1 block">Mobile Number (As per Bank) *</label>
            <input
              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
              placeholder="+91"
              className={inputStyle}
              required
            />
          </div>
          <div>
            <label className="text-xs text-white mb-1 block">Address *</label>
            <input
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Enter your address"
              className={inputStyle}
              required
            />
          </div>
        </div>

        {/* Applicant Proofs */}
        <div className="space-y-4">
          <h3 className="font-semibold text-base mb-2 border-b border-white/30 pb-1">
            Applicant Proofs
          </h3>
          {[
            ['aadharFront', 'Aadhar Front'],
            ['aadharBack', 'Aadhar Back'],
            ['panFile', 'PAN File'],
          ].map(([field, label]) => (
            <div key={field}>
              <label className="text-xs text-white mb-1 block">{label} *</label>
              <div className="flex items-center h-10 max-w-full">
                <label className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-4 h-full flex items-center rounded-l text-sm font-semibold transition cursor-pointer min-w-[110px] justify-center">
                  Choose file
                  <input
                    type="file"
                    name={field}
                    onChange={handleInputChange}
                    className="hidden"
                    required
                  />
                </label>
                <div className="bg-[#063c41] border border-white/20 text-sm text-white px-3 h-full flex items-center rounded-r w-full truncate">
                  {formData[field]?.name || 'No file chosen'}
                </div>
              </div>
            </div>
          ))}
          <div>
            <label className="text-xs text-white mb-1 block">PAN Number *</label>
            <input
              name="panNumber"
              value={formData.panNumber}
              onChange={handleInputChange}
              placeholder="Enter PAN number"
              className={inputStyle}
              required
            />
          </div>
        </div>

        {/* Bank Details */}
        <div className="space-y-4">
          <h3 className="font-semibold text-base mb-2 border-b border-white/30 pb-1">Bank Details</h3>
          <div>
            <label className="text-xs text-white mb-1 block">UPI Number</label>
            <input
              name="upi"
              value={formData.upi}
              onChange={handleInputChange}
              placeholder="Enter UPI number"
              className={inputStyle}
            />
          </div>
          <div>
            <label className="text-xs text-white mb-1 block">Bank Account Number *</label>
            <input
              name="accountNumber"
              value={formData.accountNumber}
              onChange={handleInputChange}
              placeholder="Enter bank account number"
              className={inputStyle}
              required
            />
          </div>
          <div>
            <label className="text-xs text-white mb-1 block">Bank Name *</label>
            <input
              name="bankName"
              value={formData.bankName}
              onChange={handleInputChange}
              placeholder="Enter bank name"
              className={inputStyle}
              required
            />
          </div>
          <div>
            <label className="text-xs text-white mb-1 block">Bank IFSC Code *</label>
            <input
              name="ifsc"
              value={formData.ifsc}
              onChange={handleInputChange}
              placeholder="Enter bank IFSC code"
              className={inputStyle}
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="mt-4 bg-gradient-to-r from-[#094e54] to-[#4ecdc4] text-white text-sm font-semibold px-6 py-2 rounded-full transition duration-300 hover:scale-105"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Kyc;
