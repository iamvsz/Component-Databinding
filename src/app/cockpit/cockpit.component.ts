import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{ ServerName: string, ServerContent: string }>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{ ServerName: string, ServerContent: string }>();
  // newServerName = '';
  // newServerContent = '';

  //The same change (add { static: true } as a second argument) needs to be applied to ALL usages of @ViewChild() (and also @ContentChild() which you'll learn about later) IF you plan on accessing the selected element inside of ngOnInit().
  // If you DON'T access the selected element in ngOnInit (but anywhere else in your component), set static: false instead
  // If you're using Angular 9+, you only need to add { static: true } (if needed) but not { static: false }.
  @ViewChild('serverContentInput', { static: true }) serverContent!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      ServerName: nameInput.value,
      ServerContent: this.serverContent.nativeElement.value
    })
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      ServerName: nameInput.value,
      ServerContent: this.serverContent.nativeElement.value
    })
  }
}
