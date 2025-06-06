const TimeTracker = () => (
  <div
    className="p-4 rounded-xl shadow-sm w-full h-130 max-w-md mx-auto md:mx-0 mb-2 "
    style={{
      background: `
  linear-gradient(45deg, rgba(255, 255, 255, 0.8) 25%, transparent 25%),
  linear-gradient(-45deg, rgba(242, 242, 242, 0.8) 25%, transparent 25%),
  linear-gradient(to bottom, #ffffff, #f2f2f2)
`,
backgroundBlendMode: "screen",
      paddingTop: "30px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
      height: "100%",
    }}
  >
    <div className="font-semibold mb-2 text-center md:text-left text-[#084e54] text-xl">
      Time Tracker
    </div>
    <div className=" text-[#000] p-4 rounded-xl text-center">
      <div className="text-3xl font-bold">01:24:08</div>
      <div className="flex justify-center mt-2">
        <button className="bg-[#26a69a] text-[#fff] px-3 py-1 rounded-full text-sm">
          Pause
        </button>
      </div>
    </div>
  </div>
);

export default TimeTracker;
