import type { EnvOptions } from 'tnp/src';
import baseEnv from './env.angular-node-app.__';

const env: Partial<EnvOptions> = {
  ...baseEnv,
  build: {
    ...baseEnv.build,
    websql: true,
    prod: true,
  },
  website: {
    useDomain: false,
  },
};
export default env;
