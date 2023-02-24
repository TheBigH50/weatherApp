import { useState, useEffect } from "react";

export default function Clock() {
  const [date, setDate] = useState(new Date());

  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  return (
    <span className="flex ml-6 font-medium text-base">{`${
      date.getHours() > 12 ? date.getHours() - 12 : date.getHours()
    }:${date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()} ${
      date.getHours() > 12 ? "PM" : "AM"
    }`}</span>
  );
}
