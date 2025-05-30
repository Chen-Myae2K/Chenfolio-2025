"use client";
import React, { useState, useEffect } from "react";

const DateTimeLocation = () => {
  const [time, setTime] = useState(new Date());
  const [location, setLocation] = useState({
    city: "Bukit Batok",
    country: "Singapore",
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
    <div className="flex mx-auto w-[90%] absolute bottom-1 justify-evenly text-white/90 items-center text-lg font-manrope">
      <p>
        {location.city}/{location.country}
      </p>
      <p>Singapore (UTC +8) {formattedTime}</p>
      <p>{formattedDate}</p>
    </div>
  );
};

export default DateTimeLocation;
