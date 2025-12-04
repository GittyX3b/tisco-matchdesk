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
        <div className='flex grow gap-4'>
          <div className='flex w-[65%] flex-col gap-4'>
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
