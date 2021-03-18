import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-acces-event',
  templateUrl: './dialog-acces-event.component.html',
  styleUrls: ['./dialog-acces-event.component.scss']
})
export class DialogAccesEventComponent {
  dialogForm !: FormGroup;

  constructor(public dialogRef: MatDialogRef<DialogAccesEventComponent>) 
  {
    this.initdialogForm();
  }

  initdialogForm(){
    this.dialogForm= new FormGroup({
      id : new FormControl('',[Validators.required]),
      email : new FormControl('',[Validators.required, Validators.email]),
      pwd : new FormControl('',[Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)])
    })
  }

  email(){
    return this.dialogForm.get('email');
  }

  pwd(){
    return this.dialogForm.get('pwd');
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    this.dialogRef.close({id: this.dialogForm.value["id"],password: this.dialogForm.value["pwd"],email: this.dialogForm.value["email"]});
  }

}
