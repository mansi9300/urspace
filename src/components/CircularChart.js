import React from "react";

const CircularChart = () => {
  return (
    <div className="relative w-64 h-64 mx-auto mt-8">
      <div className="absolute inset-0 rounded-full border-8 border-blue-300"></div>
      <div className="absolute inset-0 flex items-center justify-center text-center">
        <div>
          <h2 className="text-xl font-bold">Pre Event</h2>
          <p className="text-sm">Create event and onboard attendees to your event.</p>
        </div>
      </div>
    </div>
  );
};

export default CircularChart;
