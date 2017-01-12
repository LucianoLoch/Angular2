import { Component } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';

import { Observable } from 'rxjs/Rx';


@Component({
    selector: 'data-driven',
    templateUrl: 'data-driven.component.html'
   
})
export class DataDrivenComponent {
    myForm: FormGroup;

    genders = [
        'male',
        'female'
    ];

    constructor(private formBuilder: FormBuilder){
      this.myForm = formBuilder.group({
          'userData': formBuilder.group({
              'username': ['Luciano', [Validators.required, this.exampleValidator]],
              'email': ['', [
                  Validators.required,
                  Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
              ]]
          }),
          'password': ['', Validators.required],
          'gender': ['male'],
          'hobbies': formBuilder.array([
              ['Cooking', Validators.required]
          ])
      });

      this.myForm.statusChanges.subscribe(
          (data: any) => console.log(data)
          );
    }

    onAddHobby(){
        (<FormArray>this.myForm.controls['hobbies']).push(new FormControl('', Validators.required));
    }

    onSubmit(){
        console.log(this.myForm);
    }

    exampleValidator(control: FormControl): {[s:string]: boolean }{
        if (control.value === 'Example') {
            return {example: true}
        }else{
            return {example: false}
        }
    }


}
