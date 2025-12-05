import { createContext, useState } from 'react';

const ConfigCtx = createContext(null);

const ConfigProvider = ({ children }) => {
  const [config, setConfig] = useState({
    sanity: 'config data - ok',
    settingsVisible: false,
    periodsPerMatch: 4,
    minutesPerPeriod: 15,
  });

  const toggleConfigModal = () => setConfig((p) => ({ ...p, settingsVisible: !p.settingsVisible }));

  // const setDrei = (drei) =>
  //   setConfig((c) => ({
  //     ...c,
  //     zwei: { ...c.zwei, drei },
  //   }));

  return <ConfigCtx value={{ config, setConfig, toggleConfigModal }}>{children}</ConfigCtx>;
};

export { ConfigCtx, ConfigProvider };
