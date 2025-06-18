import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-dynamicform',
  templateUrl: './dynamicform.component.html',
  styleUrls: ['./dynamicform.component.css']
})
export class DynamicformComponent implements OnInit {
  formConfig: any[] = [];
  myForm!: FormGroup;
  getAllBodyType:any
  
  constructor(private fb: FormBuilder, private http: HttpClient,public Restservice:RestService) {}

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
      // console.log(field);
      const fieldValidators = this.getValidators(field);
      if (field.type === 'checkbox-group') {
        const controls = field.options.map(() => new FormControl(false));
        group[field.name] = new FormArray(controls, fieldValidators);
        console.log(fieldValidators);
      } else if (field.type === 'checkbox') {
        group[field.name] = [false, fieldValidators];
        console.log(fieldValidators);  
      } else {
        group[field.name] = ['', fieldValidators];
        console.log(fieldValidators);
        
      }

      // group[field.name] = field.type === 'checkbox' ? [false, fieldValidators]  : ['', fieldValidators];  
      // console.log(fieldValidators);  
    });
    this.myForm = this.fb.group(group);
  }

  // Get validators for each field dynamically
  getValidators(field: any) {
    const validators = [];

    if (field.validators?.includes('required')) {
      validators.push(Validators.required);
    }
    if (field.type === 'email' && field.validators?.includes('email')) {
      validators.push(Validators.email);
    }
    if (field.type === 'password' && field.validators?.includes('minlength')) {
      validators.push(Validators.minLength(6)); 
    }
    if (field.type === 'number' && field.validators?.includes('min')) {
      validators.push(Validators.min(18)); 
    }
    if (field.type === 'checkbox' && field.validators?.includes('requiredTrue')) {
      validators.push(Validators.requiredTrue);  
    }

    return validators;
  }

  onSubmit(): void {
    // Handle form submission
    if (this.myForm.valid) {
      console.log(this.myForm.value);
    } else {
      this.myForm.markAllAsTouched()
      console.log('Form is invalid');
    }
  }

  // Handle file input changes
  onFileChange(event: any, fieldName: string) {
    const file = event.target.files[0];
    if (file) {
      this.myForm.get(fieldName)?.setValue(file);
    }
  }
}
