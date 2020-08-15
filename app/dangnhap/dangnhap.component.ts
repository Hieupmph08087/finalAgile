import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { AccountService } from '../account.service';
import { Staff } from '../staff';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dangnhap',
  templateUrl: './dangnhap.component.html',
  styleUrls: ['./dangnhap.component.css']
})
export class DangnhapComponent implements OnInit {
  staff = new Staff();
  
  invalidLogin = false
  msg='';
  dangnhapForm = new FormGroup({
    user: new FormControl(''),
    pass: new FormControl('')
  })

  constructor(private _service : AccountService,
        private _router : Router) { }

  ngOnInit(): void {
    document.body.classList.add('bg-img');
  }
  bg1="./assets/image/bg-3.jpg"; 
  loginUser(){
      this._service.loginUserFromRemote(this.staff).subscribe(
        data => {console.log("respones recevied")
                this.staff = data
                console.log(this.staff)
                  sessionStorage.setItem('username', this.staff.username)
                  sessionStorage.setItem('role', this.staff.role.toString())
                  this.invalidLogin = false
                
                this._router.navigate(['/'])
      },
        error => {console.log("exception ocurred")
                this.msg = "Mat khau hoac tai khoan khong dung";
      }
      )
  }
}
