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

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
    setErrors({ ...errors, [name]: '' });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.applicantName) newErrors.applicantName = 'Name is required';
    if (!formData.dob) newErrors.dob = 'Date of birth is required';
    if (!formData.mobile) newErrors.mobile = 'Mobile number is required';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.aadharFront) newErrors.aadharFront = 'Aadhar front is required';
    if (!formData.aadharBack) newErrors.aadharBack = 'Aadhar back is required';
    if (!formData.upi) newErrors.upi = 'upi id is required';
    if (!formData.panFile) newErrors.panFile = 'PAN file is required';
    if (!formData.panNumber) newErrors.panNumber = 'PAN number is required';
    if (!formData.accountNumber) newErrors.accountNumber = 'Bank account number is required';
    if (!formData.bankName) newErrors.bankName = 'Bank name is required';
    if (!formData.ifsc) newErrors.ifsc = 'IFSC code is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log('Submitted Data:', formData);
  };

  const inputStyle =
    'w-full px-4 py-2.5 rounded-md border border-[gray]/40 bg-white text-black placeholder-[gray]/40 focus:outline-none focus:ring-2 focus:ring-[#4ecdc4] text-sm transition';

  const sectionStyle = 'space-y-5 p-5 rounded-xl';

  const labelStyle = 'block text-sm font-medium mb-1.5 text-[#26a69a]';

  const errorStyle = 'text-red-400 text-xs mt-1';

  const fileInputWrapper =
    'flex items-center h-10 rounded-md border border-white/20 overflow-hidden';

  return (
    <div className="text-white px-4 sm:px-6 lg:px-8 py-4 min-h-screen bg-[white] rounded-lg">
      <form
        onSubmit={handleSubmit}
        className="w-full rounded-xl grid grid-cols-1 md:grid-cols-3 gap-7"
      >
        {/* Header */}
        <div className="col-span-1 md:col-span-3 mb-7">
          <h2 className="text-2xl font-semibold mb-1 text-[#084e54]">
            KYC Information{' '}
            <span className="text-base font-normal text-[#000]">
              (Fill up information and verify your KYC)
            </span>
          </h2>
          <p className="text-sm mt-1 text-[#000]">
            KYC status: <span className="text-[#c5d82e] font-semibold">n/a</span>
          </p>
        </div>

        {/* Applicant Info */}
        <div className={sectionStyle}>
          <h3 className="font-semibold text-lg border-b border-[gray]/30 pb-3 mb-4 text-[#000]">Applicant Info</h3>

          <div>
            <label className={labelStyle} htmlFor="applicantName">
              Name of the Applicant *
            </label>
            <input
              id="applicantName"
              name="applicantName"
              value={formData.applicantName}
              onChange={handleInputChange}
              placeholder="Enter name"
              className={inputStyle}
            />
            {errors.applicantName && <p className={errorStyle}>{errors.applicantName}</p>}
          </div>

          <div>
            <label className={labelStyle} htmlFor="dob">
              Date of Birth *
            </label>
            <input
              id="dob"
              name="dob"
              type="date"
              value={formData.dob}
              onChange={handleInputChange}
              className={inputStyle}
              style={{color:"#6b728066"}}
            />
            {errors.dob && <p className={errorStyle}>{errors.dob}</p>}
          </div>

          <div>
            <label className={labelStyle} htmlFor="mobile">
              Mobile Number (As per Bank) *
            </label>
            <input
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
              placeholder="+91"
              className={inputStyle}
            />
            {errors.mobile && <p className={errorStyle}>{errors.mobile}</p>}
          </div>

          <div>
            <label className={labelStyle} htmlFor="address">
              Address *
            </label>
            <input
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Enter your address"
              className={inputStyle}
            />
            {errors.address && <p className={errorStyle}>{errors.address}</p>}
          </div>
        </div>

        {/* Applicant Proofs */}
        <div className={sectionStyle}>
          <h3 className="font-semibold text-lg border-b border-[gray]/30 pb-3 mb-4 text-[#000]">Applicant Proofs</h3>
          {[
            ['aadharFront', 'Aadhar Front'],
            ['aadharBack', 'Aadhar Back'],
            ['panFile', 'PAN File'],
          ].map(([field, label]) => (
            <div key={field} className="mb-5">
              <label className={labelStyle} htmlFor={field}>
                {label} *
              </label>
              <div className={fileInputWrapper}>
                <label
                  htmlFor={field}
                  className="bg-white border border-[gray]/40 placeholder-[gray]/40 text-[gray]/40 px-5 h-full flex items-center text-sm font-semibold cursor-pointer select-none min-w-[120px] justify-center"
                >
                  Choose file
                </label>
                <input
                  type="file"
                  id={field}
                  name={field}
                  onChange={handleInputChange}
                  className="hidden"
                />
                <div className="bg-[#26a69a] text-sm text-white px-3 h-full flex items-center w-full truncate select-text">
                  {formData[field]?.name || 'No file chosen'}
                </div>
              </div>
              {errors[field] && <p className={errorStyle}>{errors[field]}</p>}
            </div>
          ))}

          <div>
            <label className={labelStyle} htmlFor="panNumber">
              PAN Number *
            </label>
            <input
              id="panNumber"
              name="panNumber"
              value={formData.panNumber}
              onChange={handleInputChange}
              placeholder="Enter PAN number"
              className={inputStyle}
            />
            {errors.panNumber && <p className={errorStyle}>{errors.panNumber}</p>}
          </div>
        </div>

        {/* Bank Details */}
        <div className={sectionStyle}>
          <h3 className="font-semibold text-lg border-b border-[gray]/30 pb-3 mb-4 text-[#000]">Bank Details</h3>
          <div>
            <label className={labelStyle} htmlFor="upi">
              UPI Number
            </label>
            <input
              id="upi"
              name="upi"
              value={formData.upi}
              onChange={handleInputChange}
              placeholder="Enter UPI number"
              className={inputStyle}
            />
            {errors.applicantName && <p className={errorStyle}>{errors.upi}</p>}
          </div>

          <div>
            <label className={labelStyle} htmlFor="accountNumber">
              Bank Account Number *
            </label>
            <input
              id="accountNumber"
              name="accountNumber"
              value={formData.accountNumber}
              onChange={handleInputChange}
              placeholder="Enter bank account number"
              className={inputStyle}
            />
            {errors.accountNumber && <p className={errorStyle}>{errors.accountNumber}</p>}
          </div>

          <div>
            <label className={labelStyle} htmlFor="bankName">
              Bank Name *
            </label>
            <input
              id="bankName"
              name="bankName"
              value={formData.bankName}
              onChange={handleInputChange}
              placeholder="Enter bank name"
              className={inputStyle}
            />
            {errors.bankName && <p className={errorStyle}>{errors.bankName}</p>}
          </div>

          <div>
            <label className={labelStyle} htmlFor="ifsc">
              Bank IFSC Code *
            </label>
            <input
              id="ifsc"
              name="ifsc"
              value={formData.ifsc}
              onChange={handleInputChange}
              placeholder="Enter bank IFSC code"
              className={inputStyle}
            />
            {errors.ifsc && <p className={errorStyle}>{errors.ifsc}</p>}
          </div>

          <div className="flex justify-end pt-5">
            <button
              type="submit"
              className="bg-[#26a69a] text-white font-semibold text-sm px-14 py-3 rounded-full transition duration-300 hover:scale-105 hover:bg-[#1e857b]"
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
