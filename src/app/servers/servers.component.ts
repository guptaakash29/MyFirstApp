import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-servers",
  templateUrl: "./servers.component.html",
  styleUrls: ["./servers.component.css"],
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = "No server was created!";
  serverName: string = "Testserver";
  userName: string = "";
  serverCreated: boolean = false;
  servers = ["TestServer", "TestServer2"];
  displayBlock = true;
  displayBlockLog = [];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  ngOnInit() {}
  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus =
      "Server was created! Name is " + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }

  onResetUsername() {
    this.userName = "";
  }

  onDisplayBlock() {
    this.displayBlock = !this.displayBlock;
    this.displayBlockLog.push(this.displayBlockLog.length + 1);
  }
}
