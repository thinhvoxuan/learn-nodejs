jest.mock('../src/request');

import * as user from '../src/user';
// The promise that is being tested should be returned.
it('works with promises', () => {
  return user.getUserName(5)
    .then(name => expect(name).toEqual('Paul'));
});