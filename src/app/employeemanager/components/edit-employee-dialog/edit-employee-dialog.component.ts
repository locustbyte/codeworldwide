import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { Employee } from '../../models/employee';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EmployeeService } from '../../services/employee.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-employee-dialog',
  templateUrl: './edit-employee-dialog.component.html',
  styleUrls: ['./edit-employee-dialog.component.scss']
})
export class EditEmployeeDialogComponent implements OnInit {
  @ViewChild('idvalue', { static: true }) idvalue: ElementRef;
  @ViewChild('indexvalue', { static: true }) indexvalue : ElementRef;
  form: FormGroup;
  avatars = [
    'svg-1', 'svg-2', 'svg-3', 'svg-4'
  ]
  constructor(private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditEmployeeDialogComponent>,
    private employeeService: EmployeeService,
    @Inject(MAT_DIALOG_DATA) { id, avatar, first_name, last_name, email, alias, index}) { 
      this.form = fb.group({
        id: [id],
        avatar: [avatar],
        first_name: [first_name],
        last_name: [last_name],
        email: [email],
        alias: [alias],
        index: [index]
      });
    }

  ngOnInit() {
  }

  onEdit(){
    this.employeeService.update(this.indexvalue.nativeElement.value, this.form.value).then(empl=>{
      this.dialogRef.close(empl);
    });
   }

  onCancel() {
    this.dialogRef.close();
  }

}
