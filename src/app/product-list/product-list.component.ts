import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { transactions } from "../transactions";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  transactions = transactions; // []

  balanceValue: number = 0;

  errorMsg: string = "";

  constructor(private data: DataService) {
    this.calcBalance();
  }

  ngOnInit() {
    this.data.currentBalance.subscribe(
      balance => (this.balanceValue = balance)
    );
  }

  calcBalance() {
    let b = 0;
    this.transactions.forEach(trx => {
      trx.type === "buy" ? (b += trx.tokens) : (b -= trx.tokens);
    });
    this.data.changeBalance(b);
  }

  onClick(type, desc, tokens) {
    this.calcBalance();
    if (!desc.value) {
      this.errorMsg = "A description is required";
      return;
    }

    if (!tokens.value) {
      this.errorMsg = "Tokens value is required";
      return;
    }

    let tokenValue = parseInt(tokens.value);

    if (type === "sell" && this.balanceValue < tokenValue) {
      this.errorMsg = "You don't have that many tokens to spend!";
      return;
    }

    this.errorMsg = "";

    this.transactions.push({
      type: type,
      tokens: tokenValue,
      description: desc.value,
      at: new Date()
    });

    // Reset form
    desc.value = "";
    tokens.value = "";

    this.calcBalance();
  }
}
