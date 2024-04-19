'use client'

import { useEffect, useState } from "react";

const Stats = () => {

  type StatsType = {
    _id: string;
    query_param: string;
    count: number;
  };

  const [statsData, setstatsData] = useState<StatsType[]>([]);
  
  useEffect(() => {
  const getStats = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/get-all-stats`, {
        method: "GET",
      });
      const data = await res.json();
      setstatsData(data);
    }
    catch (error) {
      console.error("Error tracking clicks", error);
    }
  }
  getStats();
}, []); 

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Statistics</h1>
      <div className="w-full max-w-md">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border border-gray-300">Query Parameter</th>
              <th className="py-2 px-4 border border-gray-300">Count</th>
            </tr>
          </thead>
          <tbody>
            {statsData.map((item) => (
              <tr key={item._id}>
                <td className="py-2 px-4 border border-gray-300">{item.query_param}</td>
                <td className="py-2 px-4 border border-gray-300">{item.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Stats;
