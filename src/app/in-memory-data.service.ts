import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Note } from './data';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
     const notes = [
      {
        id: 1,
        title: 'Hello Note',
        dateCreated: new Date('Dec 1 2019'),
        noteBody: 'This is the first note created',
        importance: 1
      },
      {
        id: 2,
        title: 'Second Note',
        dateCreated: new Date('Dec 23 2019'),
        noteBody: 'This is the second note created',
        importance: 2
      },
      {
        id: 3,
        title: 'Third Note',
        dateCreated: new Date('Jan 23 2020'),
        noteBody: 'This is the third note created',
        importance: 2
      },
      {
        id: 4,
        title: 'Welcome Note',
        dateCreated: new Date('Feb 2 2020'),
        noteBody: 'Welcome, in this website you can add notes and prioritize them based on your needs. You can add a title, date created and how important the note is to you. You can also edit and delete old notes, and add new notes',
        importance: 5
      },
      {
        id: 5,
        title: 'How to make coffee',
        dateCreated: new Date('Feb 3 2020'),
        noteBody: 'Boi water, then add the beans. You can also add sugar and creamer if you like it sweet. Black coffee is strong, I actually do not like coffee but this is a demo data',
        importance: 5
      }
    ];
    return { notes };
  }
  
  constructor() { }
}
