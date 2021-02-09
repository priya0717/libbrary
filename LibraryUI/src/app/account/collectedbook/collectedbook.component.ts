import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NGXLogger } from 'ngx-logger';
import { AuthenticationService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SpinnerService } from 'src/app/core/services/spinner.service';

@Component({
  selector: 'app-collectedbook',
  templateUrl: './collectedbook.component.html',
  styleUrls: ['./collectedbook.component.css']
})
export class CollectedbookComponent implements OnInit {
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
      collectedbook: new FormControl('', [
        Validators.required,
        Validators.maxLength(50)
      ]),
      bookgivestudent: new FormControl('', [
        Validators.required
      ]),
      studentclass: new FormControl('', [
        Validators.required
      ]),
      collecteddate: new FormControl('', [
        Validators.required
      ]),
      collectedbookid: new FormControl('', [
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
