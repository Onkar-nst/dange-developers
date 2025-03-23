import React from "react";
import CountUp from "react-countup";

const statsData = [
  { number: 8, suffix: "+", label: "Landmark Projects" },
  { number: 973, suffix: "+", label: "Happy Families" },
  { number: 18, suffix: "+", label: "Years Of Building Trust" },
  { number: 740520, suffix: "+", label: "Sq. Ft. Under Planning" },
  { number: 609840, suffix: "+", label: "Sq. Ft. Under Development" },
  { number: 1524600, suffix: "+", label: "Sq. Ft. sold" },
];

export default function Home() {
  return (
    <div className="flex items-center justify-center bg-white
    -50 py-12 px-4 border-t border-b border-black-200">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 text-center">
        {statsData.map((item, index) => (
          <div key={index}>
            <h2 className="text-orange-600 text-5xl ">
              <CountUp
                start={0}
                end={item.number}
                duration={5.5}
                decimals={item.number % 1 !== 0 ? 2 : 0}
              />
              {item.suffix}
            </h2>
            <p className="text-gray-700 mt-2 text-lg">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
