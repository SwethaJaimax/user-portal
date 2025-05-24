const TopCards = () => {
  const cards = [
    { label: "Total Coins", value: 24, color: "bg-blue-500" },
    { label: "Wallet Balance", value: 10, color: "bg-cyan-500" },
    { label: "Available Balance", value: 12, color: "bg-violet-500" },
    { label: "Referal Earnings", value: 2, color: "bg-sky-500" },
    { label: "Active members", value: 2, color: "bg-yellow-500" },
    { label: "WithDrawal Amount", value: 1000, color: "bg-green-500" },
    { label: "Super Bonus", value: 2, color: "bg-red-500" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 px-4 w-full">
      {cards.map((item, idx) => (
        <div
          key={idx}
          className={`p-6 rounded-xl shadow-sm ${item.color} text-white`}
        >
          <div className="text-lg p-2 font-semibold">{item.label}</div>
          <div className="text-3xl p-2 font-bold">{item.value}</div>
          <div className="text-sm p-1">Increased from last month</div>
        </div>
      ))}
    </div>
  );
};

export default TopCards;
