import { observable } from "mobx";

export class ActiveUser {
  @observable public address: string;

  constructor(address: string) {
    this.address = address;
  }
}
