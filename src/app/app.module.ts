import { environment } from './../environments/environment';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
// import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from '@angular/fire';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { WorksComponent } from './works/works.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { CoursesComponent } from './courses/courses.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavigationComponent } from './navigation/navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './works/modal/modal.component';
import { MngHomeComponent } from './manager/mng-home/mng-home.component';
import { MngAboutComponent } from './manager/mng-about/mng-about.component';
import { MngCoursesComponent } from './manager/mng-courses/mng-courses.component';
import { MngEducationComponent } from './manager/mng-education/mng-education.component';
import { MngSkillsComponent } from './manager/mng-skills/mng-skills.component';
import { MngWorksComponent } from './manager/mng-works/mng-works.component';
import { LoginComponent } from './manager/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    WorksComponent,
    SkillsComponent,
    EducationComponent,
    CoursesComponent,
    NavigationComponent,
    ModalComponent,
    MngHomeComponent,
    MngAboutComponent,
    MngCoursesComponent,
    MngEducationComponent,
    MngSkillsComponent,
    MngWorksComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    // AngularFirestoreModule,
    // AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
