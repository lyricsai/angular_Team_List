import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ErrorService {
    private errorSource = new BehaviorSubject<string>('');
    currentError = this.errorSource.asObservable();

    constructor() {}

    onError(error: string) {
        this.errorSource.next(error);
    }
}
