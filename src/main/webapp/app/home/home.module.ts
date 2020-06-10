import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { WowportalSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [WowportalSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent],
})
export class WowportalHomeModule {}
