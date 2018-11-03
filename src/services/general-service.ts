import { ResponseGeneric } from '@src/utils/types';
import { ShareObject } from '@src/models/settings';
import { Get } from '@src/utils/requester/get';

export class General {
  public async getListOfPages(): Promise<ResponseGeneric<ShareObject>> {
    const get = new Get(`/node`);

    return await get
      .send<ShareObject>();
  }

  public async checkPhoneNumber(phoneNumber: number): Promise<ResponseGeneric<ShareObject>> {
    const get = new Get(`/phone/${phoneNumber}`);

    return await get
      .send<ShareObject>();
  }
}
