import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{ ServerName: string, ServerContent: string }>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{ ServerName: string, ServerContent: string }>();
  // newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(nameInput : HTMLInputElement) {
    this.serverCreated.emit({
      ServerName: nameInput.value,
      ServerContent: this.newServerContent
    })
  }

  onAddBlueprint(nameInput : HTMLInputElement) {
    this.blueprintCreated.emit({
      ServerName: nameInput.value,
      ServerContent: this.newServerContent
    })
  }
}
