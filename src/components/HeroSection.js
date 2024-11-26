import React from "react";

const HeroSection = () => {
  return (
    <section className="flex items-center justify-between px-16 py-12 bg-gray-50">
      {/* Left Side: Hero Content */}
      <div className="max-w-lg">
      <div className="text-white bg-green-500 uppercase font-semibold text-sm inline-block px-4 py-1 rounded-full shadow-md">
  All in One Event Management Software
</div>

        <h1 className="text-6xl font-extrabold leading-tight">
          A Better Way to <br />
          <span>Manage</span> <br />
          <span className="text-blue-600">Event</span>
        </h1>
        <p className="mt-6 text-gray-600 text-xl font-semibold">
          World's Most Advanced Event Management Software powered by AI
        </p>
        <div className="mt-8 flex">
          <input
            type="email"
            placeholder="Enter your work email"
            className="p-4 border border-gray-300 rounded-l-lg w-80 text-lg"
          />
          <button className="p-4 bg-blue-600 text-white rounded-r-lg text-lg">
            Get Started
          </button>
        </div>
      </div>

      {/* Right Side: Circular Chart */}
      <div className="relative w-80 h-80">
        {/* Circular Design */}
        <div className="absolute inset-0 rounded-full border-8 border-blue-300"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div>
            <h2 className="text-2xl font-bold">Pre Event</h2>
            <p className="text-sm">
              Create event and onboard attendees to your event.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
