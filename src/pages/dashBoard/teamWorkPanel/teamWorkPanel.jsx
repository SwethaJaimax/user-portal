import React from "react";

const TeamCollaboration = () => {
  const members = [
    {
      name: "Alexandra Deff",
      task: "GitHub Project Repository",
      status: "Completed",
      avatar: "https://i.pravatar.cc/100?img=1",
      bg: "bg-green-100",
      badge: "bg-green-100 text-green-700",
    },
    {
      name: "Edwin Adenike",
      task: "Integrate User Authentication System",
      status: "In Progress",
      avatar: "https://i.pravatar.cc/100?img=2",
      bg: "bg-lime-200",
      badge: "bg-yellow-100 text-yellow-700",
    },
    {
      name: "Isaac Oluwatemiloun",
      task: "Develop Search and Filter Functionality",
      status: "Pending",
      avatar: "https://i.pravatar.cc/100?img=3",
      bg: "bg-purple-200",
      badge: "bg-red-100 text-red-700",
    },
    {
      name: "David Oshodi",
      task: "Responsive Layout for Homepage",
      status: "In Progress",
      avatar: "https://i.pravatar.cc/100?img=4",
      bg: "bg-yellow-200",
      badge: "bg-yellow-100 text-yellow-700",
    },
    {
      name: "Maya Johnson",
      task: "API Integration",
      status: "Completed",
      avatar: "https://i.pravatar.cc/100?img=5",
      bg: "bg-blue-100",
      badge: "bg-green-100 text-green-700",
    },
    {
      name: "Liam Smith",
      task: "Write Unit Tests",
      status: "In Progress",
      avatar: "https://i.pravatar.cc/100?img=6",
      bg: "bg-pink-200",
      badge: "bg-yellow-100 text-yellow-700",
    },
    {
      name: "Sophia Martinez",
      task: "UI/UX Design",
      status: "Pending",
      avatar: "https://i.pravatar.cc/100?img=7",
      bg: "bg-indigo-200",
      badge: "bg-red-100 text-red-700",
    },
    {
      name: "James Lee",
      task: "Database Schema Design",
      status: "Completed",
      avatar: "https://i.pravatar.cc/100?img=8",
      bg: "bg-teal-200",
      badge: "bg-green-100 text-green-700",
    },
    {
      name: "Naveen Reddy",
      task: "Database Schema Design",
      status: "Completed",
      avatar: "https://i.pravatar.cc/100?img=8",
      bg: "bg-teal-200",
      badge: "bg-green-100 text-green-700",
    },
    {
      name: "Naveen Reddy",
      task: "Database Schema Design",
      status: "Completed",
      avatar: "https://i.pravatar.cc/100?img=8",
      bg: "bg-teal-200",
      badge: "bg-green-100 text-green-700",
    },
    {
      name: "Naveen Reddy",
      task: "Database Schema Design",
      status: "Completed",
      avatar: "https://i.pravatar.cc/100?img=8",
      bg: "bg-teal-200",
      badge: "bg-green-100 text-green-700",
    },
    {
      name: "Naveen Reddy",
      task: "Database Schema Design",
      status: "Completed",
      avatar: "https://i.pravatar.cc/100?img=8",
      bg: "bg-teal-200",
      badge: "bg-green-100 text-green-700",
    },
    {
      name: "Naveen Reddy",
      task: "Database Schema Design",
      status: "Completed",
      avatar: "https://i.pravatar.cc/100?img=8",
      bg: "bg-teal-200",
      badge: "bg-green-100 text-green-700",
    },
  ];

  return (
    <>
      <style>{`
        /* Hide scrollbar but keep scroll */
        .hide-scrollbar {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE and Edge */
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }
      `}</style>
      <div
       className="min-h-screen bg-white p-6 rounded-xl shadow-md md:col-span-2 mx-auto w-full max-w-7xl"
        style={{
          background: "linear-gradient(111deg, #096d6f, #40c9c6)",
        }}
      >
        <div className="flex justify-between items-center mb-6 flex-wrap gap-2">
          <div className="font-semibold text-xl text-white">Team Members</div>
          <button className="px-4 py-2 text-sm border border-white text-white rounded-full  whitespace-nowrap">
            + Add Member
          </button>
        </div>
        <ul className="space-y-6 max-h-[38rem] overflow-y-auto hide-scrollbar">



          {members.map((member, idx) => (
            <li
              key={idx}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0"
            >
              <div className="flex items-center space-x-4">
                <div
                  className={`w-12 h-12 rounded-full ${member.bg} flex items-center justify-center`}
                >
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-10 h-10 rounded-full"
                  />
                </div>
                <div>
                  <div className="text-base font-medium text-white">
                    {member.name}
                  </div>
                  <div className="text-sm text-white">
                    Working on <span className="text-white">{member.task}</span>
                  </div>
                </div>
              </div>
              <span
                className={`text-sm px-4 py-1.5 rounded-full ${member.badge} whitespace-nowrap`}
              >
                {member.status}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TeamCollaboration;
