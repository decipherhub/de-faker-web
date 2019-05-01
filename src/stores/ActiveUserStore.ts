import { observable, action } from "mobx";
import { persist } from "mobx-persist";
import { ActiveUser } from "../models/ActiveUser";

export interface IActiveUserStore {
  users: ActiveUser[];
}

export class ActiveUserStore implements IActiveUserStore {
  @persist @observable users: ActiveUser[] = [];

  @action.bound
  public push(activeUser: ActiveUser): void {
    this.users.push(activeUser);
  }
}
