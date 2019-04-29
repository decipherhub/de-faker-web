import { observable, action } from "mobx";
import { persist } from "mobx-persist";

export interface IActivityStore {
  activities: string[];
}

export class ActivityStore implements IActivityStore {
  @persist @observable activities: string[] = [];

  @action.bound
  public push(activity: string): void {
    this.activities.push(activity);
  }
}
