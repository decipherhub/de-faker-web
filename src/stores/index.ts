import { ActivityStore } from "./ActivityStore";
import { RouterStore } from "mobx-react-router";
import { STORE_ACTIVITY, STORE_ROUTER, STORE_ACTIVE_USER } from "../constants";
import { ActiveUserStore } from "./ActiveUserStore";

export const stores = {
  [STORE_ACTIVITY]: new ActivityStore(),
  [STORE_ACTIVE_USER]: new ActiveUserStore(),
  [STORE_ROUTER]: new RouterStore()
};
