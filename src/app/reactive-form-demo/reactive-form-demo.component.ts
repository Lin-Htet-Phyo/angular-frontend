import {Component, inject} from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';

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
    private  formBuilder = inject(FormBuilder);
    profileForm = this.formBuilder.group({
        username: [''],
        email: [''],
    });

    onSubmit() {
        console.log(this.profileForm.value);
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
