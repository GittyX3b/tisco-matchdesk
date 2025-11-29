import { TimeCtx } from "@provider/TimeProvider";
import { use } from "react";

export const useTime = () => use(TimeCtx);
