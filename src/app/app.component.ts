import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  display = false;
  onPress() {
    //this.display = true;

    //To toggle the component
    this.display = !this.display;
  }
}
