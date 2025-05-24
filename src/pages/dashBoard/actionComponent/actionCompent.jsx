

import {

  FaPlus,
  FaDownload,
} from "react-icons/fa";



const ActionButtons = () => (
  <div className="rounded-lg shadow-md z-10 p-4 bg-white w-full max-w-full">
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-sm text-gray-500 max-w-md">
          Plan, prioritize, and accomplish your tasks with ease.
        </p>
      </div>
      <div className="space-x-2 flex flex-wrap gap-2">
        <button className="bg-green-700 text-white px-4 py-2 rounded-full flex items-center">
          <FaPlus className="inline mr-1" /> Add Project
        </button>
        <button className="bg-white border px-4 py-2 rounded-full flex items-center">
          <FaDownload className="inline mr-1" /> Import Data
        </button>
      </div>
    </div>
  </div>
);


export default ActionButtons;