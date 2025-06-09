import ActionButtons from "./actionComponent/actionCompent";
import TopCards from "./cards/cards";
import TeamCollaboration from "./teamWorkPanel/teamWorkPanel";
import TimeTracker from "./timeTracker/timeTracker";

const Dashboard = () => {
  return (
<div className="min-h-screen w-full p-2 sm:p-3 md:p-4 text-sm sm:text-base md:text-lg bg-white">

  {/* Action Buttons */}
  <div className="w-full mb-4">
    <ActionButtons />
  </div>

  {/* Top Cards */}
  <div className="w-full mb-4">
    <TopCards />
  </div>

  {/* TimeTracker and TeamCollaboration side-by-side on md+ */}
  <div className="flex flex-col md:flex-row gap-4 w-full">
    <div className="flex-1">
      <TimeTracker />
    </div>
    <div className="flex-1">
      <TeamCollaboration />
    </div>
  </div>
  
</div>



//     <div className="">
//       <div className="mb-4">
//       </div>

//       <div className="mb-4">
//       </div>

//      <div className="grid grid-cols-0 lg:grid-cols-5 gap-4 mb-6">
//   <div className="lg:col-span-1 flex justify-center lg:block">
//   </div>
//   <div className="lg:col-span-2">
//   </div>
// </div>
//     </div>
  );
};

export default Dashboard;
