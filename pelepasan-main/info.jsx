import { useState, useEffect } from "react";

const getTimeLeft = () => {
  const coundownTarget = new Date("3000-10-17T23:59:59");

  const total = coundownTarget - new Date();
  const tahun = Math.floor(total / (1000 * 60 * 60 * 24 * 365));
  const jam = Math.floor((total / (1000 * 60 * 60)) % 24);
  const menit = Math.floor((total / (1000 * 60)) % 60);
  const detik = Math.floor((total / 1000) % 60);

  return {
    tahun,
    jam,
    menit,
    detik,
  };
};

const Info = () => {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);