import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const CountdownTimer = ({ onComplete }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-02-21T00:00:00'); // 21 Şubat 2025 Cuma 00:00

    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(timer);
        onComplete();
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-100/95 to-white/90 backdrop-blur-sm"></div>
      <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-2xl text-center max-w-2xl mx-auto z-10 border border-gray-200">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 tracking-tight">Album Release Countdown</h2>
        <div className="grid grid-cols-4 gap-6">
          <TimeUnit value={timeLeft.days} label="Days" />
          <TimeUnit value={timeLeft.hours} label="Hours" />
          <TimeUnit value={timeLeft.minutes} label="Minutes" />
          <TimeUnit value={timeLeft.seconds} label="Seconds" />
        </div>
      </div>
    </div>
  );
};

const TimeUnit = ({ value, label }) => (
  <div className="text-center p-4 bg-gradient-to-b from-gray-50 to-white rounded-xl shadow-lg border border-gray-100">
    <div className="text-4xl font-bold text-gray-800 mb-1 font-mono">{value.toString().padStart(2, '0')}</div>
    <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">{label}</div>
  </div>
);

TimeUnit.propTypes = {
  value: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
};

CountdownTimer.propTypes = {
  onComplete: PropTypes.func.isRequired,
};

export default CountdownTimer; 