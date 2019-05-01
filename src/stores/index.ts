import { ActivityStore } from "./ActivityStore";
import { RouterStore } from "mobx-react-router";
import {
  STORE_ACTIVITY,
  STORE_ROUTER,
  STORE_ACTIVE_USER,
  STORE_DASHBOARD
} from "../constants";
import { ActiveUserStore } from "./ActiveUserStore";
import { DashboardStore } from "./Dashboard";

export const stores = {
  [STORE_DASHBOARD]: new DashboardStore(),
  [STORE_ACTIVITY]: new ActivityStore(),
  [STORE_ACTIVE_USER]: new ActiveUserStore(),
  [STORE_ROUTER]: new RouterStore()
};
