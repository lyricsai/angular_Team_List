import { Component, OnInit } from '@angular/core';
import { ListUpdateService } from 'src/app/services/ListUpdateService';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
    members: string[] = [];

    constructor(private data: ListUpdateService) {}

    ngOnInit(): void {
        this.data.currentMemberList.subscribe(
            (members) => (this.members = members)
        );
    }

    messageUpdate(): void {
        this.data.updateList(this.members);
    }
}
