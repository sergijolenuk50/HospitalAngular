import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DoctorService } from '../services/doctor.services';
import { CategoryModel, CreateDoctorsModel } from '../doctor-list/doctors';

@Component({
  selector: 'app-doctor-form',
  standalone: true,
  imports: [MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    ReactiveFormsModule],
  templateUrl: './doctor-form.component.html',
  styleUrl: './doctor-form.component.css'
})
// export class DoctorFormComponent{
export class DoctorFormComponent implements OnInit  {

  form: FormGroup;

  categories: CategoryModel[] = [];
  // constructor(private fb: FormBuilder) {
  //   this.form = fb.group({
  //     // imageUrl: ['', Validators.required],
  //     // lastName: ['', Validators.required],
  //     // name: ['', Validators.required],
  //     // firstName: ['', Validators.required],
  //     // birthday: [0, Validators.required],
  //     // work_experience: [0, Validators.required],
  //     // archived:[''],
  //     // categoryId: [0, Validators.required]
  //   });

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private doctorService: DoctorService
  ) {
    this.form = fb.group({
      imageUrl: ['', Validators.required],
          lastName: ['', Validators.required],
          name: ['', Validators.required],
          firstName: ['', Validators.required],
          birthday: [0, Validators.required],
          work_experience: [0, Validators.required],
          archived:[''],
          categoryId: [0, Validators.required]
    });
  }
  
  ngOnInit(): void {
    this.doctorService.getCategories().subscribe(data => {
      console.log(data);
      this.categories = data;
    });
  }

  back() {
    history.back();
  }

  openSnackBar(msg: string) {
    this.snackBar.open(msg, "OK", {
      horizontalPosition: "center",
      verticalPosition: "top",
    });
  }
  submit() {
    // console.log(this.form.value);
    if (!this.form.valid) {
      this.openSnackBar("Invalid data.");
      return;
    }

    const model = this.form.value as CreateDoctorsModel;

    console.log(model);

    this.doctorService.create(model).subscribe(x => {
      this.openSnackBar("Product was created successfully.");
      this.back();
    });
  }
}
