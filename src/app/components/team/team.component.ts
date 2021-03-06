import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-team',
    templateUrl: './team.component.html',
    styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {
    @Input() teams: string[][] = [];
    @Input() generated: boolean = false;

    constructor() {}

    ngOnInit(): void {}
}
