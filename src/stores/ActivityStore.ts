import { observable, action } from "mobx";
import { persist } from "mobx-persist";
import { Activity } from "../models/Activity";

export interface IActivityStore {
  activities: Activity[];
}

export class ActivityStore implements IActivityStore {
  @persist @observable activities: Activity[] = [];

  @action.bound
  public push(activity: Activity): void {
    this.activities.push(activity);
  }
}
