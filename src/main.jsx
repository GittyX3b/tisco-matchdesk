import App from "@/App.jsx";
import "@/main.css";
import { ConfigProvider, TimeLineProvider, TimeProvider } from "@provider";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(
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
