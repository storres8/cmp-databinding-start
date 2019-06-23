import { Component, OnInit, EventEmitter, Output } from "@angular/core";

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

  newServerName = "";
  newServerContent = "";

  constructor() {}

  ngOnInit() {}
  onAddServer(ServerNameInput) {
    this.serverCreated.emit({
      serverName: ServerNameInput.value,
      serverContent: this.newServerContent
    });
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }
}
