import './ActiveTask.css';
import { motion } from 'framer-motion';
import { redirect, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ActiveTask = () => {
  const [isNavigate, setIsNavigate] = useState(false);
  const navigate = useNavigate()

  function handleNavigate() {
    setIsNavigate(true);
  }

  useEffect(() => {
    if(isNavigate) {
      navigate("/timer");
    }
  }, [isNavigate]);

  return (
    <motion.div
     whileHover={{ scale: 1.05, backgroundColor: '#7823c7' }}
     whileTap={{ scale: 1.03 }}
     className="active-task w-full text-white rounded-md p-5 box-border hover:cursor-pointer"
     onClick={handleNavigate}>
      <div className='flex flex-row justify-between'>
        <p className='text-4xl'>00:32:10</p>
        <p className='border border-red-600 text-red-500 rounded-md px-2 h-fit'>tag</p>
      </div>
      <div className='mt-4 flex flex-row gap-2'>
        <img src="src/assets/logo.svg" alt="" />
        <p>Project Title</p>
      </div>
    </motion.div>
  );
}

export default ActiveTask;