import { use } from 'react';

import { TimeLineCtx } from '@context/TimeLineProvider';

export const useTimeLine = () => use(TimeLineCtx);
