import {Component, inject} from '@angular/core';
import {FormArray, FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-dynamic-form-demo',
  imports: [
      ReactiveFormsModule,
  ],
  templateUrl: './dynamic-form-demo.component.html',
  styleUrl: './dynamic-form-demo.component.css'
})
export class DynamicFormDemoComponent {

    private formBuilder = inject(FormBuilder);
    profileForm = this.formBuilder.group({
        username: ['', [
            Validators.required,
            Validators.minLength(4)],
        ],
        phones: this.formBuilder.array([this.formBuilder.control('')]),
    });
    get phones() {
        return this.profileForm.get('phones') as FormArray;
    }

    get username(){
        return this.profileForm.controls.username;
    }

    onSubmit() {
        console.log(this.profileForm.value);
    }

    addPhone()
    {
        this.phones.push(this.formBuilder.control('',[Validators.required]));
    }
}
