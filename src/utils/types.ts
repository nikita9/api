import { Response as SuperAgentResponse } from 'superagent';

export interface JsonObject {
  [parameter: string]: any;
}

export interface ResponseGeneric<T> extends SuperAgentResponse {
  body: T;
}

export interface HTTPMethods {
  send: <T>() => Promise<ResponseGeneric<T>>;
}

export interface UserPayload {
  readonly email: string;
  readonly password: string;
  readonly first_name: string;
  readonly last_name: string;
  readonly phone: string;
  readonly id: string;
  readonly uid: number;
  readonly language: string;
}
