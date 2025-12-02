import { use } from 'react';

import { TimeCtx } from '@context/TimeProvider';

export const useTime = () => use(TimeCtx);
