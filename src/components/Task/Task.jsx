import { motion } from "framer-motion";
import "./Task.css";

const Task = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 1.01 }}
      className="task w-full text-white flex flex-row justify-between rounded-md p-5"
    >
      <img src={process.env.PUBLIC_URL + "/assets/Icon-Monitor.svg"} alt="" />
      <div className="task-info w-8/12">
        <h2 className="text-lg">UI Design</h2>
        <div className="task-tags text-sm flex flex-row gap-1">
          <p className="task-tag h-fit text-red-300 bg-red-800 p-1 rounded-md">
            Work
          </p>
          <p className="task-tag h-fit text-violet-300 bg-violet-800 p-1 rounded-md">
            My Project
          </p>
        </div>
      </div>
      <div className="continue-track flex flex-col gap-3">
        <p>00:32:10</p>
        <button className="self-end">
          <img src={process.env.PUBLIC_URL + "/assets/play.svg"} alt="" />
        </button>
      </div>
    </motion.div>
  );
};

export default Task;
