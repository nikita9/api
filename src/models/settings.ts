export interface Settings {
  readonly type: string;
  readonly data: SettingsData;
}

export interface UserObject {
  readonly type: string;
  readonly data: UserM;
}

export interface ShareObject {
  readonly type: string;
  readonly data: Array<Share>;
  readonly info: Info;
}

export interface SettingsData {
  readonly user: UserM;
}

export interface UserM {
  readonly token: string;
  readonly sessid: string;
  readonly session_name: string;
  readonly uid: number;
  readonly name: string;
  readonly timezone: string;
  readonly language: string;
  readonly status: number;
  readonly created: number;
  readonly access: number;
  readonly login: number;
  readonly email: string;
  readonly first_name: string;
  readonly last_name: string;
  readonly id: number;
  readonly is_subscriptions_available: boolean;
  readonly phone: string;
  readonly fb_user: string;
  readonly play_social_game: number;
  readonly free_ticket_invite_sent: number;
  readonly free_ticket_get: number;
  readonly viral_campaign_id: number;
  readonly viral_campaign_status: number;
  readonly balance: number;
}

export interface Share {
  readonly sid: string;
  readonly uid: string;
  readonly type: string;
  readonly shares: string;
}

export interface Ticket {
  readonly tid: number;
  readonly type: string;
  readonly subtype: string;
}

export interface Info {
  readonly total: number;
  readonly page: number;
  readonly per_page: number;
}
