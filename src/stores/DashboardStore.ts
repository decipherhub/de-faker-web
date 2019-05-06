import { observable, action, computed } from "mobx";
import { persist } from "mobx-persist";

export interface IDashboardStore {
  amountIn: number;
  amountOut: number;
  numberOfTx: number;
}

export class DashboardStore implements IDashboardStore {
  @persist @observable public amountIn: number = 0;
  @persist @observable public amountOut: number = 0;
  @persist @observable public numberOfTx: number = 0;
}
