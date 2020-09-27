// here do not extend mongoose Document, use just the properties you need
export interface UsersInterface {
  readonly username: string;
  readonly password: string;
}
