import { JsonObject, ResponseGeneric } from '@src/utils/types';
import { Settings, UserObject } from '@src/models/settings';
import { Post } from '@src/utils/requester/post';
import { Get } from '@src/utils/requester/get';

export class UserService {
  public async logout(token: string, cookie: string): Promise<ResponseGeneric<UserObject>> {
    const post = new Post(`/user/logout`);
    return await post
      .setHeaders({'x-csrf-token': token, 'cookie': cookie})
      .send<UserObject>();
  }

  public async getSubscriptions(token: string, cookie: string, uid: number): Promise<ResponseGeneric<UserObject>> {
    const get = new Get(`/user/${uid}/subscriptions`);
    return await get
      .setHeaders({'x-csrf-token': token, 'cookie': cookie})
      .send<UserObject>();
  }

  public async updateData(token: string,
                          cookie: string,
                          uid: number,
                          body: JsonObject): Promise<ResponseGeneric<UserObject>> {
    const post = new Post(`/user/${uid}`);
    return await post
      .setBody(body)
      .setHeaders({'x-csrf-token': token, 'cookie': cookie})
      .send<UserObject>();
  }

  public async changePassword(token: string,
                              cookie: string,
                              oldPassword: string,
                              newPassword: string): Promise<ResponseGeneric<UserObject>> {
    const post = new Post(`/user/change-password`);
    const body = {['old_password']: oldPassword, ['new_password']: newPassword};
    return await post
      .setBody(body)
      .setHeaders({'x-csrf-token': token, 'cookie': cookie})
      .send<UserObject>();
  }

  public async settings(token: string, cookie: string): Promise<ResponseGeneric<Settings>> {
    const get = new Get('/settings');
    return await get
      .setHeaders({'x-csrf-token': token, 'cookie': cookie})
      .send<Settings>();
  }
}
