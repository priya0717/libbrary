import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NGXLogger } from 'ngx-logger';
import { AuthenticationService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SpinnerService } from 'src/app/core/services/spinner.service';

@Component({
  selector: 'app-issuedbook',
  templateUrl: './issuedbook.component.html',
  styleUrls: ['./issuedbook.component.css']
})
export class issuedbookComponent implements OnInit {
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
      issuedbook: new FormControl('', [
        Validators.required,
        Validators.maxLength(50)
      ]),
      bookgetstudent: new FormControl('', [
        Validators.required
      ]),
      studentclass: new FormControl('', [
        Validators.required
      ]),
      issueddate: new FormControl('', [
        Validators.required
      ]),
      bookissuedid: new FormControl('', [
        Validators.required
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
