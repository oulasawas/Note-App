import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Note } from './data';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
@Injectable({
  providedIn: 'root'
})
export class HelperService {
  newNote: Note;
  private _url: string = 'api/notes';

  constructor(private http: HttpClient) { }

  getNotes(): Observable<Note[]>{
    return this.http.get<Note[]>(this._url);
  }

  addNote(note : Note): Observable<Note>{
    
    return this.http.post<Note>(this._url,note, {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    });
  }
  deleteNote(note:Note | number): Observable<Note>{
    const id = typeof note === 'number'? note: note.id;
    return this.http.delete<Note>(this._url, {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    });

  }

  EditNote(note: Note):Observable<Note>{
    return this.http.put<Note>(this._url, note, {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    });
  }
}
