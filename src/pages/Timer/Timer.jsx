import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import { motion } from "framer-motion";
import "./Timer.css";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [callback, setCallback] = useState();
  const [started, setStarted] = useState(false);

  function handleStartPause() {
    setStarted(!started);
    if (!started) {
      setCallback(tick());
    } else {
      clearInterval(callback);
    }
  }

  function handleStop() {
    setStarted(false);
    setCallback();
    clearInterval(callback);
    setSeconds(0);
    setMinutes(0);
    setHours(0);
  }

  function renderPauseButton() {
    if (started) {
      return <img src="../src/assets/pause.svg" alt="" />;
    } else {
      return <img src="../src/assets/play.svg" alt="" />;
    }
  }

  function renderTimer() {
    if (minutes < 10) {
      if (seconds < 10) {
        return (
          <p className="timer text-7xl pb-3">
            {hours}:0{minutes}:0{seconds}
          </p>
        );
      } else {
        return (
          <p className="timer text-7xl pb-3">
            {hours}:0{minutes}:{seconds}
          </p>
        );
      }
    } else {
      if (seconds < 10) {
        return (
          <p className="timer text-7xl pb-3">
            {hours}:{minutes}:0{seconds}
          </p>
        );
      } else {
        return (
          <p className="timer text-7xl pb-3">
            {hours}:{minutes}:{seconds}
          </p>
        );
      }
    }
  }

  useEffect(() => {
    if (seconds > 60) {
      setSeconds(0);
      setMinutes((minutes) => minutes + 1);
    }
    if (minutes > 60) {
      setMinutes(0);
      setHours((hours) => hours + 1);
    }
  }, [seconds, minutes, hours]);

  function tick() {
    return setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
  }

  return (
    <section className="timer min-h-full flex flex-col gap-52">
      <Header />
      <section
        className="timer-section  
      text-[#9B51E0] self-center"
      >
        {renderTimer()}
        <section className="buttons flex flex-row justify-evenly">
          <motion.button
            whileHover={{ scale: 1.2, backgroundColor: "#9B51E0" }}
            whileTap={{ scale: 1 }}
            className="timer-button bg-gray-800 rounded-full mr-3 p-4"
            onClick={() => {
              handleStartPause();
            }}
          >
            {renderPauseButton()}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.2, backgroundColor: "#9B51E0" }}
            whileTap={{ scale: 1 }}
            className="timer-button bg-gray-800 rounded-full mr-3 p-4"
            onClick={handleStop}
          >
            <img src="../src/assets/stop.svg" alt="" />
          </motion.button>
        </section>
      </section>
    </section>
  );
};

export default Timer;
