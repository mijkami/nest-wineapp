
export interface UserProfileInterface {
  readonly username: string;
  readonly first_name: string;
  readonly last_name: string;
  readonly roles : string[];
  readonly created_at: Date;
  readonly last_seen_at: Date;
}
