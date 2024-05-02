import { Component, Input, Inject, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { HousingService } from '../housing.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './housing-location.component.html',
  styleUrls: ['./housing-location.component.css'],
})

export class HousingLocationComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  @Input() housingLocation!: HousingLocation;
  constructor(public dialog: MatDialog) {}

  openDialog(param:number): void {
    const dialogRef = this.dialog.open(DialogContent, {
      data: { parameter: param } // Pass the parameter as part of the data property
    });
  
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  standalone: true,
  templateUrl: 'dialog-content-example-dialog.html',
  styleUrls: ['./dialog-content-example-dialog.css'],
  imports: [MatDialogModule, MatButtonModule,CommonModule,
  ReactiveFormsModule],
})
export class DialogContent {

  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: HousingLocation|undefined;

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
    console.log(this.data.parameter);
   // alert(this.data.parameter) // Access the parameter passed to the dialog
    const housingLocationId = parseInt(this.data.parameter, 10);
   // alert(id)
    this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
    //alert(this.housingLocation)
  }
  // constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
  // constructor(@Inject(MAT_DIALOG_DATA) public id: string) {
  //   // const housingLocationId = parseInt(this.route.snapshot.params['id'], 10);
  //   const housingLocationId = parseInt(id, 10);
  //   alert(id)
  //   this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
  // }

  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }
}