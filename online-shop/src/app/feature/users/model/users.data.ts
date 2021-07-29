export enum Roles {
  USER = 'user',
  CUSTOMER = 'customer',
  ADMIN = 'admin',
}

export interface UserData {
  username: string;
  fullName: string;
  roles: Roles[];
}

export interface ShortUser {
  username: string;
  fullName: string;
}
