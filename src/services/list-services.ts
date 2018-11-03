import { JsonObject, ResponseGeneric } from '@src/utils/types';
import { Post } from '@src/utils/requester/post';

export class ListServices {
  public async list(token: string, cookie: string, body: JsonObject): Promise<ResponseGeneric<JsonObject>> {
    const post = new Post(`/user/list`);

    return await post
      .setHeaders({'x-csrf-token': token, 'cookie': cookie})
      .setBody(body)
      .send<JsonObject>();
  }
}
