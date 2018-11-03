import { expect } from 'chai';
import { User } from '@src/entities/user';
import { Constants } from '@src/utils/constants';
import { Guest } from '@src/services/guest';

describe('When I login into the account', () => {
  let customer: User;
  let balanceOriginal: number;

  it('Then I logged into the account', async () => {
    const guest = new Guest();
    customer = await guest.login(Constants.user);
  });

  it('When I got the user balance', async () => {
    balanceOriginal = customer.balance;
  });

  it('Then check the items', async () => {
    const list = await customer.list({
      data: {
        remember: true,
        list: 10 }
    });
    expect(list.status).to.be.equal(200);
  });

  it('Then I compare the user balance after the withdrawal process', async () => {
    const user = await customer.settings();
    expect(user.body.data.user.balance).to.be.equal(balanceOriginal-10);
  });

  it('Then I logout from the account', async () => {
    const logout = await customer.logout();
    expect(logout.status).to.be.equal(200);
  });
});
