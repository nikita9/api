import { expect } from 'chai';
import { Type } from '@src/utils/property-type-names';
import { User } from '@src/entities/user';
import { Constants } from '@src/utils/constants';
import { checkPropertyType } from '@src/utils/check-property';
import { BasicTypes } from '@src/utils/basic-types';
import { Guest } from '@src/services/guest';

describe('When I check types', () => {
  let customer: User;

  it('Then I logged into the account', async () => {
    const guest = new Guest();
    customer = await guest.login(Constants.user);
  });

  it(`Then I check type of ${Type.Settings}`, async () => {
    const guest = new Guest();
    const { body: { type } } = await guest.getSettings();

    checkPropertyType(type, BasicTypes.String);
    expect(type).to.be.equal(Type.Settings);
  });

  it('Then I logout from the account', async () => {
    const response = await customer.logout();
    expect(response.status).to.be.equal(200);
  });
});
