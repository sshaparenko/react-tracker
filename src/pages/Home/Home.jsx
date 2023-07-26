import ActiveTask from '../../components/ActiveTask/ActiveTask';
import Task from '../../components/Task/Task'

const Home = () => {
  return (
    <section className='pt-4 flex flex-col gap-2 text-white'>
      <ActiveTask />
      <p className='text-xl mt-2'>Today</p>
      <Task />
      <p className='text-xl mt-2'>Yestarday</p>
      <Task />
    </section>
  );
}

export default Home;