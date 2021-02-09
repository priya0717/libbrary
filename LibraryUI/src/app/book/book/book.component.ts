import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NGXLogger } from 'ngx-logger';
import { AuthenticationService } from '../../core/services/auth.service';
import { NotificationService } from '../../core/services/notification.service';
import { SpinnerService } from '../../core/services/spinner.service';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  form: FormGroup;
  disableSubmit: boolean;
  categories =[
  {value:"cs",text:"computer science"},
  {value:"mat",text:"maths"},
  {value:"eng",text:"english"},
  {value:"che",text:"chemistry"},
  {value:"tam",text:"tamil"},
  {value:"phy",text:"physics"},
  {value:"his",text:"history"},
  {value:"sci",text:"science"}]
  constructor(
    private authService: AuthenticationService,
    private logger: NGXLogger,
    private spinnerService: SpinnerService,
    private notificationService: NotificationService
  ) {
  }
  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.maxLength(50)
      ]),
      bookauthor: new FormControl('', [
        Validators.required
      ]),
      bookid: new FormControl('', [
        Validators.required,
      ]),
      location: new FormControl('', [
        Validators.required,
      ]),
      description: new FormControl('', [
        Validators.required,
      ]),
      categoryofbook: new FormControl('', [
        Validators.required,
      ])
    });

    this.spinnerService.visibility.subscribe((value) => {
      this.disableSubmit = value;
    });
  }

  changePassword() {

    alert('test');

  }
}
