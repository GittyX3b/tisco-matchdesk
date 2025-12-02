import { use } from 'react';

import { ConfigCtx } from '@context/ConfigProvider';

export const useConfig = () => use(ConfigCtx);
