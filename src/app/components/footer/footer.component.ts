import { Component, OnInit } from "@angular/core";
import { Observable, Observer } from "rxjs";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"]
})
export class FooterComponent implements OnInit {
  public clock: Observable<any>;

  constructor() {}

  ngOnInit(): void {
    this.clock = new Observable<string>((observer: Observer<string>) => {
      setInterval(() => observer.next(new Date().toString()), 1000);
    });
  }
}
