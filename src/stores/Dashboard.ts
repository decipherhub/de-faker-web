import { observable, action } from "mobx";
import { persist } from "mobx-persist";
import { ActiveUser } from "../models/ActiveUser";

export interface IDashboardStore {
  amountIn: number;
  amountOut: number;
  numberOfTx: number;
}

export class DashboardStore implements IDashboardStore {
  @persist @observable amountIn: number = 0;
  @persist @observable amountOut: number = 0;
  @persist @observable numberOfTx: number = 0;
}
