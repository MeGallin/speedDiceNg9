import { Component, OnInit } from "@angular/core";
import * as moment from "moment";

@Component({
  selector: "app-counter",
  templateUrl: "./counter.component.html",
  styleUrls: ["./counter.component.css"]
})
export class CounterComponent implements OnInit {
  public timer;
  constructor() {}

  ngOnInit(): void {
    let now = moment();

    setInterval(() => {
      this.timer = moment(now).fromNow();
    }, 1000);
  }
}
