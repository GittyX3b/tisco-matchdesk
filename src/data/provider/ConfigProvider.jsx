import { createContext, useState } from "react";

const ConfigCtx = createContext(null);

const ConfigProvider = ({ children }) => {
  const [config, setConfig] = useState({
    sanity: "config data - ok",
  });

  const setEins = (eins) => setConfig((c) => ({ ...c, eins }));

  const setDrei = (drei) =>
    setConfig((c) => ({
      ...c,
      zwei: { ...c.zwei, drei },
    }));

  return <ConfigCtx value={{ config, setEins, setDrei }}>{children}</ConfigCtx>;
};

export { ConfigCtx, ConfigProvider };
