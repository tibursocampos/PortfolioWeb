import { LoginComponent } from './manager/login/login.component';
import { MngHomeComponent } from './manager/mng-home/mng-home.component';
import { AboutComponent } from './about/about.component';
import { WorksComponent } from './works/works.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { CoursesComponent } from './courses/courses.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'about', pathMatch: 'full'},
  {path: 'about', component: AboutComponent},
  {path: 'login', component: LoginComponent},
  {path: 'mng-home', component: MngHomeComponent},
  {path: 'manager', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
