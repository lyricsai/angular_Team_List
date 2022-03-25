import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, FormArray } from '@angular/forms';
import { ErrorService } from 'src/app/services/ErrorService';
import { ListUpdateService } from 'src/app/services/ListUpdateService';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
    name = new FormControl('');
    memberArray = new FormArray([]);
    errorMessage: string = '';

    // @Output() memberUpdateEvent = new EventEmitter();

    constructor(
        private data: ListUpdateService,
        private dataError: ErrorService
    ) {}

    ngOnInit(): void {
        this.dataError.currentError.subscribe(
            (message) => (this.errorMessage = message)
        );
    }

    onInput(member: string) {
        this.name.setValue(member);
        this.dataError.onError('');
    }

    // sendMemberUpdate(): void {
    //     this.memberUpdateEvent.emit(this.memberArray.value);
    // }

    messageUpdate(): void {
        this.data.updateList(this.memberArray.value);
    }

    onError(): void {
        this.dataError.onError(this.errorMessage);
    }

    addMember(): void {
        if (this.name.value) {
            this.memberArray.value.push(this.name.value);
            // this.name.setValue('');
            // this.sendMemberUpdate();
            this.messageUpdate();
            this.name.setValue('');
        } else {
            this.errorMessage = "Name can't be empty";
            this.onError();
            return;
        }
    }
}
