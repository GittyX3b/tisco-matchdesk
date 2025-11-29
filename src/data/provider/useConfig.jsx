import { ConfigCtx } from "@provider/ConfigProvider";
import { use } from "react";

export const useConfig = () => use(ConfigCtx);
