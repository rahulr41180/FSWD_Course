import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  data = "rR Rathor";
  getData() {
    console.log("Get Data Function Calling.....");

    return "Get Data Function Calling....."

  }
}
