// import React from 'react';
// import TeamCollaboration from '../dashBoard/teamWorkPanel/teamWorkPanel';

// const MyTotalTeam = () => {
//   const infoBoxes = [
//     {
//       title: "Total Active Members",
//       value: 24,
//       description: "Total active team members",
//       image: 'https://jaimax.com/assets/members-0b1ede72.svg',
//       shapes: ['circle', 'triangle'],
//     },
//     {
//       title: "Foundation",
//       value: "15%",
//       description: "Increase compared to last month",
//       image: 'https://jaimax.com/assets/referral-97995a8e.svg',
//       shapes: ['square', 'diamond'],
//     },
//     {
//       title: "Pending Requests",
//       value: 4,
//       description: "Awaiting your action",
//       image: 'https://jaimax.com/images/withDraw.svg',
//       shapes: ['pentagon', 'ellipse'],
//     },
//   ];

//   // Darker shapes base styles
//   const shapeBaseStyles = {
//     position: 'absolute',
//     backgroundColor: '#111111', // dark color for shapes
//     opacity: 0.3,               // slightly more visible
//     pointerEvents: 'none',
//     transition: 'opacity 0.3s ease, transform 3s ease-in-out',
//     zIndex: 0,
//     animationIterationCount: 'infinite',
//     animationDirection: 'alternate',
//     willChange: 'transform',
//   };

//   const shapeStyles = {
//     circle: {
//       width: '6rem',
//       height: '6rem',
//       borderRadius: '50%',
//       animationName: 'floatUpDown',
//       animationDuration: '6s',
//     },
//     triangle: {
//       width: 0,
//       height: 0,
//       borderLeft: '3rem solid transparent',
//       borderRight: '3rem solid transparent',
//       borderBottom: '5rem solid #111111',  // dark triangle color
//       animationName: 'floatLeftRight',
//       animationDuration: '5s',
//     },
//     square: {
//       width: '6rem',
//       height: '6rem',
//       animationName: 'floatUpDown',
//       animationDuration: '7s',
//     },
//     pentagon: {
//       width: '6rem',
//       height: '6rem',
//       clipPath: 'polygon(50% 0%, 95% 35%, 77% 90%, 23% 90%, 5% 35%)',
//       animationName: 'floatLeftRight',
//       animationDuration: '6.5s',
//     },
//     diamond: {
//       width: '5rem',
//       height: '5rem',
//       transform: 'rotate(45deg)',
//       animationName: 'floatUpDown',
//       animationDuration: '5.5s',
//     },
//     ellipse: {
//       width: '7rem',
//       height: '4rem',
//       borderRadius: '50% / 100%',
//       animationName: 'floatLeftRight',
//       animationDuration: '6s',
//     },
//   };

//   const shapePositions = [
//     { top: '-1.5rem', right: '-1.5rem' },
//     { bottom: '-1.5rem', left: '-1.5rem' },
//   ];

//   return (
//     <>
//       <style>
//         {`
//           @keyframes floatUpDown {
//             0% { transform: translateY(0); }
//             100% { transform: translateY(10px); }
//           }
//           @keyframes floatLeftRight {
//             0% { transform: translateX(0); }
//             100% { transform: translateX(10px); }
//           }
//         `}
//       </style>

//       <div className="w-full min-h-screen bg-[#084e54] space-y-6 px-4 py-6">
//         {/* Info boxes grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
//           {infoBoxes.map((box, idx) => (
//             <div
//               key={idx}
//               className="group cursor-pointer relative p-6 rounded-xl shadow-lg text-[#084e54] overflow-hidden flex items-center justify-between bg-white transition duration-300 ease-in-out
//                 hover:bg-white hover:shadow-2xl hover:scale-[1.03]"
//             >
//               {/* Background floating shapes */}
//               {box.shapes.map((shape, i) => (
//                 <div
//                   key={i}
//                   style={{
//                     ...shapeBaseStyles,
//                     ...shapeStyles[shape],
//                     ...shapePositions[i],
//                   }}
//                   className="group-hover:opacity-100 opacity-30"
//                 />
//               ))}

//               {/* Left side text */}
//               <div className="z-10">
//                 <div className="text-lg font-semibold mb-1 group-hover:text-[#043739]">{box.title}</div>
//                 <div className="text-3xl font-bold mb-1 group-hover:text-[#043739]">{box.value}</div>
//                 <div className="text-sm text-[#1d4d4f] group-hover:text-[#0c2e2f]">{box.description}</div>
//               </div>

//               {/* Right side icon */}
//               <div
//                 className="absolute pb-4 right-4 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-no-repeat bg-contain opacity-80 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 z-10"
//                 style={{ backgroundImage: `url(${box.image})` }}
//               />
//             </div>
//           ))}
//         </div>

//         {/* Team collaboration panel */}
//         <div className="mt-6">
//           <TeamCollaboration />
//         </div>
//       </div>
//     </>
//   );
// };

// export default MyTotalTeam;


import React from 'react';
import TeamCollaboration from '../dashBoard/teamWorkPanel/teamWorkPanel';

