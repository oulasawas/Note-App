import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/helper.service';
import { Note } from 'src/app/data';

@Component({
  selector: 'app-all-notes',
  templateUrl: './all-notes.component.html',
  styleUrls: ['./all-notes.component.css']
})
export class AllNotesComponent implements OnInit {
  notes = [];
  selectedNote: Note;
  showNote: Note;
  show: boolean = false;
  canEdit: boolean = false;
  constructor(private helper:HelperService,public router1:Router, public router2:Router) { }

  ngOnInit() {
    this.helper.getNotes()
    .subscribe(data => this.notes = data);
    
  }
  goBack(){
    this.router1.navigate(['/']);
  }
  onSelect(note: Note): void{
    this.selectedNote = note; 
    this.show = true;
    this.canEdit = false;
    this.showNote = note;
  }
  delete(note: Note){
    this.notes = this.notes.filter(data => data !== note);
    this.helper.deleteNote(note).subscribe;
    this.show = false;
  }

  update(){
    this.canEdit = true;
    this.show = false;    
  }
  
  save(note){
    for(let i = 0; i< this.notes.length; i++){
      if(note.id === this.notes[i].id){
        this.helper.EditNote(note,)
        .subscribe(()=>
        this.notes[i] = note)
      }
    }
    this.show = true;
    this.canEdit = false; 
  }

}
