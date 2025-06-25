import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-dynamicform',
  templateUrl: './dynamicform.component.html',
  styleUrls: ['./dynamicform.component.css']
})
export class DynamicformComponent implements OnInit {
  formConfig: any[] = [];
  myForm!: FormGroup;
  getAllBodyType: any;

  constructor(private fb: FormBuilder, private http: HttpClient, public Restservice: RestService) { }

  ngOnInit(): void {
    this.http.get<any[]>('/assets/form-config.json').subscribe(config => {
      this.formConfig = config;
      console.log(this.formConfig);
      this.buildForm();
    });
  }

  buildForm() {
    const group: any = {};
    this.formConfig.forEach(field => {
      const fieldValidators = this.getValidators(field);

      if (field.type === 'checkbox-group') {
        const controls = field.options.map(() => new FormControl(false));
        group[field.name] = new FormArray(controls, this.checkboxGroupValidator);
      } else if (field.type === 'checkbox') {
        group[field.name] = [false, fieldValidators];
      } else if (field.type === 'file') {
        group[field.name] = [null, fieldValidators];
      } else {
        group[field.name] = ['', fieldValidators];
      }
    });
    this.myForm = this.fb.group(group);
  }

  // Custom validator for checkbox groups
  checkboxGroupValidator(formArray: AbstractControl): ValidationErrors | null {
    const controls = (formArray as FormArray).controls;
    const hasSelection = controls.some(control => control.value === true);
    return hasSelection ? null : { required: true };
  }

  // Custom validator for file inputs
  fileRequiredValidator(control: AbstractControl): ValidationErrors | null {
    const file = control.value;
    return file ? null : { required: true };
  }

  // Get validators for each field dynamically
  getValidators(field: any) {
    const validators = [];

    if (field.validators?.includes('required')) {
      if (field.type === 'file') {
        validators.push(this.fileRequiredValidator);
      } else {
        validators.push(Validators.required);
      }
    }

    if (field.type === 'email' && field.validators?.includes('email')) {
      validators.push(Validators.email);
    }

    if (field.type === 'password' && field.validators?.includes('minlength:6')) {
      validators.push(Validators.minLength(6));
    }

    if (field.type === 'number' && field.validators?.includes('min:18')) {
      validators.push(Validators.min(18));
    }

    if (field.type === 'checkbox' && field.validators?.includes('requiredTrue')) {
      validators.push(Validators.requiredTrue);
    }

    return validators;
  }

  onSubmit(): void {
    if (this.myForm.valid) {
      console.log('Form Data:', this.myForm.value);
      // Process form data here
    } else {
      this.myForm.markAllAsTouched();
      console.log('Form is invalid');

      // Log validation errors for debugging
      Object.keys(this.myForm.controls).forEach(key => {
        const control = this.myForm.get(key);
        if (control && control.invalid) {
          console.log(`${key} errors:`, control.errors);
        }
      });
    }
  }

  // Handle file input changes
  onFileChange(event: any, fieldName: string) {
    const file = event.target.files[0];
    const control = this.myForm.get(fieldName);

    if (file && control) {
      control.setValue(file);
      control.markAsTouched();
      control.updateValueAndValidity();
    } else if (control) {
      control.setValue(null);
      control.markAsTouched();
      control.updateValueAndValidity();
    }
  }
}