const MyTotalTeam = () => {
  const infoBoxes = [
    {
      title: "Total Active Members",
      value: 24,
      description: "Total active team members",
      image: 'https://jaimax.com/assets/members-0b1ede72.svg',
      shapes: ['circle', 'triangle'],
      iconBg: 'bg-gradient-to-tr from-[#0a6e74] to-[#4ecdc4]',  // tealish
    },
    {
      title: "Foundation",
      value: "15%",
      description: "Increase compared to last month",
      image: 'https://jaimax.com/assets/referral-97995a8e.svg',
      shapes: ['square', 'diamond'],
      iconBg: 'bg-gradient-to-tr from-[#0a6e74] to-[#4ecdc4]', // purpleish
    },
    {
      title: "Pending Requests",
      value: 4,
      description: "Awaiting your action",
      image: 'https://jaimax.com/images/withDraw.svg',
      shapes: ['pentagon', 'ellipse'],
      iconBg: 'bg-gradient-to-tr from-[#0a6e74] to-[#4ecdc4]', // reddish
    },
  ];

  // Darker shapes base styles
  const shapeBaseStyles = {
    position: 'absolute',
    backgroundColor: '#111111', // dark color for shapes
    opacity: 0.3,               // slightly more visible
    pointerEvents: 'none',
    transition: 'opacity 0.3s ease, transform 3s ease-in-out',
    zIndex: 0,
    animationIterationCount: 'infinite',
    animationDirection: 'alternate',
    willChange: 'transform',
  };

  const shapeStyles = {
    circle: {
      width: '6rem',
      height: '6rem',
      borderRadius: '50%',
      animationName: 'floatUpDown',
      animationDuration: '6s',
    },
    triangle: {
      width: 0,
      height: 0,
      borderLeft: '3rem solid transparent',
      borderRight: '3rem solid transparent',
      borderBottom: '5rem solid #111111',  // dark triangle color
      animationName: 'floatLeftRight',
      animationDuration: '5s',
    },
    square: {
      width: '6rem',
      height: '6rem',
      animationName: 'floatUpDown',
      animationDuration: '7s',
    },
    pentagon: {
      width: '6rem',
      height: '6rem',
      clipPath: 'polygon(50% 0%, 95% 35%, 77% 90%, 23% 90%, 5% 35%)',
      animationName: 'floatLeftRight',
      animationDuration: '6.5s',
    },
    diamond: {
      width: '5rem',
      height: '5rem',
      transform: 'rotate(45deg)',
      animationName: 'floatUpDown',
      animationDuration: '5.5s',
    },
    ellipse: {
      width: '7rem',
      height: '4rem',
      borderRadius: '50% / 100%',
      animationName: 'floatLeftRight',
      animationDuration: '6s',
    },
  };

  const shapePositions = [
    { top: '-1.5rem', right: '-1.5rem' },
    { bottom: '-1.5rem', left: '-1.5rem' },
  ];

  return (
    <>
      <style>
        {`
          @keyframes floatUpDown {
            0% { transform: translateY(0); }
            100% { transform: translateY(10px); }
          }
          @keyframes floatLeftRight {
            0% { transform: translateX(0); }
            100% { transform: translateX(10px); }
          }
        `}
      </style>

      <div className="w-full min-h-screen bg-[#084e54] space-y-6 px-4 py-6">
        {/* Info boxes grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {infoBoxes.map((box, idx) => (
            <div
              key={idx}
              className="group cursor-pointer relative p-6 rounded-xl shadow-lg text-[#084e54] overflow-hidden flex items-center justify-between bg-white transition duration-300 ease-in-out
                hover:bg-white hover:shadow-2xl hover:scale-[1.03]"
            >
              {/* Background floating shapes */}
              {box.shapes.map((shape, i) => (
                <div
                  key={i}
                  style={{
                    ...shapeBaseStyles,
                    ...shapeStyles[shape],
                    ...shapePositions[i],
                  }}
                  className="group-hover:opacity-100 opacity-30"
                />
              ))}

              {/* Left side text */}
              <div className="z-10">
                <div className="text-lg font-semibold mb-1 group-hover:text-[#043739]">{box.title}</div>
                <div className="text-3xl font-bold mb-1 group-hover:text-[#043739]">{box.value}</div>
                <div className="text-sm text-[#1d4d4f] group-hover:text-[#0c2e2f]">{box.description}</div>
              </div>

              {/* Right side icon with colored background */}
              <div
                className={`absolute right-4 top-1/2 transform -translate-y-1/2 w-16 h-16 rounded-full flex items-center justify-center opacity-80 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 z-10 ${box.iconBg}`}
              >
                <div
                  className="w-10 h-10 bg-no-repeat opacity-70 bg-contain bg-center"
                  style={{ backgroundImage: `url(${box.image})` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Team collaboration panel */}
        <div className="mt-6">
          <TeamCollaboration />
        </div>
      </div>
    </>
  );
};

export default MyTotalTeam;
