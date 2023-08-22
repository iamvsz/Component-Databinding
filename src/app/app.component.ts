import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'component-databinding';
  serverElements: any[] = [{ type: 'server', name: 'First Server', content: 'Vishal Zade' }];
}
