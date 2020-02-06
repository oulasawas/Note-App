import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NotesComponent } from './components/notes/notes.component';
import { AboutComponent } from './components/about/about.component';
import { AllNotesComponent } from './components/all-notes/all-notes.component';


const routes: Routes = [
  {path:'', component: AboutComponent},
  {path:'notes',component: NotesComponent},
  {path:'allNotes', component: AllNotesComponent}
  //{path:'allNotes/:id', component: NoteDetailsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
