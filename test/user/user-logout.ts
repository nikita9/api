import { expect } from 'chai';
import { User } from '@src/entities/user';
import { Constants } from '@src/utils/constants';
import { Guest } from '@src/services/guest';

describe('When I login into the account', () => {
  let customer: User;

  it('Then I logged into the account', async () => {
    const guest = new Guest();
    customer = await guest.login(Constants.user);
  });

  it('Then I logout from the account', async () => {
    const logout = await customer.logout();
    expect(logout.status).to.be.equal(200);
  });
});
