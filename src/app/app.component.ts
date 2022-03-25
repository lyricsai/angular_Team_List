import { Component, OnInit } from '@angular/core';
import { ListUpdateService } from './services/ListUpdateService';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title: string = 'ngMemberList';
    members: string[] = [];

    constructor(private data: ListUpdateService) {}

    // recieveMemberUpdate($event: string[]) {
    //     this.members = $event;
    //     console.log('update', this.members);
    // }

    ngOnInit(): void {
        this.data.currentMemberList.subscribe(
            (members) => (this.members = members)
        );
        console.log(this.members);
    }
}
