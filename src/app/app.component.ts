import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  showSecret = false;
  clicks = [];

  toggleSecret() {
    this.showSecret = !this.showSecret;
    this.clicks.push(this.clicks.length + 1);
  }
}
