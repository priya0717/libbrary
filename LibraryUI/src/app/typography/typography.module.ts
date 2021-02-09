import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { TypographyRoutingModule } from './typography-routing.module';
import { TypographyComponent } from './typography/typography.component';

@NgModule({
  declarations: [TypographyComponent],
  imports: [CommonModule, SharedModule, TypographyRoutingModule],
})
export class TypographyModule {}
