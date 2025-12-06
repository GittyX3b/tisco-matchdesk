import { createContext, useState } from 'react';

const ConfigCtx = createContext(null);

const ConfigProvider = ({ children }) => {
  const [config, setConfig] = useState({
    sanity: 'config data - ok',
    settingsVisible: false,
    periodsPerMatch: 4,
    periodNow: 1,
    periodNames: ['', 'Spielzeit', 'Halbzeit', 'Drittel', 'Viertel'],
    minutesPerPeriod: 0.05,
    teamHomeName: '',
    teamHomeNumbers: [],
    teamAwayName: '',
    teamAwayNumbers: [],
  });

  const [gamePending, setGamePending] = useState(false);

  const toggleConfigModal = () => setConfig((p) => ({ ...p, settingsVisible: !p.settingsVisible }));

  // const setDrei = (drei) =>
  //   setConfig((c) => ({
  //     ...c,
  //     zwei: { ...c.zwei, drei },
  //   }));

  return (
    <ConfigCtx value={{ config, setConfig, toggleConfigModal, gamePending, setGamePending }}>
      {children}
    </ConfigCtx>
  );
};

export { ConfigCtx, ConfigProvider };
