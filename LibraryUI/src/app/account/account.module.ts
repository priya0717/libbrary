import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatRadioModule } from "@angular/material/radio";
import { SharedModule } from '../shared/shared.module';
import { AccountRoutingModule } from './account-routing.module';
import { CalculatorComponent } from './calculator/calculator.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { CollectedbookComponent } from './collectedbook/collectedbook.component';
import { issuedbookComponent } from './issuedbook/issuedbook.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { ProfileComponent } from './profile/profile.component';
import { StudentprofileComponent } from './studentprofile/studentprofile.component';

@NgModule({
  imports: [CommonModule, SharedModule, AccountRoutingModule, MatRadioModule],
  declarations: [
    ProfileComponent,
    ChangePasswordComponent,
    ProfileDetailsComponent,
    CalculatorComponent,
    StudentprofileComponent,
    issuedbookComponent,
    CollectedbookComponent
  ],
  exports: [ProfileComponent],
})
export class AccountModule {}
