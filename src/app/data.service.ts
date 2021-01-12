import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class DataService {
  private balanceSource = new BehaviorSubject(0);

  currentBalance = this.balanceSource.asObservable();

  constructor() {}

  changeBalance(balance: number) {
    this.balanceSource.next(balance);
  }
}
