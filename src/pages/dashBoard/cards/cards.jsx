// import React from 'react';

// const TopCards = () => {
//   const cards = [
//     {
//       label: "Total Coins",
//       value: 24,
//       image: 'https://jaimax.com/images/jIcon.svg',
//     },
//     {
//       label: "Wallet Balance",
//       value: 10,
//       image: 'https://jaimax.com/images/walletBal.svg',
//     },
//     {
//       label: "Available Balance",
//       value: 12,
//       image: 'https://jaimax.com/images/availableBal.svg',
//     },
//     {
//       label: "Referral Earnings",
//       value: 2,
//       image: 'https://jaimax.com/images/myReferral.svg',
//     },
//     {
//       label: "Active Members",
//       value: 2,
//       image: 'https://jaimax.com/images/activeMem.svg',
//     },
//     {
//       label: "Withdrawal Amount",
//       value: 1000,
//       image: 'http://jaimax.com/images/withDraw.svg',
//     },
//     {
//       label: "Super Bonus",
//       value: 2,
//       image: 'https://jaimax.com/images/superBonus.svg',
//     },
//   ];

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6 px-4 w-full">
//       {cards.map((item, idx) => (
//         <div
//   key={idx}
//   className="group cursor-pointer relative p-6 rounded-xl shadow-lg text-white overflow-hidden flex items-center justify-between"
//   style={{ background: 'linear-gradient(115deg, #094e54, #4ecdc4)' }}
// >

//           {/* Left side text content */}
//           <div className="z-10">
//             <div className="text-lg font-semibold mb-1">{item.label}</div>
//             <div className="text-3xl font-bold mb-1">{item.value}</div>
//             <div className="text-sm opacity-80">Increased from last month</div>
//           </div>

//           {/* Right-side background image */}
//           <div
//             className="absolute pb-4 right-4 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-no-repeat bg-contain opacity-50 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"
//             style={{ backgroundImage: `url(${item.image})` }}
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default TopCards;



// import React from 'react';

// const TopCards = () => {
//   const cards = [
//     { label: "Total Coins", value: 24, image: 'https://jaimax.com/images/jIcon.svg' },
//     { label: "Wallet Balance", value: 10, image: 'https://jaimax.com/images/walletBal.svg' },
//     { label: "Available Balance", value: 12, image: 'https://jaimax.com/images/availableBal.svg' },
//     { label: "Referral Earnings", value: 2, image: 'https://jaimax.com/images/myReferral.svg' },
//     { label: "Active Members", value: 2, image: 'https://jaimax.com/images/activeMem.svg' },
//     { label: "Withdrawal Amount", value: 1000, image: 'http://jaimax.com/images/withDraw.svg' },
//     { label: "Super Bonus", value: 2, image: 'https://jaimax.com/images/superBonus.svg' },
//   ];

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 py-8">
//       {cards.map((item, idx) => (
//         <div
//           key={idx}
//           className="relative flex items-center justify-between p-5 rounded-2xl shadow-xl bg-gradient-to-r from-black via-[#0f2027] to-[#2c5364] text-white"
//         >
//           {/* Left side - Text Content */}
//           <div>
//             <div className="text-orange-400 text-lg font-bold">{item.label}</div>
//             <div className="text-3xl font-extrabold mt-1 mb-1">{item.value}</div>
//             <div className="text-sm text-gray-300">Increased from last month</div>
//           </div>

//           {/* Right side - Circle Image */}
//           <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center overflow-hidden shadow-md">
//             <img src={item.image} alt={item.label} className="w-10 h-10 object-contain" />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default TopCards;
import React from 'react';

const TopCards = () => {
  const cards = [
    { label: "Total Coins", value: 24, image: 'https://jaimax.com/images/jIcon.svg', shapes: ['circle', 'triangle'] },
    { label: "Wallet Balance", value: 10, image: 'https://jaimax.com/images/walletBal.svg', shapes: ['square', 'diamond'] },
    { label: "Available Balance", value: 12, image: 'https://jaimax.com/images/availableBal.svg', shapes: ['pentagon', 'ellipse'] },
    { label: "Referral Earnings", value: 2, image: 'https://jaimax.com/images/myReferral.svg', shapes: ['hexagon', 'circle'] },
    { label: "Active Members", value: 2, image: 'https://jaimax.com/images/activeMem.svg', shapes: ['triangle', 'square'] },
    { label: "Withdrawal Amount", value: 1000, image: 'http://jaimax.com/images/withDraw.svg', shapes: ['diamond', 'pentagon'] },
    { label: "Super Bonus", value: 2, image: 'https://jaimax.com/images/superBonus.svg', shapes: ['ellipse', 'hexagon'] },
  ];

  const tealFilter = 'invert(26%) sepia(49%) saturate(5249%) hue-rotate(142deg) brightness(87%) contrast(87%)';

  const shapeBaseStyles = {
    position: 'absolute',
    backgroundColor: '#084e54',
    opacity: 0.15,
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
      borderBottom: '5rem solid #084e54',
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
    hexagon: {
      width: '6rem',
      height: '6rem',
      clipPath: 'polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)',
      animationName: 'floatUpDown',
      animationDuration: '6.5s',
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6 px-4 w-full bg-[#084e54]">
        {cards.map((item, idx) => (
          <div
            key={idx}
            className="group cursor-pointer relative p-6 rounded-xl shadow-lg text-[#084e54] overflow-hidden flex items-center justify-between bg-white transition duration-300 ease-in-out
              hover:bg-white hover:shadow-2xl hover:scale-[1.03]"
          >
            {item.shapes.map((shape, i) => (
              <div
                key={i}
                style={{
                  ...shapeBaseStyles,
                  ...shapeStyles[shape],
                  ...shapePositions[i],
                }}
                className="group-hover:opacity-100 opacity-15"
              />
            ))}

            <div className="z-10">
              <div className="text-[#084e54] text-lg font-semibold mb-1 group-hover:text-[#043739]">{item.label}</div>
              <div className="text-3xl font-bold mb-1 text-[#084e54] group-hover:text-[#043739]">{item.value}</div>
              <div className="text-sm text-[#1d4d4f] group-hover:text-[#0c2e2f]">Increased from last month</div>
            </div>

            <div
              className="absolute pb-4 right-4 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-no-repeat bg-contain opacity-80 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 z-10"
              style={{
                backgroundImage: `url(${item.image})`,
                filter: tealFilter,
              }}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default TopCards;
