import { Requester } from '@src/utils/requester/requester';
import { HTTPMethods, ResponseGeneric } from '@src/utils/types';
import * as request from 'superagent';

export class Get extends Requester implements HTTPMethods {
  constructor(endpoint) {
    super(endpoint);
  }

  public async send<T>(): Promise<ResponseGeneric<T>> {
    return await request
      .get(this.getUrl())
      .set(this.getHeaders())
      .query(this.getQueries())
      .send(this.getBody())
      .timeout({
        response: 3000, // Wait 3 seconds for the server to start sending,
        deadline: 5000 // but allow 5 seconds for the file to finish loading.
      });
  }
}
