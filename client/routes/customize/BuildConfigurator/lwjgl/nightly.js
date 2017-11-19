// @flow
import { NATIVE_ALL } from '../constants';
import type { BuildOptions } from '../types';

export default (prev: BuildOptions): BuildOptions => ({
  ...prev,
  version: '3.1.4',
  alias: 'nightly',
  byId: {
    ...prev.byId,
  },
});
