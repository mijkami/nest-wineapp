// here do not extend mongoose Document, use just the properties you need
export interface UsersUpdateInterface {
  readonly first_name: string;
  readonly last_name: string;
  readonly roles : string[];
  readonly last_seen_at: Date;
}
