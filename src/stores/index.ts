import { ActivityStore } from "./ActivityStore";
import { RouterStore } from "mobx-react-router";
import { STORE_ACTIVITY, STORE_ROUTER } from "../constants";

export const stores = {
  [STORE_ACTIVITY]: new ActivityStore(),
  [STORE_ROUTER]: new RouterStore()
};
