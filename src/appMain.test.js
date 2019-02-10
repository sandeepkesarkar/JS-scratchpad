import { expect } from 'chai';
import { describe, it } from 'mocha';

import { greetings } from './appMain';

describe('appMain', function () {
  describe('greetings', function () {
    it('Returns a string', () => {
      let result = greetings();
      expect(result).to.be.a('string');
    });
  });
});
