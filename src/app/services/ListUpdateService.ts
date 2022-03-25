import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ListUpdateService {
    private memberListSource = new BehaviorSubject<string[]>([]);
    currentMemberList = this.memberListSource.asObservable();

    constructor() {}

    updateList(memberList: string[]) {
        this.memberListSource.next(memberList);
    }
}
