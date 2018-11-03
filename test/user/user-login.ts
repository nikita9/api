import { expect } from 'chai';
import { Constants } from '@src/utils/constants';
import { User } from '@src/entities/user';
import { Guest } from '@src/services/guest';

describe('When I get the user profile', () => {
  let customer: User;
  const user = Constants.user;

  it('Then I got the user property', async () => {
    const guest = new Guest();
    customer = await guest.login(Constants.user);
  });

  it(`And I see that first_name is ${user.first_name}`, () => {
    expect(customer.first_name).to.be.equal(user.first_name);
  });

  it(`And I see that last_name is ${user.last_name}`, () => {
    expect(customer.last_name).to.be.equal(user.last_name);
  });

  it(`And I see that email is ${user.email}`, () => {
    expect(customer.email).to.be.equal(user.email);
  });

  it(`And I see that phone is ${user.phone}`, () => {
    expect(customer.phone).to.be.equal(user.phone);
  });

  it(`And I see that id is ${user.id}`, () => {
    expect(customer.id).to.be.equal(user.id);
  });

  it(`And I see that uid is ${user.uid}`, () => {
    expect(customer.uid).to.be.equal(user.uid);
  });
});
