import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HelperService } from 'src/app/helper.service';
import { Note } from 'src/app/data';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  notes;
  favNotesArray: Note[] = [];
  len = 2 ;
  maxRating: number = 0;
  responsiveOptions
  constructor(private route: ActivatedRoute, private helper: HelperService, private router: Router) { }

  ngOnInit() {
    this.getFavNotes();
    console.log(this.favNotesArray.length);
   
  }
  getFavNotes() {
    this.helper.getNotes()
      .subscribe(data => {
        this.notes = data;
        this.favNotes(this.notes);
      }
      );
  }
  createNote() {
    this.router.navigate(['/notes']);
  }
  viewNotes() {
    this.router.navigate(['/allNotes']);
  }

  favNotes(array) {
    //this.len = array.length
    for (let i = 0; i < array.length; i++) {
      if (array[i].importance > this.maxRating) {
        this.maxRating = array[i].importance;
      }
    }
    for (let j = 0; j < array.length; j++) {
      if (this.maxRating === array[j].importance) {
        this.favNotesArray.push(array[j]);
      }
    }
  }

}
