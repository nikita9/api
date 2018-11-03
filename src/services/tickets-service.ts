import { ResponseGeneric } from '@src/utils/types';
import { ShareObject } from '@src/models/settings';
import { Get } from '@src/utils/requester/get';

export class Tickets {
  public async getTicketsInfo(token: string, cookie: string, tid: number): Promise<ResponseGeneric<ShareObject>> {
    const get = new Get(`/ticket/${tid}`);

    return await get
      .setHeaders({'x-csrf-token': token, 'cookie': cookie})
      .send<ShareObject>();
  }
}
