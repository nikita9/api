import { Settings, ShareObject, UserM, UserObject } from '../models/settings';
import { UserService } from '../services/user-services';
import { ListServices } from '../services/list-services';
import { JsonObject, ResponseGeneric } from '@src/utils/types';
import { Shares } from '@src/services/shares-service';

export class User {
  public readonly token: string;
  public readonly sessid: string;
  public readonly ['session_name']: string;
  public readonly uid: number;
  public readonly name: string;
  public readonly timezone: string;
  public readonly language: string;
  public readonly status: number;
  public readonly created: number;
  public readonly login: number;
  public readonly email: string;
  public readonly ['first_name']: string;
  public readonly ['last_name']: string;
  public readonly id: number;
  public readonly phone: string;
  public readonly balance: number;
  private readonly cookie: string;

  constructor(data: UserM) {
    this.token = data.token;
    this.sessid = data.sessid;
    this.session_name = data.session_name;
    this.uid = data.uid;
    this.name = data.name;
    this.timezone = data.timezone;
    this.language = data.language;
    this.status = data.status;
    this.created = data.created;
    this.login = data.login;
    this.email = data.email;
    this.first_name = data.first_name;
    this.last_name = data.last_name;
    this.id = data.id;
    this.phone = data.phone;
    this.balance = data.balance;
    this.cookie = `${data.session_name}=${data.sessid}`;
  }

  public async shares(): Promise<ResponseGeneric<ShareObject>> {
    const shares = new Shares();
    return await shares.getShares(this.token, this.cookie, this.uid);
  }

  public async logout(): Promise<ResponseGeneric<UserObject>> {
    const service = new UserService();
    return await service.logout(this.token, this.cookie);
  }

  public async list(body: JsonObject): Promise<ResponseGeneric<any>> {
    const service = new ListServices();
    return await service.list(this.token, this.cookie, body);
  }

  public async settings(): Promise<ResponseGeneric<Settings>> {
    const service = new UserService();
    return await service.settings(this.token, this.cookie);
  }
}
