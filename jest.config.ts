import type {Config} from '@jest/types';
// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  transform: {
  '^.+\\.tsx?$': 'ts-jest'
  }
  // moduleNameMapper: {
  //   "^\\$lib/(.*)": "<rootDir>/src/lib/$1",
  // },
};
export default config;