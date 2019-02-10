import { describe, it } from 'mocha';
import { assert } from 'chai';

import { logger } from './logHelper';

describe('logHelper', function() {
  it('create error log', () => {
    logger.error('This is a test error from logHelper.test.js');
    assert.ok(true);
  });

  it('create info log', () => {
    logger.info('This is a test INFO from logHelper.test.js');
    assert.ok(true);
  });

  it('create debug log', () => {
    logger.info('This is a test DEBUG from logHelper.test.js');
    assert.ok(true);
  });
});
