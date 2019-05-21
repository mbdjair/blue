import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

// Import rxjs map operator
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  API = 'http://localhost:3000';

  enterprises: any[] = [];

  constructor(private http: Http) {}

  ngOnInit() {
    this.getAllEnterprises();
  }

  addEnterprise(name) {
    this.http.post(`${this.API}/enterprises`, {name})
      .subscribe(() => {
        this.getAllEnterprises();
      });
  }

  getAllEnterprises() {
    this.http.get(`${this.API}/enterprises`)
      .subscribe(enterprises => {
        console.log(enterprises);
        this.enterprises = enterprises.json();
      });
  }
}
