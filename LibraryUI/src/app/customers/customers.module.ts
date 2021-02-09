import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomersRoutingModule } from './customers-routing.module';

@NgModule({
  imports: [CommonModule, CustomersRoutingModule, SharedModule],
  declarations: [CustomerListComponent],
  entryComponents: [],
})
export class CustomersModule {}
