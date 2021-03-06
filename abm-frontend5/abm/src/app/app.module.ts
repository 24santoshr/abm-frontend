import { BrowserModule } from '@angular/platform-browser';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

// Components

import { AppComponent } from './app.component';
import { BuildTabComponent } from './build-tab/build-tab.component';
import { BuildColourPipe } from './shared/build-colour.pipe';
import { FileSizePipe } from './shared/file-size.pipe';
import { HermesNamePipe } from './shared/hermes-name.pipe';
import { PrivateStatusPipe } from './shared/private-status.pipe';
import { SiteNamePipe } from './shared/site-name.pipe';
import { TabTitlePipe } from './shared/tab-title.pipe';
import { AboutComponent } from './about/about.component';
import { CollectionComponent } from './collection/collection.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { CommitSelectionComponent } from './commit-selection/commit-selection.component';
import { CriteriaComponent } from './criteria/criteria.component';
import { FilterComponent } from './filter/filter.component';
import { HermesViewerComponent } from './hermes-viewer/hermes-viewer.component';
import { ModalBuildComponent } from './modal-build/modal-build.component';
import { ModalHermesComponent } from './modal-hermes/modal-hermes.component';
import { ModalLoginComponent } from './modal-login/modal-login.component';
import { SearchComponent } from './search/search.component';
import { VersionDropDownComponent } from './version-drop-down/version-drop-down.component';
import { ViewComponent } from './view/view.component';

import {ToastyModule} from 'ng2-toasty';

// Services
import {Register} from './services/register.service';
// import { ToastComponent } from './toast/toast.component';

const routes: Routes = [
 {path: '', pathMatch: 'full', redirectTo: 'login'},
  { path: 'collection', component: CollectionComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  {path: 'register', component: RegisterComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    BuildTabComponent,
    BuildColourPipe,
    FileSizePipe,
    HermesNamePipe,
    PrivateStatusPipe,
    SiteNamePipe,
    TabTitlePipe,
    AboutComponent,
    CollectionComponent,
    LoginComponent,
    RegisterComponent,
    CartComponent,
    CommitSelectionComponent,
    CriteriaComponent,
    FilterComponent,
    HermesViewerComponent,
    ModalBuildComponent,
    ModalHermesComponent,
    ModalLoginComponent,
    SearchComponent,
    VersionDropDownComponent,
    ViewComponent
    // ToastComponent

  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)


  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [Register],
  bootstrap: [AppComponent]
})
export class AppModule { }
