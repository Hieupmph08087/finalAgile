import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validator, Validators} from '@angular/forms';
import { Staff } from '../staff';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-dangky',
  templateUrl: './dangky.component.html',
  styleUrls: ['./dangky.component.css']
})
export class DangkyComponent implements OnInit {
  staff = new Staff();
  msg='';

  dangkyForm = new FormGroup({
    user: new FormControl('',[
      Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]/)
      
    ]),
    staff_id: new FormControl('',[
      Validators.required,
      Validators.maxLength(5),
      Validators.pattern(/^[a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]/)
      
    ]),
    pass: new FormControl('',[
      Validators.required,
    ]),
    cfpass: new FormControl('',[
      Validators.required,
    ]),
    role: new FormControl('',[
      Validators.required,
      Validators.maxLength(1),
      Validators.pattern(/^[0-2]/)
    ]),
    fullname: new FormControl('',[
      Validators.minLength(4),
      Validators.pattern(/^[0-9a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]/)
    ])
  })

  get user() {return this.dangkyForm.get('user');}
  get number() {return this.dangkyForm.get('number');}
  get fullname() {return this.dangkyForm.get('fullname');}
  get role() {return this.dangkyForm.get('role');}
  get staff_id() {return this.dangkyForm.get('staff_id');}
  get pass() {return this.dangkyForm.get('pass');}
  get cfpass() {return this.dangkyForm.get('cfpass');}

  constructor(private _service : AccountService,
    private _router : Router) { }

  ngOnInit(): void {
  }
  registerUser(){
    this._service.registerUserFromRemote(this.staff).subscribe(
      data => {console.log("respones recevied")
              this._router.navigate(['/'])
    },
      error => {console.log("exception ocurred")
              this.msg = "Dang ky that bai";
    }
    )
}
}


