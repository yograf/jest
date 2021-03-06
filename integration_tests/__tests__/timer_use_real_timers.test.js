/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */
'use strict';

const runJest = require('../runJest');

test('useRealTimers cancels "timers": "fake" for whole test file', () => {
  const result = runJest('timer_use_real_timers');
  expect(result.stdout).toMatch('API is not mocked with fake timers.');
  expect(result.status).toBe(0);
});
