import {Component, inject} from '@angular/core';

export function startWithCapitalLetter(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value.toString();
        const valid = value.charAt(0) == value.charAt(0).toString().toUpperCase();
        //console.log('Validator value ',value, ' is valid ',valid);
        return !valid ? {startWithCapitalLetter: {value: control.value}} : null;
    };
}

import {
    AbstractControl,
    FormBuilder,
    FormsModule,
    ReactiveFormsModule,
    ValidationErrors,
    ValidatorFn,
    Validators
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form-demo',
    imports: [
        ReactiveFormsModule,
        FormsModule
    ],
  templateUrl: './reactive-form-demo.component.html',
  styleUrl: './reactive-form-demo.component.css'
})
export class ReactiveFormDemoComponent {
    private formBuilder = inject(FormBuilder);

    profileForm = this.formBuilder.group({
        username: ['',[
            Validators.required,
            Validators.minLength(4),
            startWithCapitalLetter()],

        ],
        email: ['',[
            Validators.required,
            Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
        ]
        ],
    });
    onSubmit()
    {
        console.log('Form data ',this.profileForm.value)
    }
    get username()
    {
        return this.profileForm.controls.username;
    }
    get email()
    {
        return this.profileForm.controls.email;
    }
    set username(value)
    {
        //this.profileForm.controls.username.setValue(value);
    }
    updateName()
    {
        //this.profileForm.controls.username.setValue('Update');
    }
    updateProfile()
    {
        this.profileForm.patchValue({
            ...this.profileForm.value,
            username: 'Updated',
            //email: 'update@email.com'
        });
    }
}
