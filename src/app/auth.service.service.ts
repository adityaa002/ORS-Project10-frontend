import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService implements HttpInterceptor {
  token: any

  constructor(private router: Router, public route: ActivatedRoute) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('in auth service intercept method....!!!')

    const token = localStorage.getItem('token');
    const fname = localStorage.getItem('fname');

    if (fname && token) {
      req = req.clone({
        setHeaders: {
          Authorization: token  // ← only this needed
        },
        withCredentials: true     // ← correct way
      });
    }

    console.log(req.headers.get("Authorization"));

    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {


        if (error.status === 401) {
          localStorage.clear();
          this.router.navigate(['/login'], {
            queryParams: { errorMessage: error.error }
          });
        }


        if (error.status === 403) {
          localStorage.clear();
          this.router.navigate(['/login'], {
              queryParams: { errorMessage: error.error.result.message }
          });
        }


        if (error.status === 503) {
          localStorage.clear();
          this.router.navigate(['/login'],
            {
              queryParams: { errorMessage: error.error.result.message }

            });
        }

        return throwError(error);
      })

    );
  }
}