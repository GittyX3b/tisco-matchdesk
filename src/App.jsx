import { HashRouter, Route, Routes } from 'react-router-dom';

import { MainLayout } from '@layouts';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<MainLayout />}></Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
