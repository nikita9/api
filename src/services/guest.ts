import { User } from '@src/entities/user';
import { Settings, UserObject } from '@src/models/settings';
import { ResponseGeneric, UserPayload } from '@src/utils/types';
import { Post } from '@src/utils/requester/post';
import { Get } from '@src/utils/requester/get';

export class Guest {
  public async login({ email, password }: UserPayload): Promise<User> {
    const post = new Post('/user/login');
    const body = { ['email']: email, ['password']: password};
    const { body: { data } } = await post
      .setBody(body)
      .send<UserObject>();

    return new User(data);
  }

  public async restorePassword({ phone, id }: UserPayload): Promise<User> {
    const post = new Post('/user/password');
    const body = { ['phone']: phone, ['id']: id};
    const { body: { data } } = await post
      .setBody(body)
      .send<UserObject>();

    return new User(data);
  }

  public async getSettings(): Promise<ResponseGeneric<Settings>> {
    const get = new Get('/settings');
    return await get.send<Settings>();
  }

}
