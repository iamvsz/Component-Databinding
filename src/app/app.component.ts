import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'component-databinding';
  serverElements: any[] = [];

  onServerAdded(ServerData: { ServerName: string, ServerContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: ServerData.ServerName,
      content: ServerData.ServerContent
    })
  }

  onBlueprintAdded(ServerData: { ServerName: string, ServerContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: ServerData.ServerName,
      content: ServerData.ServerContent
    })
  }
}
