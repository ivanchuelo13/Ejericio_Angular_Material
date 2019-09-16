import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { OneListsimpleComponent } from './one-listsimple/one-listsimple.component';
import { TwoGridComponent } from './two-grid/two-grid.component';
import { SixSortheaderComponent } from './six-sortheader/six-sortheader.component';
import { SevenRadiusComponent } from './seven-radius/seven-radius.component';
import { OchoTargetaComponent } from './ocho-targeta/ocho-targeta.component';



const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'movie-list', component: MovieListComponent},
  {path: 'teacher-list',component:TeacherListComponent},
  {path: 'one-listsimple', component:OneListsimpleComponent},
  {path: 'two-grid', component:TwoGridComponent},
  {path: 'six-sortheader', component:SixSortheaderComponent},
  {path: 'seven-radius', component:SevenRadiusComponent},
  {path: 'ocho-targeta',component:OchoTargetaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
