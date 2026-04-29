import {
  HttpErrorResponse,
  HttpEvent,
  HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService implements HttpInterceptor {

  constructor(private router: Router, public route: ActivatedRoute) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('in auth service intercept method....!!!');

    const token = localStorage.getItem('token');
    const fname = localStorage.getItem('fname');

    if (fname && token) {
      req = req.clone({
        setHeaders: {
          Authorization: token
        },
        withCredentials: true
      });
    }

    console.log(req.headers.get("Authorization"));

    return next.handle(req).pipe(
      tap((event: HttpEvent<any>) => {
        // ✅ Clear DB error on any successful response
        if (event.type === HttpEventType.Response && event.status === 200) {
          sessionStorage.removeItem('dbServiceError');
        }
      }),
      catchError((error: HttpErrorResponse) => {
        // ✅ Extract backend ORSResponse message
        const getErrorMessage = (error: HttpErrorResponse): string => {
          if (typeof error.error === 'string') return error.error;

          // ORSResponse format: { success: false, messages: [...] }
          if (error.error?.messages && Array.isArray(error.error.messages) && error.error.messages.length > 0) {
            return error.error.messages[0];
          }

          if (error.error?.result?.message) return error.error.result.message;
          if (error.error?.message) return error.error.message;

          return 'An error occurred. Please try again.';
        };

        const errorMsg = getErrorMessage(error);

        // ✅ Handle DB down (503)
        if (error.status === 503) {
          console.log('❌ Database Service Down - User stays logged in');
          sessionStorage.setItem('dbServiceError', errorMsg);
          return throwError(() => error);
        }

        // ✅ Handle Unauthorized (401/403)
        if (error.status === 401 || error.status === 403) {
          console.log('❌ Token Invalid/Forbidden - Logging out');
          localStorage.clear();
          this.router.navigate(['/login'], { queryParams: { errorMessage: errorMsg } });
          return throwError(() => error);
        }

        // ✅ Other errors
        console.log('❌ Other error - propagate');
        return throwError(() => error);
      })
    );
  }
}
