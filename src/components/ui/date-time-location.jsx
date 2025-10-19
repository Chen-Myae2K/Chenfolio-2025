"use client";
import React, { useState, useEffect } from "react";

const DateTimeLocation = () => {
  const [time, setTime] = useState(new Date());
  const [location, setLocation] = useState({
    city: "Yangon",
    country: "Myanmar",
  });

  // Update time every second
  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formattedDate = time.toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const formattedTime = time.toLocaleTimeString();

  return (
    <div className="flex max-md:flex-col max-md:gap-2 mx-auto w-[90%] absolute bottom-10 lg:bottom-1 justify-evenly text-white/90 lg:items-center text-lg font-manrope">
      <p>
        {location.city}/{location.country}
      </p>
      <p>Yangon (UTC +6:30) {formattedTime}</p>
      <p>{formattedDate}</p>
    </div>
  );
};

export default DateTimeLocation;
