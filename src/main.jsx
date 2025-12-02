import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from '@/App.jsx';
import { ConfigProvider, TimeLineProvider, TimeProvider } from '@context';

import '@/main.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ConfigProvider>
      <TimeProvider>
        <TimeLineProvider>
          <App />
        </TimeLineProvider>
      </TimeProvider>
    </ConfigProvider>
  </StrictMode>,
);
