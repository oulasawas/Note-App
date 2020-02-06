import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/helper.service';
import { Note } from 'src/app/data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  showData: boolean;
  private _url: string = "assets/data/data.json";
  notes: Note[] = [];
  note : Note = {
    id: null,
    title: '',
    dateCreated: null,
    noteBody: '',
    importance: null
  };
  newNote: Observable<Note>;
  constructor(private http:HttpClient,private helper: HelperService,public datepipe: DatePipe, public router: Router) { }

  ngOnInit() {
    
  }
  addNote(){
    
    this.helper.addNote(this.note)
    .subscribe(note => {
      this.notes.push(note);
      console.log(note.dateCreated);
    })
    console.log(this.note);
  
    this.router.navigate(['/allNotes']);
    
  }

}
