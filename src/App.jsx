import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { useConfig, useTime, useTimeLine } from '@context';
import { MainLayout } from '@layouts';

const App = () => {
  // Testing Provider
  const { config } = useConfig();
  const { time } = useTime();
  const { timeline } = useTimeLine();

  console.log(config.sanity, '/', time.sanity, '/', timeline.sanity);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainLayout />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
