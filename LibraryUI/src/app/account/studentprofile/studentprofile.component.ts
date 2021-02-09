import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NGXLogger } from 'ngx-logger';
import { AuthenticationService } from './../../core/services/auth.service';
import { NotificationService } from './../../core/services/notification.service';
import { SpinnerService } from './../../core/services/spinner.service';
@Component({
  selector: 'app-studentprofile',
  templateUrl: './studentprofile.component.html',
  styleUrls: ['./studentprofile.component.scss']
})
export class StudentprofileComponent implements OnInit {
  form: FormGroup;
  disableSubmit: boolean;

  constructor(
    private authService: AuthenticationService,
    private logger: NGXLogger,
    private spinnerService: SpinnerService,
    private notificationService: NotificationService
  ) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      studentname: new FormControl('', [
        Validators.required,
        Validators.maxLength(30)
      ]),
      registernumber: new FormControl('', [
        Validators.required
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      department: new FormControl('', [
        Validators.required,
      ]),
      sex: new FormControl('', [
        Validators.required,
      ]),
      year: new FormControl('', [
        Validators.required,
      ]),

    });

    this.spinnerService.visibility.subscribe((value) => {
      this.disableSubmit = value;
    });
  }

  changePassword() {

    alert('test');

  }
}
