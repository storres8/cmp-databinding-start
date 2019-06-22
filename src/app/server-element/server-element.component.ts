import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"]
})
export class ServerElementComponent implements OnInit {
  // @Input is a method that allows you to accept an incoming object from a parent component.
  // passing in a string to input you can customize the name of the parent binding.
  @Input("svrElement") element: {
    type: string;
    name: string;
    content: string;
  };
  constructor() {}

  ngOnInit() {}
}
