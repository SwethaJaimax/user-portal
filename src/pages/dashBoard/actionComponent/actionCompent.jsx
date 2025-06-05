import { FaShareAlt, FaDownload } from "react-icons/fa";
import assets from "../../../assets/assets";
import { TextField, InputAdornment } from "@mui/material";

const ActionButtons = () => (
  <div className="rounded-lg shadow-md z-10 p-3 bg-[#084e54] w-full">
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">

      {/* Left: Profile Info */}
      <div className="flex gap-4 items-center">
        <img src={assets.welcomeDraw} alt="profile" className="w-14 h-14 object-cover" />
        <div>
          <h2 className="text-xl text-white font-semibold">KN</h2>
          <h1 className="text-2xl font-bold text-white">Welcome to Jaimax</h1>
        </div>
      </div>

      {/* Right: Action Buttons */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">

        {/* Referral Code */}
        <TextField
          label="Referral Code"
          value="JMXA4557jXXN"
          InputProps={{
            readOnly: true,
            endAdornment: (
              <InputAdornment position="end">
                <FaShareAlt style={{ cursor: 'pointer', color: 'white' }} />
              </InputAdornment>
            ),
          }}
          variant="outlined"
          size="small"
          sx={{
            input: { color: 'white' },
            label: { color: 'white' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#4caf50',
              },
              '&:hover fieldset': {
                borderColor: '#81c784',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#66bb6a',
              },
            },
          }}
        />

        <button className="bg-white flex items-center px-4 py-2 rounded-full text-sm font-medium shadow hover:bg-gray-100 transition">
          <FaDownload className="mr-2" /> Import Data
        </button>
      </div>
    </div>
  </div>
);

export default ActionButtons;
