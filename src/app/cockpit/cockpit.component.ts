import {
    Component,
    OnInit,
    EventEmitter,
    Output,
    ViewChild,
    ElementRef
} from '@angular/core';

@Component({
    selector: 'app-cockpit',
    templateUrl: './cockpit.component.html',
    styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

    @Output() serverCreated = new EventEmitter < {
        serverName: string,
        serverContent: string
    } > ();
    @Output('bpCreated') blueprintCreated = new EventEmitter < {
        serverName: string,
        serverContent:  string
    } > ();

     @Output() somethingCreated = new EventEmitter <{
     serverName:string,
     serverContent:string
     }> ();

//    newServerName = '';
    newServerContent = '';

    @ViewChild("serverContent")serverContent: ElementRef;
    constructor() {}

    ngOnInit() {}

    onAddServer(nameInput) {

        this.serverCreated.emit({
            serverName: nameInput.value,
            serverContent: this.serverContent.nativeElement.value
        });
    }

    onAddBlueprint(nameInput) {
        this.blueprintCreated.emit({
            serverName: nameInput.value,
            serverContent: this.serverContent.nativeElement.value
        });
    }

     onAddSomething(nameInput){
         this.somethingCreated.emit({
         serverName:nameInput.value,
        serverContent:this.serverContent.nativeElement.value
         });

     }

}
