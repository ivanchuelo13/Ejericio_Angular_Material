import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MovieService } from './service/movie.service';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';
import { OneListsimpleComponent } from './one-listsimple/one-listsimple.component';
import { TwoGridComponent } from './two-grid/two-grid.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { SixSortheaderComponent } from './six-sortheader/six-sortheader.component';
import {MatSortModule} from '@angular/material/sort';
import { SevenRadiusComponent } from './seven-radius/seven-radius.component';
import {MatRadioModule} from '@angular/material/radio';
import { OchoTargetaComponent } from './ocho-targeta/ocho-targeta.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatAutocompleteModule} from '@angular/material/autocomplete'



@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    TeacherListComponent,
    OneListsimpleComponent,
    TwoGridComponent,
    SixSortheaderComponent,
    SevenRadiusComponent,
    OchoTargetaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatDialogModule,
    MatListModule,
    MatGridListModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSortModule,
    MatRadioModule,
    MatCardModule,
    MatButtonModule,
    MatAutocompleteModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
