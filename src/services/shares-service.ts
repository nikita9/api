import { JsonObject, ResponseGeneric } from '@src/utils/types';
import { ShareObject } from '@src/models/settings';
import { Get } from '@src/utils/requester/get';
import { Post } from '@src/utils/requester/post';

export class Shares {
  public async getShares(token: string, cookie: string, uid: number): Promise<ResponseGeneric<ShareObject>> {
    const get = new Get(`/user/${uid}/shares`);

    return await get
      .setHeaders({'x-csrf-token': token, 'cookie': cookie})
      .send<ShareObject>();
  }

  public async getSharesInfo(token: string, cookie: string, sid: number): Promise<ResponseGeneric<ShareObject>> {
    const get = new Get(`/shares/${sid}`);

    return await get
      .setHeaders({'x-csrf-token': token, 'cookie': cookie})
      .send<ShareObject>();
  }

  public async createShare(token: string, cookie: string, body: JsonObject): Promise<ResponseGeneric<any>> {
    const post = new Post(`/shares`);

    return await post
      .setBody(body)
      .setHeaders({'x-csrf-token': token, 'cookie': cookie})
      .send<any>();
  }
}
