import { Component } from '@angular/core';

@Component({
  selector: 'app-templete-form',
  templateUrl: './templete-form.component.html',
  styleUrls: ['./templete-form.component.css']
})
export class TempleteFormComponent {
  onSubmit(form: any) {
    console.log(form.value);
  }
}
