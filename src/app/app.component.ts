import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TemplateDrivenForm';
user: any;
  Submit(user:any)
{
  console.log(user.value);
  console.log(this.user);
}
}
