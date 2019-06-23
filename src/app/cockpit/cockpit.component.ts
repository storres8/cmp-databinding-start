import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef
} from "@angular/core";

@Component({
  selector: "app-cockpit",
  templateUrl: "./cockpit.component.html",
  styleUrls: ["./cockpit.component.css"]
})
export class CockpitComponent implements OnInit {
  // new EventEmitter is an object in angular that allows you to emit your own event.
  // the <> sign mean that the type of EventEmitter is generic in TS.
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output() blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  /* These were the values used before we used template refs and
    @ViewChild to grab values from the template
  */
  // newServerName = "";
  // newServerContent = "";

  // @ViewChild is a property decorator that lets the TS file access elemets from the template.
  // must pass in w/ it {static: true} for Angular 8 or set it to flase if used inside ngOnInit.

  // The following is one line, but split into two.
  @ViewChild("ServerContentInput", { static: true })
  serverContentInput: ElementRef;
  //

  constructor() {}

  ngOnInit() {}
  onAddServer(ServerNameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: ServerNameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(ServerNameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: ServerNameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
}
