import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
    title: string = 'task tracker';

    constructor() { }

    ngOnInit(): void {
    }

    toggleAddTask() {
        console.log('add task')
    }
}