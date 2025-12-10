import {
  ConfigModal,
  Header,
  PenaltyBoard,
  ScoreBoard,
  TimeLineBoard,
  TimerBoard,
} from '@components';

const MainLayout = () => {
  return (
    <div id='MainLayout' className='bg-tisco-light flex min-h-screen w-full flex-col items-center'>
      <Header />
      <main className='tisco-maxwidth mt-40 flex w-full flex-col gap-4'>
        <div className='flex grow flex-col gap-4 md:flex-row'>
          <div className='flex w-full flex-col gap-4 md:w-[65%]'>
            <ScoreBoard />
            <TimerBoard />
          </div>
          <PenaltyBoard />
        </div>

        <TimeLineBoard />
      </main>
      <ConfigModal />
    </div>
  );
};

export { MainLayout };
