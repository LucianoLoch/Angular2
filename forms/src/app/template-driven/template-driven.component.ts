import { Component } from '@angular/core';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'template-driven',
  templateUrl: 'template-driven.component.html'
})
export class TemplateDrivenComponent {

  user = {
    username: 'Luciano',
    email: 'luciano@teste.com',
    password: 'teste',
    gender: 'male'
  };

  genders = ['male','female'];

  onSubmit(form: NgForm){
    console.log(form.value);
  }
}
