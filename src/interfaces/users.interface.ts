// here do not extend mongoose Document, use just the properties you need
export interface UsersInterface {
  readonly username: string;
  readonly password: string;
  readonly first_name: string;
  readonly last_name: string;
  readonly roles : string[];
  readonly created_at: Date;
  readonly last_seen_at: Date;
}
