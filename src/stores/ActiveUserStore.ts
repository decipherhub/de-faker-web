import { observable, action } from "mobx";
import { persist } from "mobx-persist";
import { ActiveUser } from "../models/ActiveUser";

export interface IActiveUserStore {
  activeUsers: ActiveUser[];
}

export class ActiveUserStore implements IActiveUserStore {
  @persist @observable public activeUsers: ActiveUser[] = [];

  @action.bound
  public push(activeUser: ActiveUser): void {
    this.activeUsers.push(activeUser);
  }
}
