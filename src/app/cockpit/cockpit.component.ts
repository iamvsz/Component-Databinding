import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{ ServerName: string, ServerContent: string }>();
  @Output() blueprintCreated = new EventEmitter<{ ServerName: string, ServerContent: string }>();
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer() {
    this.serverCreated.emit({
      ServerName: this.newServerName,
      ServerContent: this.newServerContent
    })
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      ServerName: this.newServerName,
      ServerContent: this.newServerContent
    })
  }
}
