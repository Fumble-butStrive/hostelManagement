import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Subject, throwError } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ViewAllStudentService {

  private apiUrl = environment.apiUrl+'api/student/';

  constructor(private httpClient: HttpClient) { }

  findStudent() {
    // console.log(`serching students`);
    return this.httpClient.get<any>(`${this.apiUrl}viewStudent`).pipe
    (
      switchMap(({ student }) => {
        // console.log('found student detalis', student);
        return of(student);
      }),
      catchError(error => {
        const msg = "Student Details not fetch. Please try again";
        // console.log(msg);
        return of(msg);
      })
    );
  }


}
