import { Component, VERSION, OnInit } from '@angular/core';
import { AccountService } from './account.service';
import { Router } from '@angular/router';
import { Staff } from './staff';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  constructor(public _service : AccountService,
    private _route: Router) { }
    staff = new Staff();

  ngOnInit() {
    console.log(this.staff + "app sau khi dn ve trang chu")
  }
  name = 'Angular ' + VERSION.major;
  logOut() {
    sessionStorage.removeItem('username')
    sessionStorage.removeItem('role')
    this._route.navigate([''])
  }
}
