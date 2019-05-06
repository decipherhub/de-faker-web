import { observable, action, computed } from "mobx";
import { persist } from "mobx-persist";

export interface ILandingPageStore {
  amountIn: number;
  amountOut: number;
  numberOfTx: number;
}

export class LandingPageStore implements ILandingPageStore {
  @persist @observable public amountIn: number = 0;
  @persist @observable public amountOut: number = 0;
  @persist @observable public numberOfTx: number = 0;
}
