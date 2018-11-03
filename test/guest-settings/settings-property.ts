import { expect } from 'chai';
import { Settings } from '@src/models/settings';
import { BasicTypes } from '@src/utils/basic-types';
import { checkPropertyType } from '@src/utils/check-property';
import { Guest } from '@src/services/guest';

describe('When I get the settings', () => {
  let settings: Settings;

  it('Then I got the settings property', async () => {
    const guest = new Guest();
    const response = await guest.getSettings();
    settings = response.body;

    expect(response.status).to.equal(200);
  });

  it('Then I see that settings has object type', () => {
    checkPropertyType(settings, BasicTypes.Object);
  });

  it('And I see that type property has string type', () => {
    const type = settings.type;
    checkPropertyType(type, BasicTypes.String);
  });

  it('And I see that data property has object type', () => {
    const data = settings.data;
    checkPropertyType(data, BasicTypes.Object);
  });
});
