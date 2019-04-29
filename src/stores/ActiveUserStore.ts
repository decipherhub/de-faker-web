import { observable, action } from "mobx";
import { persist } from "mobx-persist";
import { Activity } from "../models/Activity";

export interface IActiveUserStore {
  activities: Activity[];
}

export class ActiveUserStore implements IActiveUserStore {
  @persist @observable activities: Activity[] = [];

  @action.bound
  public push(activity: Activity): void {
    this.activities.push(activity);
  }
}
