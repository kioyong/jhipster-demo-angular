import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { WowportalSharedModule } from 'app/shared/shared.module';
import { WowportalCoreModule } from 'app/core/core.module';
import { WowportalAppRoutingModule } from './app-routing.module';
import { WowportalHomeModule } from './home/home.module';
import { WowportalEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    WowportalSharedModule,
    WowportalCoreModule,
    WowportalHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    WowportalEntityModule,
    WowportalAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class WowportalAppModule {}
