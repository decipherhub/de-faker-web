import { observable } from "mobx";

export class Activity {
  @observable public contractAddress: string;
  @observable public txHash: string;
  @observable public from: string;
  @observable public to: string;
  @observable public amount: number;

  constructor(
    contractAddress: string,
    txHash: string,
    from: string,
    to: string,
    amount: number
  ) {
    this.contractAddress = contractAddress;
    this.txHash = txHash;
    this.from = from;
    this.to = to;
    this.amount = amount;
  }
}
