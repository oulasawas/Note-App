import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import {CardModule} from 'primeng/card';
import { NotesComponent } from './components/notes/notes.component';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertModule } from 'ngx-bootstrap';
import {FormsModule} from "@angular/forms";
import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AllNotesComponent } from './components/all-notes/all-notes.component';
//import { NoteDetailsComponent } from './components/note-details/note-details.component';
import { HeaderComponent } from './components/header/header.component';
import {RatingModule} from 'primeng/rating';
import {CarouselModule} from 'primeng/carousel';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NotesComponent,
    AllNotesComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    AlertModule.forRoot(),
    NgbModule.forRoot(),
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService,{dataEncapsulation: false}
    ),
    RatingModule,
    CarouselModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
