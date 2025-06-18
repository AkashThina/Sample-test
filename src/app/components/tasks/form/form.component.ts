import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  myForm!: FormGroup;
  mySecondForm!: FormGroup;

  defaultValues = {
    name: 'Akash Thina',
    email: 'akashthina567@gmail.com',
    password: 'password123'
  };

  SetName = {
    name: 'Mani Kumar'
  };

  isReadOnly: boolean = false;
  IsDisable: boolean = false;
  isReadonlyCheck: boolean = false;

  currentFormStep = 1;

  CoverType: any;
  getAllBodyType: any;
  selectedItems: string[] = [];

  constructor(public Restservices: RestService, public fb: FormBuilder) {}

  ngOnInit() {
    // First form
    this.myForm = new FormGroup({
      name: new FormControl('', [Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });

    // Second form
    this.mySecondForm = this.fb.group({
      covertypes: this.fb.array([]),
      BodyType: this.fb.array([])
    });

    // Form control listeners
    this.myForm.controls['name'].valueChanges.subscribe(value => {
      console.log('Name changed:', value);
    });

    this.myForm.controls['email'].valueChanges.subscribe(value => {
      if (value) {
        console.log('Email changed:', value);
      }
    });

    this.myForm.controls['password'].valueChanges.subscribe(value => {
      console.log('Password changed:', value);
    });

    // Entire form value change
    this.myForm.valueChanges.subscribe(value => {
      console.log('Form value changed:', value);
    });

    // Uncomment when needed
    // this.GetCoverType();
    // this.getAllBody();
  }

  onSubmit() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
    } else {
      console.log('Form is not valid');
    }
  }

  setDefaultValues() {
    this.myForm.setValue(this.defaultValues);
  }

  patchDefaultValues() {
    this.myForm.patchValue({
      name: 'Akash Thina',
      email: 'manoj@gmail.com',
      password: ''
    });
  }

  toggleReadOnlyAll() {
    this.isReadOnly = !this.isReadOnly;
  }

  onReset() {
    this.myForm.reset();
  }

  Disable() {
    this.IsDisable = !this.IsDisable;

    if (this.IsDisable) {
      this.myForm.controls['name'].disable();
      this.myForm.controls['email'].disable();
      // this.myForm.controls['password'].disable();
    } else {
      this.myForm.controls['name'].enable();
      this.myForm.controls['email'].enable();
      // this.myForm.controls['password'].enable();
    }
  }

  SetNameonly() {
    this.myForm.patchValue(this.SetName);
  }

  toggleReadOnly(event: any) {
    this.isReadonlyCheck = event.target.checked;
  }

  nextStep() {
    if (this.myForm.valid) {
      this.currentFormStep = 2;
      this.GetCoverType();
    } else {
      this.myForm.markAllAsTouched();
    }
  }

  previousStep() {
    this.currentFormStep = 1;
  }

  GetCoverType() {
    this.Restservices.CoverTypeData().subscribe({
      next: (data: any) => {
        this.CoverType = data.rObj.getAllCoverType;
        console.log(this.CoverType);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  onCheckboxChange(item: any, event: any) {
    if (event.target.checked) {
      this.selectedItems.push(item.coverTypeName);
      console.log(`${item.coverTypeName} checkbox is checked.`);
    } else {
      const index = this.selectedItems.indexOf(item.coverTypeName);
      if (index !== -1) {
        this.selectedItems.splice(index, 1);
      }
      console.log(`${item.coverTypeName} checkbox is unchecked.`);
    }

    console.log('Selected items:', this.selectedItems);
  }

  onUsageTypeChange(type: number) {
    const usageTypeID = type;

    this.Restservices.getAllBody(usageTypeID).subscribe({
      next: (data: any) => {
        this.getAllBodyType = data.rObj.getAllBodyType;
        console.log('API response:', data.rObj.getAllBodyType);
      },
      error: (err: any) => {
        console.error('API Error:', err);
      }
    });
  }
}
