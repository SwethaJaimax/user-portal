import ActionButtons from "./actionComponent/actionCompent";
import TopCards from "./cards/cards";
import DashboardHeader from "./dashboardHeader/dashboardHeader";
import TeamCollaboration from "./teamWorkPanel/teamWorkPanel";
import TimeTracker from "./timeTracker/timeTracker";
const Dashboard = () => {
  return (
    <div className="flex flex-col bg-gray-50 min-h-screen text-gray-800 max-w-8xl mx-auto w-full px-4 sm:px-2 lg:px-4">
      
      <div className="mb-4">
        <DashboardHeader />
      </div>
      
      <div className="mb-4">
        <ActionButtons />
      </div>
      
      <div className="mb-4">
        <TopCards />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <TeamCollaboration /> {/* Spans 2 cols on md+ */}
        <TimeTracker />       {/* Spans 1 col */}
      </div>

    </div>
  );
};

export default Dashboard;

