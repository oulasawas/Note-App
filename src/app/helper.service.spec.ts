import { TestBed, inject } from '@angular/core/testing';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HelperService } from './helper.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {InMemoryDataService} from './in-memory-data.service';
import { Note } from './data';
describe('HelperService', () => {
  let helperService : HelperService,
  httpTestingController: HttpTestingController,
  memoryService: InMemoryDataService;
  beforeEach(() => {
  TestBed.configureTestingModule({
    imports:[HttpClientTestingModule],
    providers:[
      HelperService,
      InMemoryDataService
    ],
    
    
  })
  helperService = TestBed.get(HelperService);
  httpTestingController = TestBed.get(HttpTestingController);
  memoryService = TestBed.get(InMemoryDataService);

});
  it('should return all Notes', ()=>{
    helperService.getNotes()
    .subscribe(notes =>{
      
      expect(notes).toBeTruthy("No notes returned");
      //expect(notes.length).toBe(4),"incorrect number of notes";
      const note = notes.find(note => note.id == 2);
      expect(note.title).toBe('Second Note');
    });
    let notes = memoryService.createDb();
    const req = httpTestingController.expectOne('api/notes');
    expect(req.request.method).toEqual("GET");
    req.flush(Object.values(notes));
    
  });

  it('should add a note',()=>{
    const note : Note = {
      id: 2,
      title: 'Second Note',
      dateCreated: new Date('Dec 23 2019'),
      noteBody: 'This is the second note created',
      importance: 2
    };
    helperService.addNote(note)
    .subscribe(data =>{
      expect(data.id).toBe(2);
    });
    let notes = memoryService.createDb();
    const req = httpTestingController.expectOne('api/notes');
    expect(req.request.method).toEqual("POST");
    expect(req.request.body.noteBody)
    .toEqual(note.noteBody);
    req.flush({
      ...notes[2],
      ...note
    })
  });

  it('should edit a note',()=>{
    const note : Note = {
      id: 2,
      title: 'Second Note',
      dateCreated: new Date('Dec 23 2019'),
      noteBody: 'This is the second note created',
      importance: 2
    };
    helperService.EditNote(note)
    .subscribe(data =>{
      expect(data.id).toBe(2);
    });
    let notes = memoryService.createDb();
    const req = httpTestingController.expectOne('api/notes');
    expect(req.request.method).toEqual("PUT");
    expect(req.request.body.noteBody)
    .toEqual(note.noteBody);
    req.flush({
      ...notes[2],
      ...note
    });
    
    
  });

  afterEach(()=>{
    httpTestingController.verify();
  })

});
