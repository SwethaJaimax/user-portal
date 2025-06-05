
const TimeTracker = () => (
  <div className="bg-green-900 p-4 rounded-xl shadow-sm w-full    h-130 max-w-md mx-auto md:mx-0"

    style={{
      background: "linear-gradient(111deg, #096d6f, #40c9c6)"
    }}>
    <div className="font-semibold mb-2 text-center md:text-left">Time Tracker</div>
    <div className=" text-white p-4 rounded-xl text-center">
      <div className="text-3xl font-bold">01:24:08</div>
      <div className="flex justify-center mt-2">
        <button className="bg-white text-green-700 px-3 py-1 rounded-full text-sm">Pause</button>
      </div>
    </div>
  </div>
);


export default TimeTracker;