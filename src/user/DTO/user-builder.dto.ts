import { User } from "../Entity/user.entity";

export class UserBuilder {
  private user: User;

  constructor() {
    this.user = new User();
  }

  setName(name: string): UserBuilder {
    this.user.name = name;
    return this;
  }

  build(): User {
    return this.user;
  }
}