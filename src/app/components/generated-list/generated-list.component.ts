import { Component, OnInit, Input } from '@angular/core';
import { ErrorService } from 'src/app/services/ErrorService';

@Component({
    selector: 'app-generated-list',
    templateUrl: './generated-list.component.html',
    styleUrls: ['./generated-list.component.scss'],
})
export class GeneratedListComponent implements OnInit {
    errorMessage: string = '';
    numberOfTeams: number | '' = '';
    generated: boolean = false;
    teams: string[][] = [];

    @Input() members: string[] = [];

    constructor(private data: ErrorService) {}

    ngOnInit(): void {
        this.data.currentError.subscribe(
            (message) => (this.errorMessage = message)
        );
    }

    onTeamsNumberInput(value: string): void {
        this.numberOfTeams = +value;
    }

    onReset(): void {
        this.members.length = 0;
        this.generated = false;
    }

    onGenerateTeams(): void {
        this.teams.length = 0;
        this.errorMessage = '';

        if (!this.numberOfTeams) return;

        if (this.members.length < this.numberOfTeams) {
            this.errorMessage =
                'The number of teams is more than the number of team members';
            return;
        }

        const teamMembers = [...this.members];
        this.generated = true;

        //setting members to teams randomly
        while (teamMembers.length) {
            for (let i = 0; i < this.numberOfTeams; i++) {
                const randomIndex = Math.floor(
                    Math.random() * teamMembers.length
                );
                const member = teamMembers.splice(randomIndex, 1)[0];

                if (!member) break;

                if (this.teams[i]) {
                    this.teams[i].push(member);
                } else {
                    this.teams[i] = [member];
                }
            }
        }

        console.log(this.teams);
    }
}
